import Ball from './Ball.js';
import Paddle from './Paddle.js';
/**
 * a Game animates a ball bouncing in a canvas
 */
export default class Game {

  /**
   * build a Game
   *
   * @param  {Canvas} canvas the canvas of the game
   */
  constructor(canvas) {
    this.raf = null;
    this._ctxt = null;
    this.canvas = canvas;
    this.paddles = new Map().set("left", new Paddle(40,this.canvas.height/2)).set("right",new Paddle(this.canvas.width-40,this.canvas.height/2));
    this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, this);
  }
  /** start this game animation */
  start() {
    this.animate();
  }
  /** stop this game animation */
  stop() {
    window.cancelAnimationFrame(this.raf);
  }
  get context() {
    return this._ctxt;
  }
  set context(ctxt) {
    this._ctxt = ctxt
  }
 

  /** animate the game : move and draw */
  animate() {
    this.ctxt = this.canvas.getContext("2d");
    this.ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.moveAndDraw();
    this.ballEvenement();
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
  }
  /** move then draw the bouncing ball */
  moveAndDraw() {
    const ctxt = this.canvas.getContext("2d");
    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.paddles.forEach(elt =>elt.move(this.canvas));
    this.paddles.forEach(elt =>elt.draw(ctxt));
    this.ball.move(this.canvas);
    this.ball.draw(ctxt);
    this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }
  rightPaddleStopMoving(){
    this.paddles.get("right").stopMoving();
}
rightPaddleUp(){
  this.paddles.get("right").moveUp();

}

rightPaddleDown(){
  this.paddles.get("right").moveDown();
}

leftPaddleStopMoving(){
  this.paddles.get("left").stopMoving();
 
}
leftPaddleUp(){
  this.paddles.get("left").moveUp();
 

}

leftPaddleDown(){
  this.paddles.get("left").moveDown();
  
}
updateScore(score){
  this.score=score;
  document.getElementById("score").textContent = this.score;

}
ballEvenement() {
  if (this.ball) {
      this.ball.draw(this.ctxt);
      if (!this.ball == false) {
        for (let key of this.paddles.keys()) {
          this.ball.collisionWith(this.paddles.get(key))
          this.ball.move(this.canvas);

        }   
          
        }
       
  }
}



  keyDownActionHandler(event) {
    switch (event.key) {
        case "ArrowUp":
        case "UP":
          this.leftPaddleUp();
          this.rightPaddleUp();
            break;
        case "ArrowDown":
        case "DOWN":
          this.leftPaddleDown();
          this.rightPaddleDown();
            break;
        default:
            return;
    }
    event.preventDefault();
}
keyUpActionHandler(event) {
  switch (event.key) {
      case "ArrowUp":
      case "Up":
      case "ArrowDown":
      case "Down":
        this.leftPaddleStopMoving();
         this.rightPaddleStopMoving();
          break;
      default:
          return;
  }
  event.preventDefault();
}

}
