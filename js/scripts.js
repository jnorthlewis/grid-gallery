$(function (){

	var fullImg = $('.photoThumbnails a').data('full');
	
	//1. when user clicks on thumbnail show modal box
	$('.photoThumbnails a').on('click', function(e){
		e.preventDefault();
		var src = $(this).data('full');
		var decp = $(this).data('desc')

		$('.overlay').addClass('open');

		// $('.overlay').on('click', function(){
		// 	$('.overlay').removeClass('open');
		// });

		// $(window).on('click', function(e){
		// 	e.preventDefault();
		// 	console.log("i lcicked the window");
		// 	$('.modal').toggleClass('open');
		// });

		$('.selected').removeClass('selected');
		$(this).addClass('selected');
		console.log('selected!');

	//2. have modal box get full-size image
		// the second src (without apostrophes) is the variable
		$('.modalContent img').attr('src',src);
		console.log('imagessssss');

	});

	// $('.overlay').on('click', function(){
	// 	$('.overlay').removeClass('open');
	// });

	// $('*:not(.photoThumbnails a)').on('click', function(e){
	// 	e.preventDefault();
	// 	console.log("i lcicked the window");
	// 	$('.modal').removeClass('open');
	// });



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

	//4. transitions 

	//5. click on body to close modal
		

		$('.overlayBKG').on('click', function(){
				$('.overlay').removeClass('open');
				console.log('removed!');
			
		});

});


// if there is not a class open, add it

// if ($('.modal').has('.open')) {
// 	$(this).removeClass('open');
// } else {
// 	$(this).addClass('open');
// }
// if there is a class of open, remove it
