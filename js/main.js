const content = document.getElementById('content');

document.getElementsByClassName('text-alignment')[0].addEventListener( 'click', function(e) {
	var alignClass = 'mid';
	if( e.currentTarget.getAttribute('data-align') == 'right' ) {
		alignClass = 'left';
		content.className = content.className.replace( 'right', 'left' );
	}
	else if( e.currentTarget.getAttribute('data-align') == 'mid' ) {
		alignClass = 'right';
		content.className = content.className.replace( 'mid', 'right' );
	}
	else {
		content.className = content.className.replace( 'left', 'mid' );
	}
	e.currentTarget.setAttribute('data-align', alignClass);
	e.currentTarget.className = `text-alignment ${alignClass}`;
});

document.getElementsByClassName('text-color')[0].addEventListener( 'click', function(e) {console.log(content.className);
	if( e.currentTarget.getAttribute('data-color') == 'white' ) {
		e.currentTarget.setAttribute('data-color', 'black');
		e.currentTarget.className = 'text-color';
		content.className = content.className.replace('white', '');
	}
	else {
		e.currentTarget.setAttribute('data-color', 'white');
		e.currentTarget.className = 'text-color white';
		content.className = `${content.className} white`;
	}
});

document.getElementsByClassName('text-size')[0].addEventListener( 'input', function(e) {
	content.style.fontSize = `${parseInt(e.currentTarget.value)}px`;
});

var bgColorArray = document.getElementsByClassName('color');
for( var colorDiv of Array.from(bgColorArray) ) {
	colorDiv.addEventListener( 'click', function(e) {
		document.body.className = `v-mid bg-${e.currentTarget.getAttribute('data-color')}`;
	});
}