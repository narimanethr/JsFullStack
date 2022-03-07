import Mobile from './Mobile.js';

// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const shiftX = 8;
const shiftY = 4;
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
  this.shiftX = -this.shiftX;
 
}

 collisionWith(leftPaddle){
  return leftPaddle.inside(this.x,this.y);
}



}





