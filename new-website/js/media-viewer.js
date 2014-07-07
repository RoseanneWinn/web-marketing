function IzendaMediaViewer(options) {
  this.test = function() {
    console.log('this still here');
  };
  this.$modal = null;
  this.$modalBody = null;
  this.$modalTitle = null;
  this.options = {
    links: [],
    titleFunc: function ($a) {
      return '';
    },
    initialized: function() {
      
    }
  };
  this.options = $.extend(this.options, options);

  /**
   * initializeModal
   */
  this.initializeModal = function(modalInitializedHandler) {
    var temlateRenderer = new SiteTemplateRenderer();
    temlateRenderer.renderExternalTemplate({
      url: 'templates/media-viewer.tmpl.html',
      selector: '#izendaMediaViewerTemplate',
      data: {},
      context: this,
      loaded: function ($renderResult, mediaViewer) {
        if (mediaViewer.$modal == null || mediaViewer.$modal.length == 0) {
          $('body').append($renderResult);
          mediaViewer.$modal = $renderResult;
        }
        modalInitializedHandler.apply(mediaViewer, []);
        mediaViewer.options.initialized.apply(mediaViewer, []);
      }
    });
  };

  /**
   * Modal html loaded and initialized
   */
  this.modalInitialized = function () {
    this.$modalBody = this.$modal.find('.modal-body');
    this.$modalTitle = this.$modal.find('.modal-title');
    this.newModalHeight = 0;
    var backOverflow = $('body').css('overflow');
    var backPosition = $('body').css('position');
    var backTop = 0;

    // modal shown event handler
    this.$modal.on('shown.bs.modal', function (e) {
      var contentType = _this.$modal.find('#content-type').val();
      var contentUrl = _this.$modal.find('#content-url').val();
      backTop = $(window).scrollTop();
      $('body').css('overflow', 'hidden');
      $('body').css('position', 'fixed');
      $('body').css('top', -backTop);

      if (contentType == 'img') {
        var $img = '<div style="background: url(\'' + contentUrl + '\') no-repeat center 0;background-size:contain;width:100%;height:' + (_this.newModalHeight - 30) + 'px"></div>';
        _this.$modalBody.append($img);
        return;
      }

      var w = _this.$modalBody.width() - 30;
      var h = w * 10 / 16;
      if (h > _this.newModalHeight - 30) {
        h = _this.newModalHeight - 30;
      }
      if (contentType == 'video') {
        _this.$modalBody.append($('<iframe title="YouTube video player" style="width:100%;height:' + h + 'px;"' +
          'src="' + contentUrl + '" frameborder="0" wmode="Opaque" allowFullScreen></iframe>'));
        return;
      }
      if (contentType == 'video-screencast') {
        var html = '<iframe class="embeddedObject" type="text/html" frameborder="0" scrolling="no" ' +
          'style="overflow: hidden; width: 100%; height: ' + h + 'px;" ' +
          'src="' + contentUrl + '" ' +
          'height="' + h + '" width="100%"></iframe>';
        _this.$modalBody.append($(html));
      }
    });
    
    // modal hidden event handler
    this.$modal.on('hidden.bs.modal', function (e) {
      _this.$modalBody.empty();
      $('body').css('overflow', backOverflow);
      $('body').css('position', backPosition);
      $(window).scrollTo(backTop);
    });

    initializeMediaLinks(this.options.links);
  };

  // run initialization process
  this.initializeModal(this.modalInitialized);

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // PUBLICS
  ////////////////////////////////////////////////////////////////////////////////////////////////
  var _this = this;
  /**
   * Initialize media viewer links
   */
  var initializeMediaLinks = function (links) {
    if (typeof links == 'undefined' || links == null || typeof links.length == 'undefined') return;
    $.each(links, function(iLink, link) {
      $(link).click(function (e) {
        var $this = $(this);
        e.preventDefault();
        _this.$modalBody.empty();

        // extract content url and type from link:
        var content = $this.data('content');
        var contentType = content.substr(0, content.indexOf(':'));
        var contentUrl = content.substr(content.indexOf(':') + 1);
        _this.$modal.find('#content-type').val(contentType);
        _this.$modal.find('#content-url').val(contentUrl);
        // set title
        _this.$modalTitle.text(_this.options.titleFunc.apply(_this, [$this]));
        // set modal height
        var windowHeight = $(window).height();
        _this.newModalHeight = windowHeight - 120;
        _this.$modalBody.css('max-height', _this.newModalHeight + 'px');
        // run modal
        _this.$modal.modal();
      });
    });
  };

  return {
    initializeMediaLinks: initializeMediaLinks
  };
}