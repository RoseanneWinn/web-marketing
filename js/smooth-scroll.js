if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

var time = 400;
var distance = 200;

function wheel(event) {
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;
  handle();
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
}

function handle() {
  var $anchors = $('.anchor');
  var scrollCount = $(window).scrollTop() - (distance * delta);
  $anchors.each(function(iAnchor, anchor) {
    var $anchor = $(anchor);
    var anchorShift = $anchor.offset().top - ($(window).scrollTop() - (distance * delta));
    if (Math.abs(anchorShift) < 100 && Math.abs(anchorShift) > 0) {
      scrollCount = $anchor.offset().top;
    }
  });

  $('html, body').stop().animate({
    scrollTop: scrollCount
  }, time);
}


$(document).keydown(function (e) {
  switch (e.which) {
    //up
    case 38:
      $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - distance
      }, time);
      break;

      //down
    case 40:
      $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() + distance
      }, time);
      break;
  }
});