const content = document.getElementById('content');

document.getElementsByClassName('text-alignment')[0].addEventListener( 'click', function() {
	content.className = '';

	var alignClass = 'mid';
	if( this.getAttribute('data-align') == 'right' ) {
		alignClass = 'left';
	}
	else if( this.getAttribute('data-align') == 'mid' ) {
		alignClass = 'right';
	}
	this.setAttribute('data-align', alignClass);
	this.className = `text-alignment ${alignClass}`;
	content.className = alignClass;
});

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