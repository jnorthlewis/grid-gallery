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
		console.log('selected!');

	//2. have modal box get full-size image
		// the second src (without apostrophes) is the variable

		var $minHeight = 800;
		var $height = $('.modal').height();
		if ( $('.modal').$height > $minHeight) {
			$(this).css("width", "40%");
		}

		console.log('imagessssss');
	});


	//3. make directional arrows work
		$('a.arrowRight').on('click', function(e){
			e.preventDefault();
			// var newIndex = $(this).parent().parent().find('img').data('index');
			// newIndex += 1;
			// console.log(newIndex);
			// var newSrc = $galleryImages.eq(newIndex).data('full');
			// console.log(newSrc);
			// var img = $('<img>').attr('src',newSrc).addClass('newImage').data('index',newIndex);
			// $('.modalContent').append(img);
			// $('.modalContent').addClass('transition');
			// $('.modalContent').on('transitionend', '.newImage', function() {
			// 	$('.modalContent .original').attr('src',newSrc);
			// 	$('.modalContent .newImage').remove();
			// 	$('.modalContent').removeClass('transition');
			// });

			var $selected = $('.selected')
			if ($selected.is(':first-child')) {
				$('.photoThumbnails a:last-child').click();	
			} else {
				$selected.prev().trigger('click');
				console.log('previous')
			}
		
		});

		$('a.arrowLeft').on('click', function (e){
			e.preventDefault();
			// 	var newIndex = $(this).parent().parent().find('img').data('index');
			// newIndex -= 1;
			// console.log(newIndex);
			// var newSrc = $galleryImages.eq(newIndex).data('full');
			// console.log(newSrc);
			// $('.modalContent').append('<img class="newImage" src="'+newSrc+'">');
			// $('.modalContent').addClass('transition');
			var $selected = $('.selected');
			if ($selected.is(':last-child')) {
				$('.photoThumbnails a:first-child').click();
			} else {
				$selected.next().trigger('click');
			}
		});

	//4. transitions 

	//5. click on body to close modal
		

		$('.overlayBKG').on('click', function(){
				$('.overlay').removeClass('open');
				console.log('removed!');
			
		});

	/////////// DROP DOWN NAVIGATION ///////////
	///////////////////////////////////////////

	$('a.gallery-link').on('click', function() {
		$('ul.gallery-links').slideToggle(350);
	});

});


