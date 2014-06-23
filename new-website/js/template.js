$(document).ready(function () {
  // render and initialize header
  var temlateRenderer = new SiteTemplateRenderer();
  temlateRenderer.renderExternalTemplate({
    url: 'templates/header.tmpl.html',
    selector: '#izendaHeaderTemplate',
    data: {},
    loaded: function (renderResult) {
      $('body').prepend(renderResult);
      initializeIzendaHeader();
    }
  });

  // render and initialize footer
  temlateRenderer.renderExternalTemplate({
    url: 'templates/sticky-footer.tmpl.html',
    selector: '#izendaFooterTemplate',
    data: {},
    loaded: function (renderResult) {
      $('body').append(renderResult);
      initializeIzendaFooter();
    }
  });

});
