$(document).ready(function () {
  var showSearchPanel = function() {
    var $navBar = $('#izNavBar');
    $navBar.children().each(function(iNav, nav) {
      var $nav = $(nav);
      if ($nav.attr('id') != 'izNavBarSearch') {
        $nav.addClass('hidden');
        $('#contact-images').addClass('hidden');
      } else {
        $nav.removeClass('hidden');
        $('#contact-images').removeClass('hidden');
      }
    });
  };

  var showMenuPanel = function () {
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
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Contact buttons
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var parseImageSrc = function(src) {
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
  }, function() {
    var $img = $(this).children('img');
    var imgSrc = $img.attr('src');
    var parts = parseImageSrc(imgSrc);
    $img.attr('src', parts[0].substr(0, parts[0].length - 4) + parts[1]);
  });

  // tryit free button
  $('#izTryItFreeButton').click(function() {
    window.location.href = 'http://www.izenda.com/Site/Pages/LandingPages/Ad-Hoc-Reporting.aspx';
  });

  // contact phone button
  $('#izContactsPhoneButton').click(function() {
    window.location.href = 'http://www.izenda.com/site/Pages/contactus.aspx';
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
  var searchHandler = function () {
    window.location = "http://wiki.izenda.us/search?q=" + $('#izSearchInput').val();
  };

  var closeSearchHandler = function () {
    var $input = $('#izSearchInput');
    if ($(window).width() > 1023) {
      $input.animate({ width: '1px' }, 200, function() {
        showMenuPanel();
        $input.width('300px');
      });
    } else {
      showMenuPanel();
      $input.css('width', '100%');
    }
  };

  // search button events
  $('#izSearchBtn').click(function (e) {
    e.preventDefault();
    if ($(window).width() > 1023) {
      showSearchPanel();
      var $input = $('#izSearchInput');
      $input.width(0);
      $input.animate({ width: '300px' }, 200, function() {
        $(this).focus();
      });
    }
  });

  $(window).resize(function() {
    if ($(window).width() <= 1023) {
      $('#izSearchInput').css('width', '100%');
    } else {
      $('#izSearchInput').width('300px');
    }
  });

  $('#izSearchInput').keydown(function (e) {
    if (e.keyCode == 27) {
      closeSearchHandler();
    }
    if (e.keyCode == 13) {
      searchHandler();
    }
  });

  $('#izSearchInput').focusout(function () {
    closeSearchHandler();
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
  
  //Playing with contact icons
  black = ['../web-marketing/images/Phone4.png', '../web-marketing/images/Email4.png', '../web-marketing/images/ChatBox4.png'];
  blue = ['../web-marketing/images/PhoneBlue.png', '../web-marketing/images/EmailBlue.png', '../web-marketing/images/ChatBoxBlue2.png'];
  setSrc = function(source) {
    return function() {
      $(this).attr('src',source);};};
  
  $('#phone').mouseenter(setSrc(blue[0])).mouseleave(setSrc(black[0]));
  $('#email').mouseenter(setSrc(blue[1])).mouseleave(setSrc(black[1]));
  $('#chat-box').mouseenter(setSrc(blue[2])).mouseleave(setSrc(black[2]));

  //fancybox stuff for form submission
  $(".modalbox").fancybox();

  $("#send").on("click", function(){
	var emailval  = $("#email").val();
  var firstval   = $("#first_name").val();
  var lastval   = $("#last_name").val();
  var phval   =  $("#form1_phone").val();
  var comurl   =  $("#company_url").val(); 
	var mailvalid = validateEmail(emailval);
  var len    = function(value) {
    return value.length;};
	
	if(mailvalid == false) {
		$("#email").addClass("error");
	}
	else if(mailvalid == true){
		$("#email").removeClass("error");
	}

  if(len(phval) < 9) {
    $("#number").addClass("error");}
  else if(len(phval) == 9) {
    $("#number").removeClass("error");}

  if(mailvalid == true) {
		// if both validate we attempt to send the e-mail
		// first we hide the submit btn so the user doesnt click twice
		$("#send").replaceWith("<em>sending...</em>");
    $("#send").submit();}
  });
});


