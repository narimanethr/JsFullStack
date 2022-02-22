import paddles from './Mobile.js';
import Game from './Game.js';
// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const SHIFT_X = 8;
const SHIFT_Y = 4;
/**
 * a Ball is a paddles with a ball as image and that bounces in a Game (inside the game's canvas)
 */
export default class Ball extends paddles {

  /**  build a ball
   *
   * @param  {number} x       the x coordinate
   * @param  {number} y       the y coordinate
   * @param  {Game} theGame   the Game this ball belongs to
   */
  constructor(x, y, theGame,radius,speed) {
    super(x, y, BALL_IMAGE_SRC , SHIFT_X, SHIFT_Y);
    this.theGame = theGame;
    this.radius = 10;
    this.speed = speed;
  }


  /**
   * when moving a ball bounces inside the limit of its game's canvas
   */
   move(canvas){
    if(!this.OutsideLeftRight(canvas)){
          super.move(canvas);
          return true;
        }
    else {
      this.resetBall();
      super.move(canvas);
      return false;
    }
      
}
  /*collisionWith(paddles){
    return this.x <= paddles.x + paddles.getWidth() && this.x >= paddles.x && this.y <= paddles.y+paddles.getHeight() && this.y >= paddles.y;

}
*/
OutsideLeftRight(canvas){
  return this.x < 0 || this.x>=canvas.width-this.getHeight();
}
collisondet(paddles){
  paddles.top = paddles.y;
  paddles.bottom = paddles.y + paddles.getHeight();
  paddles.left =paddles.x;
  paddles.right = paddles.x + paddles.getWidth();
  this.top= this.y - this.radius;
  this.left = this.x - this.radius;
  this.bottom = this.y + this.radius;
  this.right = this.x+ this.radius;
  return this.right >paddles.left && this.bottom>paddles.top && this.left < paddles.right && this.top <paddles.bottom;

}


update(){
  let player =(this.x<canvas.height/2)?user:com;
// the ball has a velocity
  this.x += this.shiftX;
  this.y += this.shiftY;
      // computer plays for itself, and we must be able to beat it
    // simple AI
  com.y += ((this.y - (com.y + com.height/2)))*0.1;
  // when the ball collides with bottom and top walls we inverse the y velocity.
  if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
    this.shiftY -=this.shiftY;
    
  }
  if (collisiondet(player)) {
    // le centre de collision de la balle avec le mobile 
    let colidPoint = (this.y - (player.y + player.height/2));
    colidPoint = colidPoint/( player.height/2);

    let angleRad = (Math.PI/4)*colidPoint;
      // change the X and Y velocity direction
    let direction = (this.x + this.radius < canvas.width/2) ? 1 : -1;
    this.velocityX = direction * this.speed * Math.cos(angleRad);
    this.velocityY = this.speed * Math.sin(angleRad);
      
      // speed up the ball everytime a paddle hits it.
    this.speed += 0.1;

    
  }
  // update the score 
  if( this.x - this.radius < 0 ){
    scoreVisitor++;
    resetBall();
}else if( this.x + this.radius > canvas.width){
    scoreHome++;
    resetBall();
}
}

// when COM or USER scores, we reset the ball ( remmetre en place la balle )
 resetBall(){
  this.shiftX = -this.shiftX;
  
}

}
