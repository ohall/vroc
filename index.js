import njk from './njk.js';
import model from './charts.js';

window.onload = function() {
	const $e = document.querySelector('#ops-displays');
	// const uri = 'https: //goquotes-api.herokuapp.com/api/v1/random?count=1';
	njk.render('index.njk', model, (err, html) => $e.innerHTML = err && err.message || html);
};

