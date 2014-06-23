function initializeIzendaFooter() {
  //////////////////////////////////////////////////////////////////////////////////////////
  // Back to top animation
  //////////////////////////////////////////////////////////////////////////////////////////
  $('#backToTopBtn').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 250);
  });
  var updateBackToTopVisibility = function () {
    if ($(window).scrollTop() == 0)
      $('.back-to-top').addClass('hidden');
    else
      $('.back-to-top').removeClass('hidden');
  };
  updateBackToTopVisibility();
  $(window).scroll(function () {
    updateBackToTopVisibility();
  });
}