import njk from './njk.js';

const SCREEN_WIDTH = 4;
const SCREEN_HEIGHT = 2;
const BOTTOM_Y = SCREEN_HEIGHT/2;
const TOP_Y = BOTTOM_Y + SCREEN_HEIGHT;
const ROTATION = 45;
const Z_OFFSET = -SCREEN_WIDTH
const X_OFFSET = SCREEN_WIDTH-(SCREEN_WIDTH/7);
const radius = 5.7;

const model = {
 common: {
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH,
 },
 charts:  [
  // bottom row
  { x: X_OFFSET, y: BOTTOM_Y, z: Z_OFFSET,rotation: -ROTATION, src: 1 },
  { x: 0.0,      y: BOTTOM_Y, z: Z_OFFSET-SCREEN_WIDTH/3, rotation: 0, src: 2 },
  { x: -X_OFFSET,y: BOTTOM_Y, z: Z_OFFSET,  rotation: ROTATION,  src: 3 },
  // top row
  { x: X_OFFSET, y: TOP_Y, z: Z_OFFSET,  rotation: -ROTATION,src: 4 },
  { x: 0.0,      y: TOP_Y, z: Z_OFFSET-SCREEN_WIDTH/3, rotation: 0, src: 5 },
  { x: -X_OFFSET,y: TOP_Y, z: Z_OFFSET, rotation: ROTATION, src: 6 }
 ],
 radius
}

window.onload = function() {
 const $e = document.querySelector('#ops-displays');
 njk.render('index.njk', model, (err, html) => $e.innerHTML = err && err.message || html);
};

