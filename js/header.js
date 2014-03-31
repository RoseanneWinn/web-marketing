$(document).ready(function () {
  // dropdowns
  $('.iz-dropdown-toggle').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var $dd = $($this.closest('.iz-dropdown'));
    $dd.find('.iz-dropdown-menu').toggleClass('open', 500);
  });

  $('.iz-menu-item').click(function (e) {
    $('.iz-dropdown-menu').removeClass('open');
    $('.iz-menu-item,.iz-dropdown-toggle').removeClass('active');
    var $a = $(this);
    if ($a.hasClass('iz-menu-item-inner')) {
      $a = $a.closest('.iz-dropdown').find('.iz-dropdown-toggle');
    }
    $a.addClass('active');
  });

  $('.iz-navbar-menu-btn').click(function () {
    $('.iz-nav').each(function(iNav, nav) {
      var $nav = $(nav);
      if (!$nav.hasClass('iz-free-trial') && !$nav.hasClass('iz-navbar-menu-btn')) {
        if ($nav.css('display') == 'none') {
          $nav.css('display', 'block');
        } else {
          $nav.css('display', 'none');
        }
      }
    });
  });

  // search button events
  var searchHandler = function () {
    alert('Search: ' + $('#searchInput').val());
  };
  $('#searchBtn').click(function () {
    var $this = $(this);
    $('.iz-nav').hide();
    $this.closest('.iz-nav').show();
    $this.hide();
    var $input = $('#searchInput');
    $input.width(0);
    $input.show();
    $('#searchIcon').show();
    $input.animate({ width: '300px' }, 200, function () {
      $(this).focus();
    });
  });
  var closeSearchHandler = function () {
    $('#searchBtn').show();
    $('#searchIcon').hide();
    $('#searchInput').hide();
    $('.iz-nav').show();
  };
  $('#searchInput').keydown(function (e) {
    if (e.keyCode == 27) {
      closeSearchHandler();
    }
    if (e.keyCode == 13) {
      searchHandler();
    }
  });
  $('#searchInput').focusout(function () {
    closeSearchHandler();
  });

  // active menu item
  $('.iz-navbar-nav li').each(function (iLi, li) {
    var $li = $(li);
    var $a = $($li.children('a'));
    var tabCondition = $a.attr('tc');
    if (tabCondition != null && location.href.indexOf(tabCondition) >= 0) {
      $a.addClass('active');
    }
  });

});