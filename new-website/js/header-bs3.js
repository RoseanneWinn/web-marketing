function initializeIzendaHeader() {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Contact buttons
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var parseImageSrc = function (src) {
    var idx = src.lastIndexOf('.');
    var parts = [src.substr(0, idx), src.substr(idx)];
    return parts;
  };

  // contact buttons hover effect
  $('.iz-contact-button, .iz-header-button-list-main > a').hover(function () {
    var $img = $(this).children('img');
    var imgSrc = $img.attr('src');
    var parts = parseImageSrc(imgSrc);
    $img.attr('src', parts[0] + 'Blue' + parts[1]);
  }, function () {
    var $img = $(this).children('img');
    var imgSrc = $img.attr('src');
    var parts = parseImageSrc(imgSrc);
    $img.attr('src', parts[0].substr(0, parts[0].length - 4) + parts[1]);
  });

  // tryit free button
  $('#izTryItFreeButton, #izTryItFreeButton2').click(function () {
    window.location.href = '#from-try-it-free';
  });

  // contact phone button
  $('#izContactsPhoneButton').click(function () {
    window.location.href = 'contact.html';
  });

  // contact email button
  $('#izContactsEmailButton').click(function () {
    window.location.href = 'mailto:services@izenda.com';
  });

  // contact chat button
  $('#izContactsChatButton').click(function () {
    SnapEngage.startLink();
  });

  // search handler
  var showSearchPanel = function () {
    // show normal panel
    var $navBar = $('#izNavBar');
    $navBar.children().each(function (iNav, nav) {
      var $nav = $(nav);
      if ($nav.attr('id') != 'izNavBarSearch') {
        $nav.addClass('hidden');
        $('#contact-images').addClass('hidden');
      } else {
        $nav.removeClass('hidden');
        $('#contact-images').removeClass('hidden');
      }
    });

    // show mobile panel
    var $navHeader = $('#izSearchBtnMobile').closest('.navbar-header');
    $navHeader.children().each(function (iChild, child) {
      var $child = $(child);
      if ($child.get(0).tagName.toLowerCase() == 'button') {
        $child.addClass('hidden');
      }
    });
  };

  var showMenuPanel = function () {
    // hide search panel
    var $navBar = $('#izNavBar');
    $navBar.children().each(function (iNav, nav) {
      var $nav = $(nav);
      if ($nav.attr('id') != 'izNavBarSearch') {
        $nav.removeClass('hidden');
        $('#contact-images').removeClass('hidden');
      } else {
        $nav.addClass('hidden');
        $('#contact-images').addClass('hidden');
      }
    });

    // hide mobile panel
    var $navHeader = $('#izSearchBtnMobile').closest('.navbar-header');
    $navHeader.children().each(function (iChild, child) {
      var $child = $(child);
      if ($child.get(0).tagName.toLowerCase() == 'button') {
        $child.removeClass('hidden');
      }
    });
    $('#izNavBarSearchMobile').addClass('hidden');
  };

  var searchHandler = function () {
    window.location = "http://wiki.izenda.us/search?q=" + $('#izSearchInput').val();
  };

  var closeSearchHandler = function () {
    var $input = $('#izSearchInput, #izNavBarSearchMobile');
    $input.animate({ width: '1px' }, 200, function () {
      showMenuPanel();
      $input.width('300px');
    });
  };

  // search button events
  $('#izSearchBtn').click(function (e) {
    e.preventDefault();
    showSearchPanel();
    var $input = $('#izSearchInput');
    $input.width(0);
    $input.animate({ width: '300px' }, 200, function () {
      $(this).focus();
    });
  });
  $('#izSearchBtnMobile').click(function (e) {
    e.preventDefault();
    showSearchPanel();
    var $input = $('#izNavBarSearchMobile');
    $input.removeClass('hidden');
    $input.width(0);
    $input.animate({ width: '300px' }, 200, function () {
      $(this).focus();
    });
  });

  $('#izSearchInput, #izNavBarSearchMobile').keydown(function (e) {
    if (e.keyCode == 27) {
      closeSearchHandler();
    }
    if (e.keyCode == 13) {
      searchHandler();
    }
  });

  $('#izSearchInput, #izNavBarSearchMobile').focusout(function () {
    closeSearchHandler();
  });

  //

  if ($(window).width() <= 1023) {
    $('.iz-menu > a[tc="wiki.izenda.us"]').text('WIKI');
  } else {
    $('.iz-menu > a[tc="wiki.izenda.us"]').text('WIKI');
  }

  $(window).resize(function () {
    if ($(window).width() <= 1023) {
      $('.iz-menu > a[tc="wiki.izenda.us"]').text('WIKI');
    } else {
      $('.iz-menu > a[tc="wiki.izenda.us"]').text('WIKI');
    }
  });

  // active menu item
  $('.navbar-nav li').each(function (iLi, li) {
    var $li = $(li);
    var $a = $($li.children('a'));
    var tabCondition = $a.attr('tc');
    if (tabCondition != null && tabCondition.trim() != '' && location.href.indexOf(tabCondition) >= 0) {
      $li.addClass('active');
    }
  });

  //dropdown actions
  $('.navbar-nav > li > a, .dropdown-menu > li > a').click(function () {
    var $this = $(this);
    var $navbar = $($this.closest('.navbar-nav'));
    if ($navbar.hasClass('iz-search-btn') || $navbar.hasClass('iz-search') || $navbar.hasClass('iz-free-trial'))
      return;
    $('.navbar-nav > li').removeClass('active');
    $($this.closest('.iz-menu')).addClass('active');
  });

};


