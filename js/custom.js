//////////////////////////////////////////////////////////////////////////////////////////
//Nav
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
    jQuery('.navbar .nav > li > a.scroll-link').click(function(){
        jQuery.scrollTo( $(this).attr("href"), {
			duration: 1000,
			easing:'easeInOutExpo'			
		});
		return false;
    });
});
//////////////////////////////////////////////////////////////////////////////////////////
//Scrolling
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
	jQuery('.waypoint-1').waypoint(function() {
	  jQuery(".hidden-element-1").addClass("visible-element");
	}, { offset: '75%' });

	jQuery('.waypoint-2').waypoint(function() {
	  jQuery(".hidden-element-2").addClass("visible-element");
	}, { offset: '75%' });
	
	jQuery('.waypoint-3').waypoint(function() {
	  jQuery(".hidden-element-3").addClass("visible-element");
	}, { offset: '75%' });
	
	jQuery('.waypoint-4').waypoint(function() {
	  jQuery(".hidden-element-4").addClass("visible-element");
	  jQuery('.percentage').easyPieChart({
	      barColor: '#52bad5',
	      trackColor: '#f3f6f8',
	      scaleColor: false,
	      lineCap: 'butt',
	      rotate: -90,
	      lineWidth: 5,
	      animate: 3000,
	      onStep: function(value) {
	          this.$el.find('span').text(~~value);
	      }
	  });
	}, { offset: '75%' });
});
//////////////////////////////////////////////////////////////////////////////////////////
//iLightbox settings for team full profile
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
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
jQuery(document).ready(function ($){
	$('.portfolio-thumb').iLightBox({
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
});
//////////////////////////////////////////////////////////////////////////////////////////
//Isotope portfolio
//////////////////////////////////////////////////////////////////////////////////////////
var $container = $('#portfolio-list');
$container.imagesLoaded( function(){
	$container.isotope({
		itemSelector : '.block',
		layoutMode : 'fitRows'
	});
});

//filter items when filter link is clicked
jQuery('#portfolio-filter a').click(function(){
	var selector = $(this).attr('data-filter');
	$container.isotope({ filter: selector });
	jQuery(this).parents('ul').find('li').removeClass('active');
	jQuery(this).parent().addClass('active');
		return false;
});
//////////////////////////////////////////////////////////////////////////////////////////
//Detect iPhone, iPod, iPad and remove or ativate parallax
//////////////////////////////////////////////////////////////////////////////////////////
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(window).bind('load', function () {
	parallaxInit();						  
});

function parallaxInit() {
	detectMobile = isMobile.any();
	if (detectMobile == null) {
		$('.bg1').parallax("50%", 0.5);
		$('.bg2').parallax("50%", 0.5);
		$('.bg3').parallax("50%", 0.5);
		$('.bg4').parallax("50%", 0.5);
		$('.bg5').parallax("50%", 0.5);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////
//Hide menu after clic on mobile 
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
	jQuery('.nav li a.scroll-link').on('click',function(){
	    jQuery('.nav-collapse').collapse('hide');
	})
});

//////////////////////////////////////////////////////////////////////////////////////////
//Homepage slider
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
	$('.flexslider').flexslider({
    	animation: "fade",
		direction: "horizontal", 
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: true,
		controlNav: true,
		useCSS: true
	});
});
//////////////////////////////////////////////////////////////////////////////////////////
//Trick for validate the rel attribute
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
	$('a[data-rel]').each(function() {
	    $(this).attr('rel', $(this).data('rel'));
	});
});  
//////////////////////////////////////////////////////////////////////////////////////////
//jPreloader settings
//////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
	jQuery("body").addClass("visible-body");
	jQuery("body").removeClass("hidden-body");
	return;
	$('body').jpreLoader({
  		loaderVPos: "0%",
  		splashFunction: function() {
  			jQuery("body").addClass("visible-body");
  			jQuery("body").removeClass("hidden-body");
  		}
    });
});     


