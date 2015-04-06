$(function (){

	//1. when user clicks on thumbnail show modal box
	$('.photoThumbnails a').on('click', function(e){
		e.preventDefault();
		var src = $(this).data('full');
		var decp = $(this).data('desc')
		$('.overlay').removeClass('hidden');
		console.log('it works!');

	//2. have modal box get full-size image
		// the second src (without apostrophes) is the variable
		$('.modalContent img').attr('src',src);	
	});

	//3. make directional arrows work
	//4. transitions 

});
