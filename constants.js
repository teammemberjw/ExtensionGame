/* window constants */

const WIN_WIDTH = 800;
const WIN_HEIGHT = 500;

/*size of pixel box. Since this program will use pixel art, everything moving
* on screen will have to move in increments that are multiples of the size of
* a pixel box */

const PIX_DIM = 4;

/* Menu constants */

const MENU_HEIGHT = 120;

/* animation constants*/
const LOOP_DELAY = 1000/30;  // 30 frames per second

/* prop div constants */

const NUM_DIVS = 10;
const HIDING_X = -2000;  // when we move a div off screen it is to this location.

/*CHARACTER CONSTANTS*/
const UP = 38;
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;

const MOVE_MULT =2;
const MOVE_LENGTH = MOVE_MULT * PIX_DIM;
