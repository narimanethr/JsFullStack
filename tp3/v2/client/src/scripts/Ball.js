import Mobile from './Mobile.js';
import MoveState from './MoveState.js';
import Paddle from './Paddle.js';

// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const SHIFT_X = 8;
const SHIFT_Y = 4;


/**
 * a Ball is a mobile with a ball as image and that bounces in a Game (inside the game's canvas)
 */
export default class Ball extends Mobile {

  /**  build a ball
   *
   * @param  {number} x       the x coordinate
   * @param  {number} y       the y coordinate
   * @param  {Game} theGame   the Game this ball belongs to
   */
  constructor(x, y, theGame) {
    super(x, y, BALL_IMAGE_SRC , SHIFT_X, SHIFT_Y);
    this.theGame = theGame;
    this.paddles = new Map().set("left", new Paddle(40,this.canvas.height/2)).set("right",new Paddle(this.canvas.width-40,this.canvas.height/2));
  }


  /**
   * when moving a ball bounces inside the limit of its game's canvas
   */
  move() {
    if (this.y <= 0 || (this.y+this.height >= this.theGame.canvas.height)) {
      this.shiftY = - this.shiftY;    // rebond en haut ou en bas
    }
    else if (this.x <= 0 || this.x + this.width >= this.theGame.canvas.width ) {
      this.shiftX = - this.shiftX;    // rebond en gauche ou à droite
    }
    super.move();
  }
  collisionWith(paddles){
    return this.x <= paddles.x + paddles.width && this.x >= paddles.x && this.y <= paddles.y+paddles.height && this.y >= paddles.y;

}
















}
