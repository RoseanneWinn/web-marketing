if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (elt /*, from*/) {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0) from += len;
    for (; from < len; from++) {
      if (from in this && this[from] === elt) return from;
    }
    return -1;
  };
}

//Analytics insert///////////////////////////////////////////////////////

$('#analytics').load('../js/ga.js');

//Ready the page before firing any js////////////////////////////////////
$(document).ready(function () {

  initializeIzendaHeader();
  initializeIzendaFooter();

  //SnapEngage//////////////////////////////////////////////////////////
  (function () {
      var se = document.createElement('script'); se.type = 'text/javascript'; se.async = true;
      se.src = '//commondatastorage.googleapis.com/code.snapengage.com/js/24c3b9f3-b9bb-4c8b-8a15-30c20ee6c4e8.js';
      var done = false;
      se.onload = se.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
          done = true;
          /* Place your SnapEngage JS API code below */
          SnapEngage.allowChatSound(true);
          SnapEngage.allowProactiveChat(true);
        }
      };
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(se, s);
    })();


  //HubSpot////////////////////////////////////////////////////////////////

  (function(d,s,i,r) {
     if (d.getElementById(i)){return;}
     var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
     n.id=i;n.src='//js.hs-analytics.net/analytics/'+(Math.ceil(new Date()/r)*r)+'/409433.js';
     e.parentNode.insertBefore(n, e);
   })(document,"script","hs-analytics",300000);

