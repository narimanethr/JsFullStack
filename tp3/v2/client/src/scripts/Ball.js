import Mobile from './Mobile.js';

// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const shiftX = 8;
const shiftY = 4;
const reset  = true;
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
    super(x, y, BALL_IMAGE_SRC , shiftX, shiftY);
    this.theGame = theGame;
  }
   /**
   * when moving a ball bounces inside the limit of its game's canvas
   */
    move() {
      if (this.x <= 0){
        document.getElementById('score_player2').innerHTML = parseInt(document.getElementById('score_player2').innerHTML) + 1;
        this.theGame.score();
      } else if (this.x >= this.theGame.canvas.width - this.img.width) {
        document.getElementById('score_player1').innerHTML = parseInt(document.getElementById('score_player1').innerHTML) + 1;
        this.theGame.score();
        
      } else {
        if (this.y <= 0 || (this.y+this.height >= this.theGame.canvas.height)) {
          this.shiftY = - this.shiftY;    // rebond en haut ou en bas
        }
        else if (this.x <= 0 || this.x + this.width >= this.theGame.canvas.width ) {
          this.shiftX = - this.shiftX;    // rebond en gauche ou à droite
        }
        super.move();
      }
      
      
    }
 resetBall(){
  if(reset ){
    this.shiftX = -this.shiftX;
  }else {
    let n = 4;
    let partHeight = this.theGame.paddle.height/((n+1)*2);
    let paddleCenter = this.theGame.paddle.y + this.theGame.paddle.height/2;
    let currentSeg = 0;
    let endSeg = n;
    let step = 1;
    if (this.y < paddleCenter){
      endSeg = -endSeg;
      step = -1;
    }

    for(currentSeg; currentSeg <= endSeg; currentSeg = currentSeg + step){
      if(this.y >= paddleCenter*currentSeg*step){
        this.shiftY = currentSeg * step;
      }
    }
    let n2 = 7;
    this.shiftX = -Math.sign(this.shiftX) * Math.abs(n2 - Math.abs(this.shiftY));
  }
}
 collisionWith(leftPaddle){
  return leftPaddle.inside(this.x,this.y);
}



}





