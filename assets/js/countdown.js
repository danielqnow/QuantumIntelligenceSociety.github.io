/**
 * SQAI 2026 Conference Countdown Timer
 * 
 * This script creates a countdown timer that displays the days, hours, minutes, and seconds
 * remaining until the SQAI 2026 conference begins.
 * 
 * Updated version to ensure seconds work properly in production environments.
 */

(function() {
  // 声明一个全局变量，表示倒计时是否已初始化
  window.sqaiCountdownActive = false;
  
  // 等待DOM加载完成或收到初始化事件
  function initCountdown() {
    if (window.sqaiCountdownActive) return; // 防止重复初始化
    
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setupCountdown();
    } else {
      document.addEventListener('DOMContentLoaded', setupCountdown);
    }
    
    // 监听自定义初始化事件
    document.addEventListener('countdown:ready', setupCountdown);
    
    // 如果5秒后仍未初始化，再次尝试
    setTimeout(function() {
      if (!window.sqaiCountdownActive) {
        console.log('Attempting to initialize countdown after delay');
        setupCountdown();
      }
    }, 5000);
  }

  function setupCountdown() {
    // 防止重复初始化
    if (window.sqaiCountdownActive) return;
    
    console.log('Setting up countdown timer');
    
    // 立即查找秒数元素，如果存在移除js-disabled类
    const secondsEl = document.getElementById('countdown-seconds');
    if (secondsEl) {
      secondsEl.classList.remove('js-disabled');
    }
    // 确保计时器元素存在
    const daysElement = document.getElementById('countdown-days');
    const hoursElement = document.getElementById('countdown-hours');
    const minutesElement = document.getElementById('countdown-minutes');
    const secondsElement = document.getElementById('countdown-seconds');
    const countdownElement = document.getElementById('countdown-container');
    
    // 如果元素不存在，直接返回
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement || !countdownElement) {
      console.log('Countdown elements not found on this page');
      return;
    }
    
    // 目标日期：2026年6月26日上午9点（UTC+8台北时间）
    // 注意：JavaScript月份从0开始（0=1月，1=2月，...，5=6月）
    // 台北是UTC+8，所以我们用UTC+0的1:00 AM来代表台北的9:00 AM
    const targetDate = new Date(Date.UTC(2026, 5, 26, 1, 0, 0)); // 2026-06-26 09:00:00 台北时间
    
    // 更新计时器的函数
    function updateCountdown() {
      try {
        // 获取当前时间（UTC）
        const now = new Date();
        
        // 计算剩余时间（毫秒）
        const diff = targetDate - now;
        
        // If the countdown is over, show that the conference is in progress
        if (diff <= 0) {
          countdownElement.innerHTML = '<div class="countdown-ended"><h3>SQAI 2026 is Now in Progress!</h3></div>';
          return;
        }
        
        // 计算天、小时、分钟和秒
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // 更新显示 - 使用赋值两种方式，增加兼容性
        if (daysElement) {
          const dayStr = days.toString().padStart(2, '0');
          daysElement.textContent = dayStr;
          daysElement.innerText = dayStr;
        }
        
        if (hoursElement) {
          const hourStr = hours.toString().padStart(2, '0');
          hoursElement.textContent = hourStr;
          hoursElement.innerText = hourStr;
        }
        
        if (minutesElement) {
          const minStr = minutes.toString().padStart(2, '0');
          minutesElement.textContent = minStr;
          minutesElement.innerText = minStr;
        }
        
        if (secondsElement) {
          const secStr = seconds.toString().padStart(2, '0');
          secondsElement.textContent = secStr;
          secondsElement.innerText = secStr;
        }
        
        // 为数字添加动画效果
        if (daysElement) daysElement.classList.add('countdown-animate');
        if (hoursElement) hoursElement.classList.add('countdown-animate');
        if (minutesElement) minutesElement.classList.add('countdown-animate');
        if (secondsElement) secondsElement.classList.add('countdown-animate');
        
        // 移除动画类，以便下次更新时可以再次添加
        setTimeout(function() {
          if (daysElement) daysElement.classList.remove('countdown-animate');
          if (hoursElement) hoursElement.classList.remove('countdown-animate');
          if (minutesElement) minutesElement.classList.remove('countdown-animate');
          if (secondsElement) secondsElement.classList.remove('countdown-animate');
        }, 500);
      } catch (error) {
        console.error('Error updating countdown:', error);
      }
    }
    
    // 初次运行
    updateCountdown();
    
    // 每秒更新一次
    const intervalId = setInterval(updateCountdown, 1000);
    
    // 页面卸载时清除定时器
    window.addEventListener('beforeunload', function() {
      clearInterval(intervalId);
    });
    
    // 标记为已初始化
    window.sqaiCountdownActive = true;
    console.log('Countdown timer active');
  }

  // 初始化
  initCountdown();
  
  // 公开一个全局方法，允许手动触发初始化
  window.initSQAICountdown = initCountdown;
})();