//Video resizing for modals/////////////////////////////////////////////

  var $allVideos = $("iframe[src^='http://www.youtube.com']"),

  $fluidWidth = $('.modal-body');

  $allVideos.each(function () {
    $(this).attr('data-aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
  });

  $(window).resize(function () {
    var newWidth = $fluidWidth.width();
    $allVideos.each(function () {
      var e = $(this);
      e.width(newWidth).height(newWidth * e.attr('data-aspectRatio'));
    });
  }).resize();

  //////////////////////////////////////////////////////////////////////////////////////////
  // Main picture overlay
  //////////////////////////////////////////////////////////////////////////////////////////
  /*  var populateMainPictureOverlay = function () {
      var $mainPic = $('.main-pic-container > img');
      var $mainPicOverlay = $('.main-pic-overlay');
      if ($mainPic.length == 0 || $mainPicOverlay.length == 0)
        return;
      $mainPicOverlay.width($mainPic.width() + 40);
      $mainPicOverlay.height($mainPic.height() + 20);
      $mainPicOverlay.css('left', $mainPic.offset().left - 20);
      $mainPicOverlay.removeClass('hidden');
    };
    populateMainPictureOverlay();
    $(window).resize(function () {
      populateMainPictureOverlay();
    });
  
    $('.main-pic-overlay').on('click.mainpicoverlay', function () {
      var $embed = $('<embed src="https://www.youtube.com/v/1LlHesMCmYs?autoplay=1" type="application/x-shockwave-flash" />');
      var $o = $(this);
      $o.empty();
      $o.css('background-color', 'transparent');
      $embed.width($o.width());
      $embed.height($o.height());
      $o.append($embed);
      $o.off('click.mainpicoverlay');
    });
  */
  //////////////////////////////////////////////////////////////////////////////////////////
  // Set embed video size
  //////////////////////////////////////////////////////////////////////////////////////////
  var updateVideoSize = function ($cont) {
    var $videoItem = $cont.find('embed, object, iframe');
    if ($videoItem.length > 0) {
      var ratio = $cont.attr('ratio');
      if (ratio) {
        var ratioItems = ratio.split(':');
        $videoItem.height(0.8 * $cont.width() * parseFloat(ratioItems[1]) / parseFloat(ratioItems[0]));
      } else {
        $videoItem.height(0.8 * $cont.width() * 9 / 16);
      }
      $videoItem.width($cont.width() * 0.8);
    }
  };

  var $container = $('.iz-feature-embed-container');
  updateVideoSize($container);
  $(window).resize(function () {
    updateVideoSize($container);
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
    [
      {
        desc: 'Interactive-Search',
        a: 'img/gallery/additionalImage1.png',
        img: 'img/gallery/additionalImage1.png'
      }, {
        desc: 'Enhanced Charting',
        a: 'img/gallery/additionalImage2.png',
        img: 'img/gallery/additionalImage2.png'
      }, {
        desc: 'Maps',
        a: 'img/gallery/additionalImage3.png',
        img: 'img/gallery/additionalImage3.png'
      }, {
        desc: 'Visualizations',
        a: 'img/gallery/additionalImage4.png',
        img: 'img/gallery/additionalImage4.png'
      }, {
        desc: 'Language Support',
        a: 'img/gallery/additionalImage5.png',
        img: 'img/gallery/additionalImage5.png'
      }, {
        desc: 'Traditional Forms',
        a: 'img/gallery/additionalImage6.jpg',
        img: 'img/gallery/additionalImage6.jpg'
      }, {
        desc: 'Customization',
        a: 'img/gallery/additionalImage7.png',
        img: 'img/gallery/additionalImage7.png'
      }, {
        desc: 'Fusion',
        a: 'img/gallery/additionalImage8.jpg',
        img: 'img/gallery/additionalImage8.jpg'
      }
    ],
    'visualizations-filter':
    [
      {
        desc: 'Bar Separators',
        a: 'img/gallery/BarSeparator_preview.png',
        img: 'img/gallery/BarSeparator_large.gif'
      }, {
        desc: 'Horizontal Bars',
        a: 'img/gallery/HorizontalBar_large.gif',
        img: 'img/gallery/HorizontalBar_large.gif'
      }, {
        desc: 'Maps',
        a: 'img/gallery/Map_large.gif',
        img: 'img/gallery/Map_large.gif'
      }, {
        desc: 'Pareto',
        a: 'img/gallery/Pareto_large.gif',
        img: 'img/gallery/Pareto_large.gif'
      }, {
        desc: 'Pie',
        a: 'img/gallery/Pie_large.gif',
        img: 'img/gallery/Pie_large.gif'
      }, {
        desc: 'Stacked',
        a: 'img/gallery/Stacked_large.gif',
        img: 'img/gallery/Stacked_large.gif'
      }, {
        desc: 'Line Chart',
        a: 'img/gallery/linechart1-large.gif',
        img: 'img/gallery/linechart1-large.gif'
      }, {
        desc: 'Heat-Map',
        a: 'img/gallery/grid1-large.gif',
        img: 'img/gallery/grid1-large.gif'
      }, {
        desc: 'Mind-Map',
        a: 'img/gallery/mindmap1-large.gif',
        img: 'img/gallery/mindmap1-large.gif'
      }, {
        desc: 'Dashboards',
        a: 'img/gallery/animated-dashboard-full.gif',
        img: 'img/gallery/animated-dashboard-full.gif'
      }, {
        desc: 'Timeline',
        a: 'img/gallery/timeline1-large.gif',
        img: 'img/gallery/timeline1-large.gif'
      }, {
        desc: 'Interactive Time Bubble',
        a: 'img/gallery/timebubble1-large.gif',
        img: 'img/gallery/timebubble1-large.gif'
      }
    ],
    'integration-filter':
    [
      {
        desc: 'Integration',
        a: 'img/gallery/integ-full1.jpg',
        img: 'img/gallery/integ1.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full2.jpg',
        img: 'img/gallery/integ2.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full3.jpg',
        img: 'img/gallery/integ3.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full4.jpg',
        img: 'img/gallery/integ4.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full5.jpg',
        img: 'img/gallery/integ5.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full6.jpg',
        img: 'img/gallery/integ6.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full7.jpg',
        img: 'img/gallery/integ7.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full8.jpg',
        img: 'img/gallery/integ8.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full9.jpg',
        img: 'img/gallery/integ1.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full9.jpg',
        img: 'img/gallery/integ1.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full10.jpg',
        img: 'img/gallery/integ10.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full11.jpg',
        img: 'img/gallery/integ11.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full12.jpg',
        img: 'img/gallery/integ12.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full13.jpg',
        img: 'img/gallery/integ13.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full14.jpg',
        img: 'img/gallery/integ14.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full15.jpg',
        img: 'img/gallery/integ15.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full16.jpg',
        img: 'img/gallery/integ16.jpg'
      }, {
        desc: 'Integration',
        a: 'img/gallery/integ-full17.jpg',
        img: 'img/gallery/integ17.jpg'
      }
    ],
    'maps-filter': [{
      desc: 'Customize',
      a: 'img/maps/map1.jpg',
      img: 'img/maps/map1.jpg'
    }, {
      desc: 'Visual',
      a: 'img/maps/map3.jpg',
      img: 'img/maps/map3.jpg'
    }, {
      desc: 'Maps',
      a: 'img/gallery/additionalImage3.png',
      img: 'img/gallery/additionalImage3.png'
    }, {
      desc: 'With Dashboards',
      a: 'img/gallery/portfolio-9.png',
      img: 'img/gallery/portfolio-9.png'
    }, {
      desc: 'Vector',
      a: 'img/gallery/maps-1.png',
      img: 'img/gallery/maps-full1.png'
    }, {
      desc: '3D',
      a: 'img/gallery/maps-2.png',
      img: 'img/gallery/maps-full2.png'
    }, {
      desc: 'Colors',
      a: 'img/gallery/maps-3.png',
      img: 'img/gallery/maps-full3.png'
    }, {
      desc: 'Pseudocylindrical',
      a: 'img/gallery/maps-4.png',
      img: 'img/gallery/maps-full4.png'
    }],
    'additional-filter': []
  };
  var $portfolio = $('#portfolio-list');
  var $portfolioFilter = $('#portfolio-filter');

  var appendMissingItems = function (filter) {
    $('.block').removeClass('hidden');
    var $items = $('.block.' + filter);
    /*if ($items.length > 8) {
      for (var i = 8; i < $items.length; i++) {
        $($items[i]).addClass('hidden');
      }
    }*/
    var result = [];
    var $additionalFilters = $('.block.additional-filter');
    $additionalFilters.addClass('hidden');
    if ($items.length < 8) {
      for (var i = $items.length; i <= 3; i++) {
        var $additionalFilter = $($additionalFilters[i]);
        $additionalFilter.removeClass('hidden');
        result.push($additionalFilter);
      }
    }
  };

  var loadAdditionalFilters = function () {
    if (izendaPortfolio.loadedFilters.length == 0 || izendaPortfolio.loadedFilters.indexOf('additional-filter') < 0) {
      var images = izendaPortfolio['additional-filter'];
      izendaPortfolio.loadedFilters.push('additional-filter');
      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        var $image = $(
          '<div class="block additional-filter hidden" data-type="additional-filter">' +
          '<a class="new portfolio-thumb" href="' + image.a + '" data-content="img:' +
          image.a + '>' +
          '<div class="portfolio-image-wrapper">' +
          '<img class="portfolio-image" src="' + image.img + '" alt="Line Chart" />' +
          '</div>' +
          '</a>' +
          '</div>');
        if (mediaViewer != null)
          mediaViewer.initializeMediaLinks([$image.find('a')]);
        $image.tooltip({
          title: image.desc
        });
        $portfolio.append($image);
      }
    }
  };

  var mediaViewer = null;
  if (typeof (IzendaMediaViewer) != 'undefined') {
    mediaViewer = new IzendaMediaViewer({
      titleFunc: function ($link) {
        return $link.attr('title');
      }
    });
  }

  // load images to portfolio if needed
  var loadImagesForFilter = function (filter) {
    var result = [];
    loadAdditionalFilters();
    if (filter in izendaPortfolio && (izendaPortfolio.loadedFilters.length == 0 || izendaPortfolio.loadedFilters.indexOf(filter) < 0)) {
      var images = izendaPortfolio[filter];
      izendaPortfolio.loadedFilters.push(filter);
      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        var $image = $(
          '<div class="block ' + filter + '" data-type="' + filter + '">' +
          '<a class="new portfolio-thumb" href="' + image.a + '" data-content="img:' + image.a + '">' +
          '<div class="portfolio-image-wrapper">' +
          '<img class="portfolio-image" src="' + image.img + '" alt="Line Chart" />' +
          '</div>' +
          '</a>' +
          '</div>');
        result.push($image);
        if (mediaViewer != null)
          mediaViewer.initializeMediaLinks([$image.find('a')]);
        $image.tooltip({
          title: image.desc
        });
        $portfolio.prepend($image);
      }
      // append additional filters
      var additionals = appendMissingItems(filter);
      if (additionals != null) {
        $.each(additionals, function (iAdditional, additional) {
          result.push(additional);
        });
      }
      $portfolio.isotope('reloadItems', result);
    } else {
      appendMissingItems(filter);
    }
    return result;
  };
  if ($portfolioFilter.find('li.active > a').length > 0) {
    var currentFilter = $portfolioFilter.find('li.active > a').attr('data-filter').substr(1);
    $portfolio.isotope({
      itemSelector: '.block',
      layoutMode: 'fitRows',
      gutter: 0
    });
    loadImagesForFilter(currentFilter);
    $portfolio.isotope({ filter: '.' + currentFilter + ', .additional-filter' });
  }
  //filter items when filter link is clicked
  $('#portfolio-filter a').click(function () {
    var selector = $(this).attr('data-filter');
    $(this).parents('ul').find('li').removeClass('active');
    $(this).parent().addClass('active');
    currentFilter = selector.substr(1);
    loadImagesForFilter(currentFilter);

    $portfolio.isotope({ filter: selector + ', .additional-filter' });
  });

  if (mediaViewer != null)
    mediaViewer.initializeMediaLinks($('a.videoModal'));

  /*//Modal Video Change OnClick
  $('a.videoModal').on('click', function (e) {
    var src = $(this).attr('data-src');
    var height = $(this).attr('data-height') || 300;
    var width = $(this).attr('data-width') || 400;

    $("#mainModal iframe").attr({
      'src': src,
      'height': height,
      'width': width
    });
    $("#mainModal").modal();
  });

  $('#mainModal').on('hide.bs.modal', function (e) {
    $("#mainModal iframe").attr({
      'src': null
    });
  });*/

  /*if ($('#footer-form').valid() == true) {
    $('#footer-form').submit(function(e) {
      e.preventDefault();
        var data = {
        'first-name': $('#footer-first-name').val(),
        'last-name': $('#footer-last-name').val(),
        'email': $('#footer-email').val(),
        'phone-number': $('#footer-phone').val(),
        'company-url': $('#footer-company-url').val(),
        'web-source': 'FreeTrial & LiveDemo'
        };
        var sfData = _.extend({'page-url': pageUrl}, data);
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
  });
  };*/

  //////////////////////////////////////////////////////////////////////////////////////////
  // Landing form
  ////////////////////////////////////////////////////////////////////////////////////////////
  $('#landing-submit').click(function () {
    if ($('#landing-form').valid() === true) {
      $('#landing-submit').addClass("hidden");
      $('#landing-loading-text').removeClass("hidden");
    }
  });
});
