if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

var time = 200;
var distance = $(window).height() / 3;

function wheel(event) {
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;
  handle();
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
}

function handle() {
  distance = $(window).height() / 3;
  var $anchors = $('.anchor');
  var scrollCount = $(window).scrollTop() - (distance * delta);
  $anchors.each(function(iAnchor, anchor) {
    var $anchor = $(anchor);
    var anchorShift = $anchor.offset().top - ($(window).scrollTop() - (distance * delta));
    if (Math.abs(anchorShift) < distance / 3 && Math.abs(anchorShift) > 0) {
      scrollCount = $anchor.offset().top;
    }
  });

  $('html, body').stop().animate({
    scrollTop: scrollCount
  }, time, 'easeOutCubic');
}


$(document).keydown(function (e) {
  switch (e.which) {
    //up
    case 38:
      distance = $(window).height() / 3;
      $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - distance
      }, time);
      break;

      //down
    case 40:
      distance = $(window).height() / 3;
      $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() + distance
      }, time);
      break;
  }
});