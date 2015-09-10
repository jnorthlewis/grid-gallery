$(function (){

	// FADE IN LOGO
	var pathFade = function() {
		
		$($('svg.logo path')[0]).velocity({ opacity: 1}, {delay: 100});
		$($('svg.logo path')[1]).velocity({ opacity: 1}, {delay: 150});
		$($('svg.logo path')[2]).velocity({ opacity: 1}, {delay: 200});
		$($('svg.logo path')[3]).velocity({ opacity: 1}, {delay: 300});
		$($('svg.logo path')[4]).velocity({ opacity: 1}, {delay: 350});
		$($('svg.logo path')[5]).velocity({ opacity: 1}, {delay: 400});
		$($('svg.logo path')[6]).velocity({ opacity: 1}, {delay: 600});
		$($('svg.logo path')[7]).velocity({ opacity: 1}, {delay: 650});
		$($('svg.logo path')[8]).velocity({ opacity: 1}, {delay: 700});
		$($('svg.logo path')[9]).velocity({ opacity: 1}, {delay: 750});
		$($('svg.logo path')[10]).velocity({ opacity: 1}, {delay: 800});
		$($('svg.logo path')[11]).velocity({ opacity: 1}, {delay: 850});
		$($('svg.logo path')[12]).velocity({ opacity: 1}, {delay: 900});
		$($('svg.logo path')[13]).velocity({ opacity: 1}, {delay: 950});
		$($('svg.logo path')[14]).velocity({ opacity: 1}, {delay: 1000});
		$($('svg.logo path')[15]).velocity({ opacity: 1}, {delay: 1050});
		$($('svg.logo path')[16]).velocity({ opacity: 1}, {delay: 1100});
		
		$('ul.nav-links').velocity({opacity: 1}, {delay: 1150});
	}

	pathFade();

	// FADE IN GALLERY
	$('.gallery').velocity({ opacity: 1}, {delay: 2000});
	$('.footer').velocity({ opacity: 1}, {delay: 2500});
	
	// FANCYBOX

	$(".fancybox").fancybox({
		padding : 30,
		closeBtn : false,
		nextClick : true,
		preload : 20,
		nextSpeed : 150,
		prevSpeed : 150,
		openEffect : 'fade',
		closeEffect : 'fade',
		openSpeed : 'fast',
		closeSpeed : 'fast',
		nextEffect : 'fade',
		prevEffect : 'fade',
		keys: {
			next : {
				39 : 'left', // right arrow
				40 : 'up'    // down arrow
			},
			prev : {
				37 : 'right',  // left arrow
				38 : 'down'    // up arrow
			},
			close  : [27], // escape key
		}
	});

	// DROP-DOWN NAVIGATION

	$('a.gallery-link').on('click', function(e) {
		e.preventDefault();
		$('ul.gallery-links').slideToggle(350);
		$('ul.contact-link').css('display', 'none');
	});

	// CONTACT

	$("a.contact-button").on('click', function(){
		$(".overlay").fadeToggle(100);
	});

	$('a.close-button').on('click', function(){
		$(".overlay").fadeToggle(100);   
	});

	// KEEP GALLERY MENU OPEN ON MUSIC PAGE

	if($('body').hasClass('body-music')) {
		$('ul.gallery-links').css('display', 'block');
	}

	// SCROLL TO TOP
	var offset = 100,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

}); // END DOCUMENT READY


