/**
 * Greedy Navigation - Academic Pages standard implementation
 * https://github.com/academicpages/academicpages.github.io
 */

$(document).ready(function() {
  // Standard Academic Pages navigation functionality
  var $nav = $('.greedy-nav');
  var $btn = $('.greedy-nav button');
  var $vlinks = $('.greedy-nav .visible-links');
  var $hlinks = $('.greedy-nav .hidden-links');

  var numOfItems = 0;
  var totalSpace = 0;
  var breakWidths = [];

  // Get initial state
  $vlinks.children().outerWidth(function(i, w) {
    totalSpace += w;
    numOfItems += 1;
    breakWidths.push(totalSpace);
  });

  var availableSpace, numOfVisibleItems, requiredSpace;

  function check() {
    // Get current state
    availableSpace = $vlinks.width() - 10;
    numOfVisibleItems = $vlinks.children().length;
    requiredSpace = breakWidths[numOfVisibleItems - 1];

    // There is not enough space
    if (requiredSpace > availableSpace) {
      $vlinks.children().last().prependTo($hlinks);
      numOfVisibleItems -= 1;
      check();
    // There is more than enough space
    } else if (availableSpace > breakWidths[numOfVisibleItems]) {
      $hlinks.children().first().appendTo($vlinks);
      numOfVisibleItems += 1;
      check();
    }
    
    // Update the button accordingly
    $btn.attr("count", numOfItems - numOfVisibleItems);
    
    if (numOfVisibleItems === numOfItems || $(window).width() >= 769) {
      $btn.addClass('hidden');
    } else {
      $btn.removeClass('hidden');
    }
  }

  // Toggle the hidden links when button is clicked
  $btn.on('click', function() {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
  });

  // Window listeners
  $(window).resize(function() {
    check();
  });

  // Initial check
  check();
});
