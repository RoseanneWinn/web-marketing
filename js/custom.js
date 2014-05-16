//////////////////////////////////////////////////////////////////////////////////////////
//Nav
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {
  jQuery('.navbar .nav > li > a.scroll-link').click(function () {
    jQuery.scrollTo($(this).attr("href"), {
      duration: 1000,
      easing: 'easeInOutExpo'
    });
    return false;
  });
});

//////////////////////////////////////////////////////////////////////////////////////////
//Scrolling
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {
  jQuery('.waypoint-1').waypoint(function () {
    jQuery(".hidden-element-1").addClass("visible-element");
  }, { offset: '75%' });

  jQuery('.waypoint-2').waypoint(function () {
    jQuery(".hidden-element-2").addClass("visible-element");
  }, { offset: '75%' });

  jQuery('.waypoint-3').waypoint(function () {
    jQuery(".hidden-element-3").addClass("visible-element");
  }, { offset: '75%' });

  jQuery('.waypoint-4').waypoint(function () {
    jQuery(".hidden-element-4").addClass("visible-element");
    /*jQuery('.percentage').easyPieChart({
      barColor: '#52bad5',
      trackColor: '#f3f6f8',
      scaleColor: false,
      lineCap: 'butt',
      rotate: -90,
      lineWidth: 5,
      animate: 3000,
      onStep: function (value) {
        this.$el.find('span').text(~~value);
      }
    });*/
  }, { offset: '75%' });
});

//////////////////////////////////////////////////////////////////////////////////////////
//iLightbox settings for team full profile
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {
  $('.ilightbox-member-1').iLightBox({
    skin: 'dark',
    path: 'vertical'
  });
  $('.ilightbox-member-2').iLightBox({
    skin: 'dark',
    path: 'vertical'
  });
  $('.ilightbox-member-3').iLightBox({
    skin: 'dark',
    path: 'vertical'
  });
  $('.ilightbox-member-4').iLightBox({
    skin: 'dark',
    path: 'vertical'
  });
});

//////////////////////////////////////////////////////////////////////////////////////////
//iLightbox settings for the portfolio
//////////////////////////////////////////////////////////////////////////////////////////

var initializeLightbox = function(items) {
  $('.portfolio-thumb.new').iLightBox({
    skin: 'dark',
    path: 'horizontal',
    fullViewPort: 'fill',
    infinite: true,
    overlay: {
      opacity: 1,
      blur: false
    },
    controls: {
      thumbnail: true
    },
    styles: {
      nextOffsetX: -45,
      prevOffsetX: -45
    }
  });
  $('.portfolio-thumb.new').removeClass('new');
};

//////////////////////////////////////////////////////////////////////////////////////////
//Isotope portfolio
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {
  var izendaPortfolio = {
    loadedFilters: [],
    'products-filter':
      [{
        a: 'images/linechart1-large.gif',
        img: 'images/linechart1-large.gif'
      }, {
        a: 'images/combo1-large.gif',
        img: 'images/combo1-large.gif'
      }],
    'visualizations-filter':
      [{
        a: 'images/Pareto_large.gif',
        img: 'images/grid1-large.gif'
      }, {
        a: 'images/portfolio-4.png',
        img: 'images/journals1-large.gif'
      }, {
        a: 'images/Stacked_large.gif',
        img: 'images/mindmap1-large.gif'
      }, {
        a: 'images/formshare-full.png',
        img: 'images/spider1-large.gif'
      }, {
        a: 'images/HorizontalBar_large.gif',
        img: 'images/timeline1-large.gif'
      }, {
        a: 'images/portfolio-8.png',
        img: 'images/timebubble1-large.gif'
      }, {
        a: 'images/custom_report_manager-full.png',
        img: 'images/timeline2-large.gif'
      }],
    'integration-filter':
      [{
        a: 'images/portfolio-10.png',
        img: 'images/integ1.jpg'
      }, {
        a: 'images/BarSeparator_large.gif',
        img: 'images/integ2.jpg'
      }, {
        a: 'images/stilized-full.png',
        img: 'images/integ3.jpg'
      }, {
        a: 'images/budget_dash-full.png',
        img: 'images/integ4.jpg'
      }, {
        a: 'images/animated-dashboard-full.gif',
        img: 'images/integ5.jpg'
      }, {
        a: 'images/Line_large.gif',
        img: 'images/integ6.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ7.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ8.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ9.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ10.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ11.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ12.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ13.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ15.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ14.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ16.jpg'
      }, {
        a: 'images/custom_chart_style-full.png',
        img: 'images/integ17.jpg'
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
        $portfolio.append($image);
      }
      $portfolio.isotope('reloadItems', result);
      initializeLightbox();
    }
    return result;
  };

  var currentFilter = $portfolioFilter.find('li.active > a').attr('data-filter').substr(1);
  $portfolio.isotope({
    itemSelector: '.block',
    layoutMode: 'fitRows',
    gutter: 10
  });
  loadImagesForFilter(currentFilter);
  $portfolio.isotope({ filter: '.' + currentFilter });

  //filter items when filter link is clicked
  $('#portfolio-filter a').click(function () {
    var selector = $(this).attr('data-filter');
    $(this).parents('ul').find('li').removeClass('active');
    $(this).parent().addClass('active');
    currentFilter = selector.substr(1);
    loadImagesForFilter(currentFilter);
    $portfolio.isotope({ filter: selector });
  });
});

//////////////////////////////////////////////////////////////////////////////////////////
//Detect iPhone, iPod, iPad and remove or ativate parallax
//////////////////////////////////////////////////////////////////////////////////////////
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

$(window).bind('load', function () {
  if (!isMobile.any()) {
    $('.bg1').parallax("50%", 0.5);
    $('.bg2').parallax("50%", 0.5);
    $('.bg3').parallax("50%", 0.5);
    $('.bg4').parallax("50%", 0.5);
    $('.bg5').parallax("50%", 0.5);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////
//Hide menu after clic on mobile 
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {
  $('.nav li a.scroll-link').on('click', function () {
    $('.nav-collapse').collapse('hide');
  });
});

//////////////////////////////////////////////////////////////////////////////////////////
//Homepage slider
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {
  $('.flexslider').flexslider({
    animation: "fade",
    direction: "horizontal",
    slideshow: true,
    slideshowSpeed: 3500,
    animationDuration: 1000,
    directionNav: true,
    controlNav: true,
    touch: true,
    useCSS: true
  });
});

//////////////////////////////////////////////////////////////////////////////////////////
//Trick for validate the rel attribute
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {
  $('a[data-rel]').each(function () {
    $(this).attr('rel', $(this).data('rel'));
  });
});


