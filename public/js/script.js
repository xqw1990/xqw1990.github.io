

$(document).ready(function(){


	function loadShits(){
		$('.bxslider').bxSlider();

		// masonry
		setTimeout(function() {
			var container = document.querySelector('#container');
			var msnry = new Masonry( container, {
  				// options
  				columnWidth: 5,
  				itemSelector: '.item'
  			});
		},1000);
	}


	loadShits()


	// ajax load pages contents
	$('.container a').click(function(e){
		e.preventDefault();
		var thisUrl = $(this).attr('href');
		$("#loadContentHere").html('').load('/' +thisUrl+' #loadContentFrom', function(){
			loadShits();
		});

	});

		//fade page animation

		$(".animsition").animsition({
			inClass: 'fade-in',
			outClass: 'fade-out',
			inDuration: 1500,
			outDuration: 800,
			linkElement: '.animsition-link',// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
			loading: true,
    		loadingParentElement: 'body', //animsition wrapper element
    		loadingClass: 'animsition-loading',
    		loadingInner: '', // e.g '<img src="loading.svg" />'
    		timeout: false,
    		timeoutCountdown: 5000,
    		onLoadEvent: true,
    		browser: [ 'animation-duration', '-webkit-animation-duration'],
    		// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    		// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    		overlay : false,
    		overlayClass : 'animsition-overlay-slide',
    		overlayParentElement : 'body',
    		transition: function(url){ window.location.href = url; }
    	});


	//lang
	$('.lang .langSelect').click(function(){
		var thisValue = $(this).attr('lang-attr');
		if($(this).hasClass("active")){

		} else{
			$('.lang .langSelect').removeClass("active");
			$(this).toggleClass("active");
			$("html").attr('lang',thisValue);
		}
	});






	//back to top
	$(function() {
		$(window).scroll(function(){
			var scrolltop=$(this).scrollTop();
			if(scrolltop>=200){
				$("#elevator_item").show();
			}else{
				$("#elevator_item").hide();
			}
		});
		$("#elevator").click(function(){
			$("html,body").animate({scrollTop: 0}, 500);
		});
	});



	$('.homepage_downarrow_position').click(function(){
		windowHeight = $( window ).height();
		$("html,body").animate({scrollTop: windowHeight}, 500);
	});








	// menu-btn
	$(".menu-toggle").click(function(){
		if($(".lines").hasClass("menu-x")){
			$(".overlay").removeClass("close-menu");
			$(".lines").removeClass("menu-x");
			$('#header').css("background-color", "transparent");
			$("#navList2").slideUp( 300 );
		} else {
			$(".overlay").addClass("close-menu");
			$(".lines").addClass("menu-x");
			$('#header').css("background-color", "rgba(0,0,0,.8)");
			$("#navList2").slideDown( 300 );

			$(".close-menu").click(function(){

				$(".overlay").removeClass("close-menu");
				$(".lines").removeClass("menu-x");
				$('#header').css("background-color", "transparent");
				$("#navList2").slideUp( 300 );

			});
		}

	});
	// menu-btn-end




	$( window ).scroll(function() {
		if($(".lines").hasClass("menu-x")){
			$("#navList2").slideUp( 300 );
			$(".lines").removeClass("menu-x");
			$(".overlay").removeClass("close-menu");
		} 
	});


	$(".close-menu").click(function(){

		$(".overlay").removeClass("close-menu");
		$(".lines").removeClass("menu-x");
		$('#header').css("background-color", "transparent");
		$("#navList2").slideUp( 300 );

	});




	// grab an element
	var myElement = document.querySelector("header");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init(); 



});


//this is for header image size same as window size
//now this is replaced by height:100vh;

var divHeight = 0;

$( window ).resize(function() {
	heightUpdate();
}); /* event listener */

$(document).ready(function(){
	heightUpdate();
}); /* event listener */

function heightUpdate(){
	divHeight = $( window ).height();
	// $("#fullscreen-cover").css("height", divHeight);
}
/* responsive dom function begins */


//scroll for top bar to appear
$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > divHeight) {
		$('#header').css("background-color", "rgba(0,0,0,.8)");
	} else {
		$('#header').css("background-color", "transparent");
	}
});





