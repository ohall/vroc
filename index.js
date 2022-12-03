import njk from './njk.js';

const BOTTOM_Y = 1;
const TOP_Y = BOTTOM_Y + 1.5;
const ROTATION = 45;
const SCREEN_WIDTH = 5;
const SCREEN_HEIGHT = 1.5;
const Z_OFFSET = -3.5
const X_OFFSET = SCREEN_WIDTH/2;
const radius = 5.7;

const model = {
	common: {
		height: SCREEN_HEIGHT,
		width: SCREEN_WIDTH,
	},
	charts:  [
		// bottom row
		{ x: X_OFFSET,	y: BOTTOM_Y,	z: Z_OFFSET,		rotation: -ROTATION,	src: 1 },
		{ x: 0.0,				y: BOTTOM_Y,	z: Z_OFFSET-1,	rotation: 0,					src: 2 },
		{ x: -X_OFFSET,	y: BOTTOM_Y,	z: Z_OFFSET,		rotation: ROTATION,		src: 3 },
		// top row
		{ x: X_OFFSET,	y: TOP_Y,	z: Z_OFFSET,		rotation: -ROTATION,src: 4 },
		{ x: 0.0,				y: TOP_Y,	z: Z_OFFSET-1,	rotation: 0,				src: 5 },
		{ x: -X_OFFSET,	y: TOP_Y,	z: Z_OFFSET,		rotation: ROTATION,	src: 6 }
	],
	radius
}

window.onload = function() {
	const $e = document.querySelector('#ops-displays');
	const uri = 'https: //goquotes-api.herokuapp.com/api/v1/random?count=1';
	njk.render('index.njk', model, (err, html) => $e.innerHTML = err && err.message || html);
};

