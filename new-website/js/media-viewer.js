/**
 * Media viewer. Options:
 *
 * linkSelector: jQuery selector for getting links to set click handler.
 * headerSelector: function which get modalLink as parameter and returns title for modal
 */
function initializeMediaViewer(options) {
  var modalLinkSelector = options.linkSelector;
  var headerSelector = options.headerSelector;

  /**
   * Modal initialization
   */
  function initializeMediaViewerInner($mediaViewer) {
    var $modalBody = $mediaViewer.find('.modal-body');
    var $modalHead = $mediaViewer.find('.modal-title');
    var newModalHeight = 0;
    var _this = null;
    var backOverflow = $('body').css('overflow');
    var backPosition = $('body').css('position');

    // modal shown event handler
    $mediaViewer.on('shown.bs.modal', function () {
        // append image
      $('body').css('overflow', 'hidden');
      $('body').css('position', 'fixed');
      var targetImg = _this.attr('target-img');
      if (targetImg != null) {
        var $img = '<div style="background: url(\'' + targetImg + '\') no-repeat center 0;background-size:contain;width:100%;height:' + (newModalHeight - 30) + 'px"></div>';
        $modalBody.append($img);
        return;
      }

      // append video
      var w = $modalBody.width() - 30;
      //var h = newModalHeight > 600 ? 600 : newModalHeight - 30;
      var h = w * 10 / 16;
      if (h > newModalHeight - 30) {
        h = newModalHeight - 30;
      }
      var targetVideo = _this.attr('target-video');
      if (targetVideo != null) {
        $modalBody.append($('<iframe title="YouTube video player" style="width:100%;height:' + h + 'px;"' +
          'src="' + targetVideo + '" frameborder="0" wmode="Opaque" allowFullScreen></iframe>'));
        return;
      }

      // append screencast video
      var targetVideoSc = _this.attr('target-video-screencast');
      if (targetVideoSc != null) {
        var html = '<iframe class="embeddedObject" type="text/html" frameborder="0" scrolling="no" ' +
          'style="overflow: hidden; width: 100%; height: ' + h + 'px;" ' +
          'src="http://www.screencast.com/users/izenda/folders/Jing/media/2be0dad8-5dc1-4651-adda-32b70909075e/embed" ' +
          'height="' + h + '" width="100%"></iframe>';
        $modalBody.append($(html));
      }
    });

    // modal hidden event handler
    $mediaViewer.on('hidden.bs.modal', function (e) {
      $modalBody.empty();
      $('body').css('overflow', backOverflow);
      $('body').css('position', backPosition);
    });

    // modal open event handler
    $(modalLinkSelector).click(function (e) {
      e.preventDefault();
      _this = $(this);
      $modalBody.empty();
      
      $modalHead.text(headerSelector(_this));
      var windowHeight = $(window).height();
      newModalHeight = windowHeight - 120;
      $modalBody.css('max-height', newModalHeight + 'px');
      $mediaViewer.modal();
    });
  }

  // render and initialize header
  var temlateRenderer = new SiteTemplateRenderer();
  temlateRenderer.renderExternalTemplate({
    url: 'templates/media-viewer.tmpl.html',
    selector: '#izendaMediaViewerTemplate',
    data: {},
    loaded: function ($renderResult) {
      var $mediaViewer = $('#' + $renderResult.attr('id'));
      if ($mediaViewer.length == 0) {
        $('body').append($renderResult);
        $mediaViewer = $renderResult;
      }
      initializeMediaViewerInner($mediaViewer);
    }
  });
}