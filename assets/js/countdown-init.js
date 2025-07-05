/**
 * SQAI 2026 Conference Countdown Timer Initializer
 * 
 * This script ensures the countdown is properly initialized 
 * even if the main script loads after the DOM.
 */

// 确保不会重复初始化
window.countdownInitialized = window.countdownInitialized || false;

// 尝试初始化倒计时（如果尚未初始化）
function tryInitCountdown() {
  if (window.countdownInitialized) return;
  
  const countdownContainer = document.getElementById('countdown-container');
  if (!countdownContainer) return; // 当前页面没有倒计时组件
  
  const secondsElement = document.getElementById('countdown-seconds');
  if (!secondsElement) return; // 组件结构不完整
  
  // 触发一个自定义事件，通知countdown.js初始化
  const event = new Event('countdown:ready');
  document.dispatchEvent(event);
  
  // 标记为已初始化
  window.countdownInitialized = true;
  
  console.log('Countdown timer initialized');
}

// 页面加载完成后执行
if (document.readyState === 'complete') {
  tryInitCountdown();
} else {
  window.addEventListener('load', tryInitCountdown);
  
  // 如果5秒后仍未初始化，再次尝试
  setTimeout(tryInitCountdown, 5000);
}
