if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

function SiteTemplateRenderer() {
};

SiteTemplateRenderer.prototype.renderExternalTemplate = function (templateParameters) {
  var file = templateParameters.name + '.tmpl.html';
  if (typeof templateParameters.subtree != 'undefined') {
    file = templateParameters.subtree + '/' + file;
  }
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