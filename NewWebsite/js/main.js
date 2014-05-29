//Ready the page before firing any js
$(document).ready(function () {

  //////////////////////////////////////////////////////////////////////////////////////////
  // Header template render
  //////////////////////////////////////////////////////////////////////////////////////////
  var temlateRenderer = new SiteTemplateRenderer();
  temlateRenderer.renderExternalTemplate({
    name: 'header',
    selector: '#izendaHeaderTemplate',
    data: {},
    loaded: function (renderResult) {
      $('body').prepend(renderResult);
      initializeIzendaHeader();
    }
  });

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

  //////////////////////////////////////////////////////////////////////////////////////////
  // Form submit on heroku
  //////////////////////////////////////////////////////////////////////////////////////////
  $('#form').submit(function (e) {
    e.preventDefault();
    var data = {
      'first-name': $('#first-name').val(),
      'last-name': $('#last-name').val(),
      'email': $('#email').val(),
      'phone-number': $('#phone-number').val(),
      'company-url': $('#company-url').val()
    };
    console.log(data);
    $.post('http://izenda-free-trial.herokuapp.com/free-trial', data, function (data) {
      console.log(data);
    }, 'json');
  });
});
