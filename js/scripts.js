$(function (){

	// var fullImg = $('.photoThumbnails a').data('full');
	//Get all links so we can loop through
	var $galleryImages = $('.photoThumbnails a');

	// console.log($galleryImages);
	//1. when user clicks on thumbnail show modal box
	$galleryImages.on('click', function(e){
		e.preventDefault();
		var index = $galleryImages.index($(this));
		//Get full source
		var src = $(this).data('full');
		//Get full description
		var decp = $(this).data('desc')


		$('.modalContent img').attr('src',src).data('index',index);
		
		$('.overlay').addClass('open');

		$('.selected').removeClass('selected');
		$(this).addClass('selected');

	//2. have modal box get full-size image
		// the second src (without apostrophes) is the variable

		var $minHeight = 800;
		var $height = $('.modal').height();
		if ( $('.modal').$height > $minHeight) {
			//$(this).css("width", "40%");
		}

		// CLOSE MENUS WHEN MODAL IS OPEN
		$('ul.gallery-links, ul.contact-link').css('display', 'none');
	});


	//3. make directional arrows work
		$('a.arrowRight').on('click', function(e){
			e.preventDefault();
			var $selected = $('.selected')
			if ($selected.is(':first-child')) {
				$('.photoThumbnails a:last-child').click();	
			} else {
				$selected.prev().trigger('click');
			}
		
		});

		$('a.arrowLeft').on('click', function (e){
			e.preventDefault();
			var $selected = $('.selected');
			if ($selected.is(':last-child')) {
				$('.photoThumbnails a:first-child').click();
			} else {
				$selected.next().trigger('click');
			}
		});

		// arrow keys

		$(document).keydown(function(e) {
	        var $current = $('.selected');
	        if (e.keyCode ==37)
	        	$current.prev().trigger('click');
	        else if (e.keyCode ==39)
	        	$current.next().trigger('click');
	        else if (e.keyCode ==27)
	        	$('.overlay').removeClass('open');
       });

	//4. transitions 

	//5. click on body to close modal
		

		$('.overlayBKG').on('click', function(){
				$('.overlay').removeClass('open');
			
		});

	/////////// DROP DOWN NAVIGATION ///////////
	///////////////////////////////////////////

	$('a.gallery-link').on('click', function(e) {
		e.preventDefault();
		$('ul.gallery-links').slideToggle(350);
		$('ul.contact-link').css('display', 'none');
	});

	// CONTACT
	$('a.email-link').on('click', function(e) {
		e.preventDefault();
		$('ul.contact-link').slideToggle(350);
		$('ul.gallery-links').css('display', 'none');
	});

	// KEEP GALLERY MENU OPEN ON MUSIC PAGE

	if($('body').hasClass('body-music')) {
		$('ul.gallery-links').css('display', 'block');
	} else {

	}

}); // END DOCUMENT READY


