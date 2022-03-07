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
    this.canvas = canvas;
    this.ball = new Ball(this.canvas.width/2 , this.canvas.height/2, this); // la balle au centre 
    this._leftPaddle = new Paddle(40, 256,this);
    this._rightPaddle = new Paddle(740, 256,this);
    this._ctxt = null;
    
  }
  get leftPaddle () {
    return this._leftPaddle;
  }
  set leftPaddle(leftPaddle){
    throw "Exception"
  }
  get rightPaddle () {
    return this._leftPaddle;
  }
  set rightPaddle(rightPaddle){
    throw "Exception"
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
  
  /*
  * set this._context.
  */
  set context(ctxt) {
    this._ctxt = ctxt
  }
  

 

  /** animate the game : move and draw */
  animate() {
    this.ctxt = this.canvas.getContext("2d");
    this.ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.moveAndDraw();
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
  }
  /** move then draw the bouncing ball */
  moveAndDraw() {
    this.ball.move(this.canvas);
    this.ball.draw(this.ctxt);
    this._leftPaddle.move(this.canvas);
    this._leftPaddle.draw(this.ctxt);
    this._rightPaddle.move(this.canvas);
    this._rightPaddle.draw(this.ctxt);
    if(this.ball.collisionWith(this._leftPaddle)){
      this.ball.resetBall();
    }
    if(this.ball.collisionWith(this._rightPaddle)){
      this.ball.resetBall();
    }
    this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }
  rightPaddleStopMoving(){
    this._rightPaddle.stopMoving();
}
rightPaddleUp(){
  this._rightPaddle.moveUp();

}
rightPaddle(){
  this.paddles._rightPaddle;

}

rightPaddleDown(){
  this._rightPaddle.moveDown();
}

leftPaddleStopMoving(){
  this._leftPaddle.stopMoving();
 
}
leftPaddle(){
  this._leftPaddle;
 
}
leftPaddleUp(){
  this._leftPaddle.moveUp();
 

}

leftPaddleDown(){
  this._leftPaddle.moveDown();
  
}

startRound() {
  this.ball = new Ball(this.canvas.width/2 , this.canvas.height/2, this); // la balle au centre 
}


keyDownActionHandler(event){
  switch (event.key) {
      case " ":
        this.startRound();
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
      default: return;
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
      default: return;
  }
  event.preventDefault();


} 

}
