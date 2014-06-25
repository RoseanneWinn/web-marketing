// set embed size
jQuery(document).ready(function ($) {
  var $container = $('.iz-feature-embed-container');
  if ($container.find('embed, iframe').length > 0)
    $container.height($container.width() * 9 / 16);
});

jQuery(window).resize(function($) {
  var $container = jQuery('.iz-feature-embed-container');
  if ($container.find('embed, iframe').length > 0)
    $container.height($container.width() * 9 / 16);
});

//////////////////////////////////////////////////////////////////////////////////////////
// Header template
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {
  var temlateRenderer = new SiteTemplateRenderer();

  // render header template
  temlateRenderer.renderExternalTemplate({
    name: 'header',
    selector: '#izendaHeaderTemplate',
    data: {},
    loaded: function (renderResult) {
      $('body').prepend(renderResult);
      initializeIzendaHeader($);
    }
  });

  // render footer template
  temlateRenderer.renderExternalTemplate({
    name: 'footer',
    selector: '#izendaFooterTemplate',
    loaded: function (renderResult) {
      $('body').append(renderResult);
    }
  });
});