function SiteTemplateRenderer() {
};

SiteTemplateRenderer.prototype.renderExternalTemplate = function (templateParameters) {
  var file = 'templates/' + templateParameters.name + '.tmpl.html';
  if (templateParameters.url) {
    file = templateParameters.url;
  }

  $.when($.get(file)).done(function (templateCollection) {
    var template = $(templateCollection).filter(templateParameters.selector);
    var htmlString = template.render(templateParameters.data);
    if (htmlString != undefined) {
      htmlString = htmlString.trim();
    }
    var html = $(htmlString);
    if (typeof templateParameters.loaded == 'function') {
      templateParameters.loaded.apply(this, [html, templateParameters.context]);
    }
  });
};

