$(function (){

	
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
		$(".overlay").fadeToggle(200);
	});

	$('a.close-button').on('click', function(){
		$(".overlay").fadeToggle(200);   
	});

	// KEEP GALLERY MENU OPEN ON MUSIC PAGE

	if($('body').hasClass('body-music')) {
		$('ul.gallery-links').css('display', 'block');
	}

}); // END DOCUMENT READY


