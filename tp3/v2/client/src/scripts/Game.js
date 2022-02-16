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
    this._paddle = new Paddle(40,256, this)
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
 

  /** animate the game : move and draw */
  animate() {
    this.moveAndDraw();
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
  }
  /** move then draw the bouncing ball */
  moveAndDraw() {
    const ctxt = this.canvas.getContext("2d");
    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // draw and move the paddle
    this.paddle.move(this.canvas);
    this.paddle.draw(ctxt);
    // draw and move the ball
    this.ball.move(this.canvas);
    this.ball.draw(ctxt);
  }
  PaddleStopMoving()
  {
      this.paddle.stopMoving();
  }


  get paddle() {
    return this._paddle;
  }
  set paddle(paddle) {
    throw "Exception : paddlecannot be modfied";
  }
  paddlestop() {
    return (currentY) => {
        this.paddle.y = currentY;
        this.PaddleStopMoving();
    };
  }
  keyDownActionHandler(event) {
    switch (event.key) {
        case "ArrowUp":
        case "UP":
            this.paddle.moveUp();
            break;
        case "ArrowDown":
        case "DOWN":
            this.paddle.moveDown();
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
          this.paddle.stopMoving();
          break;
      default:
          return;
  }
  event.preventDefault();
}

}
