//////////////////////////////////////////////////////////////////////////////////////////
// jPreloader settings
//////////////////////////////////////////////////////////////////////////////////////////
//$(document).ready(function () {
//  $('body').jpreLoader({
//    loaderVPos: "0%",
//    splashFunction: function () {
//      $("body").addClass("visible-body");
//      $("body").removeClass("hidden-body");
//    }
//  });
//});

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