const BOTTOM_Y = 1;
const TOP_Y = BOTTOM_Y + 1.5;
const ROTATION = 60;
const SCREEN_WIDTH = 8;
const SCREEN_HEIGHT = 1.5;
const Z_OFFSET = 1
const X_OFFSET = 0;
const radius = 5.7;

const model = {
    common: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
    },
    charts:  [
        // bottom row
        { id: 0, x: X_OFFSET,	y: BOTTOM_Y,	z: Z_OFFSET,		rotation: -ROTATION,	src: 1},
        { id: 1, x: 0.0,				y: BOTTOM_Y,	z: Z_OFFSET,	rotation: 0,					src: 2},
        { id: 2, x: -X_OFFSET,	y: BOTTOM_Y,	z: Z_OFFSET,		rotation: ROTATION,		src: 3},
        // top row
        { id: 3, x: X_OFFSET,	y: TOP_Y,	z: Z_OFFSET,		rotation: -ROTATION,src: 4},
        { id: 4, x: 0.0,				y: TOP_Y,	z: Z_OFFSET,	rotation: 0,				src: 5},
        { id: 5, x: -X_OFFSET,	y: TOP_Y,	z: Z_OFFSET,		rotation: ROTATION,	src: 6}
    ],
    radius
}

export default model;
