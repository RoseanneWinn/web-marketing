$(document).ready(function () {
  var showSearchPanel = function() {
    var $navBar = $('#izendaNavBar');
    $navBar.children().each(function(iNav, nav) {
      var $nav = $(nav);
      if ($nav.attr('id') != 'izendaNavBarSearch') {
        $nav.addClass('hidden');
      } else {
        $nav.removeClass('hidden');
      }
    });
  };

  var showMenuPanel = function () {
    var $navBar = $('#izendaNavBar');
    $navBar.children().each(function (iNav, nav) {
      var $nav = $(nav);
      if ($nav.attr('id') != 'izendaNavBarSearch') {
        $nav.removeClass('hidden');
      } else {
        $nav.addClass('hidden');
      }
    });
  };

  // search handler
  var searchHandler = function () {
    window.location="http://wiki.izenda.us/search?q=" + $('#searchInput').val();
  };

  var closeSearchHandler = function () {
    var $input = $('#searchInput');
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
  $('#searchBtn').click(function (e) {
    e.preventDefault();
    if ($(window).width() > 1023) {
      showSearchPanel();
      var $input = $('#searchInput');
      $input.width(0);
      $input.animate({ width: '300px' }, 200, function() {
        $(this).focus();
      });
    }
  });

  $(window).resize(function() {
    if ($(window).width() <= 1023) {
      $('#searchInput').css('width','100%');
    } else {
      $('#searchInput').width('300px');
    }
  });

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
  $('.navbar-nav li').each(function (iLi, li) {
    var $li = $(li);
    var $a = $($li.children('a'));
    var tabCondition = $a.attr('tc');
    if (tabCondition != null && tabCondition.trim() != '' && location.href.indexOf(tabCondition) >= 0) {
      $li.addClass('active');
    }
  });

  //
  $('.navbar-nav > li > a, .dropdown-menu > li > a').click(function () {
    var $this = $(this);
    var $navbar = $($this.closest('.navbar-nav'));
    if ($navbar.hasClass('iz-search-btn') || $navbar.hasClass('iz-search') || $navbar.hasClass('iz-free-trial'))
      return;
    $('.navbar-nav > li').removeClass('active');
    $($this.closest('.iz-menu')).addClass('active');
  });
  
  //Playing with new icons
  black = ['../web-marketing/images/Phone4.png', '../web-marketing/images/Email4.png', '../web-marketing/images/ChatBox4.png'];
  blue = ['../web-marketing/images/PhoneBlue.png', '../web-marketing/images/EmailBlue.png', '../web-marketing/images/ChatBoxBlue2.png'];
  setSrc = function(source) {
    return function() {
      $(this).attr('src',source);};};
  
  $('#phone').mouseenter(setSrc(blue[0])).mouseleave(setSrc(black[0]));
  $('#email').mouseenter(setSrc(blue[1])).mouseleave(setSrc(black[1]));
  $('#chat-box').mouseenter(setSrc(blue[2])).mouseleave(setSrc(black[2]));

  //fancybox stuff
  $(".modalbox").fancybox();
	$("#contact").submit(function() { return false; });

  $("#send").on("click", function(){
	var emailval  = $("#email").val();
	var msgval    = $("#msg").val();
	var msglen    = msgval.length;
	var mailvalid = validateEmail(emailval);

	if(mailvalid == false) {
		$("#email").addClass("error");
	}
	else if(mailvalid == true){
		$("#email").removeClass("error");
	}

	if(msglen < 4) {
		$("#msg").addClass("error");
	}
	else if(msglen >= 4){
		$("#msg").removeClass("error");
	}

  if(mailvalid == true && msglen >= 4) {
		// if both validate we attempt to send the e-mail
		// first we hide the submit btn so the user doesnt click twice
		$("#send").replaceWith("<em>sending...</em>");

		$.ajax({
			type: 'POST',
			url: 'sendmessage.php',
			data: $("#contact").serialize(),
			success: function(data) {
				if(data == "true") {
					$("#contact").fadeOut("fast", function(){
						$(this).before("<strong>Success! Your feedback has been sent, thanks :)</strong>");
						setTimeout("$.fancybox.close()", 1000);
					});
				}
			}
        });
	}
});

});

