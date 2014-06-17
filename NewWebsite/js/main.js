//Ready the page before firing any js
$(document).ready(function() {
  var pageUrl = document.URL;
  console.log(pageUrl);

  //////////////////////////////////////////////////////////////////////////////////////////
  // Main picture overlay
  //////////////////////////////////////////////////////////////////////////////////////////
  var populateMainPictureOverlay = function() {
    var $mainPic = $('.main-pic-container > img');
    var $mainPicOverlay = $('.main-pic-overlay');
    $mainPicOverlay.width($mainPic.width() + 40);
    $mainPicOverlay.height($mainPic.height() + 40);
    $mainPicOverlay.css('left', $mainPic.offset().left - 20);
    $mainPicOverlay.removeClass('hidden');
  };
  populateMainPictureOverlay();
  $(window).resize(function() {
    populateMainPictureOverlay();
  });
  $('.main-pic-overlay').click(function() {
    var $embed = $('<embed src="http://www.youtube.com/v/1LlHesMCmYs" type="application/x-shockwave-flash" />');
    var $o = $(this);
    $o.empty();
    $o.css('background-color', 'transparent');
    $embed.width($o.width());
    $embed.height($o.height());
    $o.append($embed);
  });

  //////////////////////////////////////////////////////////////////////////////////////////
  // Set embed video size
  //////////////////////////////////////////////////////////////////////////////////////////
  var $container = $('.iz-feature-embed-container');
  if ($container.find('embed').length > 0)
    $container.height($container.width() * 9 / 16);

  jQuery(window).resize(function ($) {
    if ($container.find('embed').length > 0)
      $container.height($container.width() * 9 / 16);
  });

  //////////////////////////////////////////////////////////////////////////////////////////
  // Resize photos for new design
  //////////////////////////////////////////////////////////////////////////////////////////
  var rtime = new Date(1, 1, 2000, 12, 00, 00);
  var timeout = false;
  var delta = 200;
  var resizeBlockPhoto = function () {
    $('.block-photo').each(function (iBf, bf) {
      var $bf = $(bf);
      $bf.animate({
        height: $bf.width()
      }, 250);
    });
  };
  var resizeEnd = function () {
    var $this = this;
    if (new Date() - rtime < delta) {
      setTimeout(function () {
        resizeEnd.apply($this);
      }, delta);
    } else {
      timeout = false;
      // execute on resize
      resizeBlockPhoto();
    }
  };
  $(window).on('resize', null, this, function () {
    var $this = this;
    rtime = new Date();
    if (timeout === false) {
      timeout = true;
      setTimeout(function () {
        resizeEnd.apply($this);
      }, delta);
    }
  });
  resizeBlockPhoto();


  //////////////////////////////////////////////////////////////////////////////////////////
  //Isotope portfolio
  //////////////////////////////////////////////////////////////////////////////////////////
  var izendaPortfolio = {
    loadedFilters: [],
    'products-filter':
      [{
        a: 'img/gallery/linechart1-large.gif',
        img: 'img/gallery/linechart1-large.gif'
      }, {
        a: 'img/gallery/combo1-large.gif',
        img: 'img/gallery/combo1-large.gif'
      }],
    'visualizations-filter':
      [{
        a: 'img/gallery/Pareto_large.gif',
        img: 'img/gallery/grid1-large.gif'
      }, {
        a: 'img/gallery/portfolio-4.png',
        img: 'img/gallery/journals1-large.gif'
      }, {
        a: 'img/gallery/Stacked_large.gif',
        img: 'img/gallery/mindmap1-large.gif'
      }, {
        a: 'img/gallery/formshare-full.png',
        img: 'img/gallery/spider1-large.gif'
      }, {
        a: 'img/gallery/HorizontalBar_large.gif',
        img: 'img/gallery/timeline1-large.gif'
      }, {
        a: 'img/gallery/portfolio-8.png',
        img: 'img/gallery/timebubble1-large.gif'
      }],
    'integration-filter':
      [{
        a: 'img/gallery/portfolio-10.png',
        img: 'img/gallery/integ1.jpg'
      }, {
        a: 'img/gallery/BarSeparator_large.gif',
        img: 'img/gallery/integ2.jpg'
      }, {
        a: 'img/gallery/stilized-full.png',
        img: 'img/gallery/integ3.jpg'
      }, {
        a: 'img/gallery/budget_dash-full.png',
        img: 'img/gallery/integ4.jpg'
      }, {
        a: 'img/gallery/animated-dashboard-full.gif',
        img: 'img/gallery/integ5.jpg'
      }, {
        a: 'img/gallery/Line_large.gif',
        img: 'img/gallery/integ6.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ7.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ8.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ9.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ10.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ11.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ12.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ13.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ15.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ14.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ16.jpg'
      }, {
        a: 'img/gallery/custom_chart_style-full.png',
        img: 'img/gallery/integ17.jpg'
      }]
  };
  var $portfolio = $('#portfolio-list');
  var $portfolioFilter = $('#portfolio-filter');
  // load images to portfolio if needed
  var loadImagesForFilter = function (filter) {
    var result = [];
    if (filter in izendaPortfolio && izendaPortfolio.loadedFilters.indexOf(filter) < 0) {
      var images = izendaPortfolio[filter];
      izendaPortfolio.loadedFilters.push(filter);
      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        var $image = $(
          '<div class="block ' + filter + '" data-type="' + filter + '">' +
          '<a class="new portfolio-thumb" href="' + image.a + '" title="portfolio">' +
          '<img class="portfolio-image" src="' + image.img + '" alt="Line Chart" />' +
          '</a>' +
          '</div>');
        result.push($image);
        $image.children('.portfolio-thumb').click(function (e) {
          e.preventDefault();
          var $modal = $('#portfolioModal');
          $modal.find('.modal-image').attr('src', image.a);
          $modal.modal();
        });
        $portfolio.append($image);
      }
      $portfolio.isotope('reloadItems', result);
    }
    return result;
  };
  if ($portfolioFilter.find('li.active > a').length > 0) {
    var currentFilter = $portfolioFilter.find('li.active > a').attr('data-filter').substr(1);
    $portfolio.isotope({
      itemSelector: '.block',
      layoutMode: 'fitRows',
      gutter: 10
    });
    loadImagesForFilter(currentFilter);
    $portfolio.isotope({ filter: '.' + currentFilter });
  }
  //filter items when filter link is clicked
  $('#portfolio-filter a').click(function () {
    var selector = $(this).attr('data-filter');
    $(this).parents('ul').find('li').removeClass('active');
    $(this).parent().addClass('active');
    currentFilter = selector.substr(1);
    loadImagesForFilter(currentFilter);
    $portfolio.isotope({ filter: selector });
  });

  //Modal Video Change OnClick
  $('a.videoModal').on('click', function (e) {
    var src = $(this).attr('data-src');
    var height = $(this).attr('data-height') || 300;
    var width = $(this).attr('data-width') || 400;

    $("#myModal iframe").attr({
      'src': src,
      'height': height,
      'width': width
    });
  });

  $('#myModal').on('hide.bs.modal', function (e) {
    $("#myModal iframe").attr({
      'src': null
    });
  });
  ///////////////////////////////////////////////////////////////////////////////////////////
  //Pricing submit on heroku
  ///////////////////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////////////////
  // Form submit on heroku
  //////////////////////////////////////////////////////////////////////////////////////////
  $('#form').validate({
    submitHandler: function (form) {
      $('#submit').addClass("hidden");
      $('#loading-text').removeClass("hidden");
      var data = {
        'first-name': $('#first-name').val(),
        'last-name': $('#last-name').val(),
        'email': $('#email').val(),
        'phone-number': $('#phone-number').val(),
        'company-url': $('#company-url').val(),
        'web-source': 'FreeTrial & LiveDemo'
      };
      var sfData = _.extend({ 'page-url': pageUrl }, data);
      $.post('http://izenda-services.herokuapp.com/create-salesforce-lead', sfData, function (sfLeadResponse) {
        console.log(sfLeadResponse);
        if (sfLeadResponse["success"] == true) {
          console.log("About to post to free-trial");
          $.post('http://izenda-services.herokuapp.com/free-trial', data, function (freeTrialResponse) {
            console.log(freeTrialResponse);
            if (freeTrialResponse["success"] == true) {
              window.location = "http://www.izenda.com/bi/ReportListIntro.aspx";
            }
          }, 'json');
        }
        console.log("something terrible happened");
      }, 'json');
    }
  });
});
