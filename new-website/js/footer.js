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

//////////////////////////////////////////////////////////////////////////////////////////
//Submit in Footer
//////////////////////////////////////////////////////////////////////////////////////////
  $('#footer-submit').click(function() {
    if ($('#footer-form').valid() == true) {
      $('#footer-submit').addClass('hidden');
      $('#footer-loading-text').removeClass('hidden');
    }
  });
}
