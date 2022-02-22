import Mobile from './Mobile.js';


// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const SHIFT_X = 8;
const SHIFT_Y = 4;
/**
 * a Ball is a paddles with a ball as image and that bounces in a Game (inside the game's canvas)
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
  }


  /**
   * when moving a ball bounces inside the limit of its game's canvas
   */
   move(canvas){
    if(!this.OutsideLeftRight(canvas)){
          super.move(canvas);
          return true;
        }
    else
       return false;
}
   
 
  collisionWith(Mobile){
    return this.x <= Mobile.x + Mobile.width && this.x >= Mobile.x && this.y <= Mobile.y+Mobile.height && this.y >= Mobile.y;

}

OutsideLeftRight(canvas){
  return this.x < 0 || this.x>=canvas.width-this.getHeight();
}
}
