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

//Social media new windows
  $('.new-window').click(function() {
    var here=$(this).prop("href");
    window.open(here);
    return false;
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
