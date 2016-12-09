import './css/reset.css';
import './css/main.css';

const content = document.getElementById('content');

const nextAlignMap = {
	right: 'left',
	mid: 'right',
	left: 'mid',
};

document.getElementsByClassName('text-alignment')[0].addEventListener( 'click', (e) => {

	content.className = content.className.replace(
		e.currentTarget.getAttribute('data-align'),
		nextAlignMap[
			e.currentTarget.getAttribute('data-align')
		]
	);

	const alignClass = nextAlignMap[
		e.currentTarget.getAttribute('data-align')
	];

	e.currentTarget.setAttribute('data-align', alignClass);
	e.currentTarget.className = `text-alignment ${alignClass}`;

});

document.getElementsByClassName('text-color')[0].addEventListener( 'click', (e) => {

	const setTextColorToBlack = e.currentTarget.getAttribute('data-color') === 'white';

	e.currentTarget.setAttribute('data-color', setTextColorToBlack ? 'black' : 'white');
	e.currentTarget.className = `text-color ${setTextColorToBlack || 'white'}`;

	if( setTextColorToBlack ) {

		content.className = content.className.replace('white', '');
		return;

	}

	content.className = `${content.className} white`;

});

document.getElementsByClassName('text-size')[0].addEventListener( 'input', (e) => {

	content.style.fontSize = `${parseInt(e.currentTarget.value, 10)}px`;

});

const bgColorArray = document.getElementsByClassName('color');

Array.from(bgColorArray).forEach((color) => {

	color.addEventListener( 'click', (e) => {

		document.body.className = `v-mid bg-${e.currentTarget.getAttribute('data-color')}`;

	});

});
