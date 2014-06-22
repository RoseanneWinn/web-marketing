function initializeIzendaHeader() {
  var showSearchPanel = function () {
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
    window.location.href = 'http://www.izenda.com/Site/Pages/LandingPages/Ad-Hoc-Reporting.aspx';
  });

  // contact phone button
  $('#izContactsPhoneButton').click(function () {
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
    if ($(window).width() < 1023) {
      $input.animate({ width: '1px' }, 200, function () {
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
      $input.animate({ width: '300px' }, 200, function () {
        $(this).focus();
      });
    }
  });

  $(window).resize(function () {
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

///////////////////////////////////////////////////////////////////////////////////////////
//Pricing submit
///////////////////////////////////////////////////////////////////////////////////////////
   /*$('#pricing-form').validate({
      submitHandler : function(form) {
        $('#send').addClass("hidden");
        $('#pricing-loading-text').removeClass("hidden");
        var data = {
          'first-name': $('#first_name').val(),
          'last-name': $('#last_name').val(),
          'email': $('#email').val(),
          'phone-number': $('#phone').val(),
          'company-url': $('#company_url').val(),
          'web-source': 'FreeTrial & LiveDemo'
        };
        $.post('https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', data, function (sfLeadResponse) {
          console.log(sfLeadResponse);
          if (sfLeadResponse["success"] == true) {
            $('#pricing-loading-text').html('<h2>Thanks</h2>');
            $('#pricing-form').attr('data-dismiss', 'modal');
              }
          else {
            console.log('the form did not submit');
            $('#pricing-loading-text').html('<h2>Oops, something went wrong!</h2>');
          }
         }, 'json');
        }
       });*/

  $('#send').click(function() {
    if ($('#pricing-form').valid()== true) {
      $('#send').addClass("hidden");
      $('#pricing-loading-text').removeClass("hidden");
      }
     });


  //fancybox stuff for form submission
  /*$(".modalbox").fancybox();/

  $("#send").on("click", function () {
    var emailval = $("#email").val();
    var firstval = $("#first_name").val();
    var lastval = $("#last_name").val();
    var phval = $("#form1_phone").val();
    var comurl = $("#company_url").val();

    // TODO: I didn't find validateEmail function implementation
    if (validateEmail(emailval)) {
      $("#email").removeClass("error");
      // if both validate we attempt to send the e-mail
      // first we hide the submit btn so the user doesnt click twice
      $("#send").replaceWith("<em>sending...</em>");
      $("#send").submit();
    } else
      $("#email").addClass("error");

    // TODO: what to do if phval.length > 9 ???
    if (phval.length < 9) {
      $("#number").addClass("error");
    } else if (phval.length == 9) {
      $("#number").removeClass("error");
    }
  });*/
};


