$(document).ready( function(){

	$content = $('#content');

	// Change text-alignment
	$('.text-alignment').on( 'click', function() {
		$content.removeClass('left right');

		if( $(this).hasClass('left') ) {
			$(this).removeClass('left');
		} else if( $(this).hasClass('right') ) {
			$(this).removeClass('right').addClass('left');
			$content.addClass('left');
		} else {
			$(this).addClass('right');
			$content.addClass('right');
		}
	});

	// Change text-color
	$('.text-color').on( 'click', function() {
		if( $(this).hasClass('white') ) {
			$(this).removeClass('white');
			$content.removeClass('white');
		} else {
			$(this).addClass('white');
			$content.addClass('white');
		}
	});

	// Change text-size
	$('.text-size').on( 'input', function() {
		$content.css( 'font-size', parseInt( $(this).val() ) );
	});

	// Change background-color
	$('.color').on( 'click', function() {
		$('body').removeClass().addClass( 'v-mid bg-'+$(this).attr('data-color') );
	});

});