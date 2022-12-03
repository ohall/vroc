import njk from './njk.js';

const model = {
	charts:  [
		// bottom row
		{ x: 2.6,	y: 1.5,	z: -1.5,	rotation: -45,src: 1 },
		{ x: 0.0,	y: 1.5,	z: -2.5,	rotation: 0,	src: 2 },
		{ x: -2.6,y: 1.5,	z: -1.5,	rotation: 45,	src: 3 },
		// top row
		{ x: 2.6,	y: 3,	z: -1.5,	rotation: -45,src: 4 },
		{ x: 0.0,	y: 3,	z: -2.5,	rotation: 0,	src: 5 },
		{ x: -2.6,y: 3,	z: -1.5,	rotation: 45,	src: 6 }
	],
	radius: 5.7
}
window.onload = function() {
	const $e = document.querySelector('#ops-displays');
	const uri = 'https: //goquotes-api.herokuapp.com/api/v1/random?count=1';
	njk.render('index.njk', model, (err, html) => $e.innerHTML = err && err.message || html);
};

