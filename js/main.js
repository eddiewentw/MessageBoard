var content = document.getElementById('content');

document.getElementsByClassName('text-color')[0].addEventListener( 'click', function() {
	if( this.getAttribute('data-color') == 'white' ) {
		this.setAttribute('data-color', 'black');
		this.className = 'text-color';
		content.className = '';
	}
	else {
		this.setAttribute('data-color', 'white');
		this.className = 'text-color white';
		content.className = 'white';
	}
});

document.getElementsByClassName('text-size')[0].addEventListener( 'input', function() {
	content.style.fontSize = `${parseInt(this.value)}px`;
});

var bgColorArray = document.getElementsByClassName('color');
for( var colorDiv of Array.from(bgColorArray) ) {
	colorDiv.addEventListener( 'click', function() {
		document.body.className = `v-mid bg-${this.getAttribute('data-color')}`;
	});
}

/////////////////

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

});