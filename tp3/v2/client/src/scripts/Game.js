import Ball from './Ball.js';
import Paddle from './Paddle.js';
const joueurId = { ONE : 1, TWO : 2};
/**
 * a Game animates a ball bouncing in a canvas
 */
 const socket = io();
export default class Game {
 
  #joueurId;
  #socket;
  paused = false;

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
    /** start this game animation */  
    start() {
      setTimeout( () => {
        this.animate();
      }, 1000);
    }
  
    /** stop this game animation */
    stop() {
      window.cancelAnimationFrame(this.raf);
      socket.disconnect();
    }
  
    /** arrete le jeu apres un but */
    score(){
      window.cancelAnimationFrame(this.raf);
      this.ball.stopMoving();
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

  /** stop this game animation */
  stop() {
    window.cancelAnimationFrame(this.raf);
  }
 
  startRound() {
    this.ball = new Ball(this.canvas.width/2 , this.canvas.height/2, this); // la balle au centre 
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
 

 
  send_sync_ball(){
    socket.emit('sync ball', {x: this.ball.x, y : this.ball.y});
  }


  receive_sync_ball(ball){
    this.ball.x = ball.x;
    this.ball.y = ball.y;
  }

  send_sync_paddle(){
    if(this.#joueurId == 1){
      socket.emit('sync paddle', {x: this.leftPaddle.x, y : this.leftPaddle.y})
    }else if(this.#joueurId == 2){
      socket.emit('sync paddle', {x: this.rightPaddle.x, y : this.rightPaddle.y})
    }
  }


  send_sync_paddle(paddle){
    if(this.#joueurId == 1){
      this.rightPaddle= paddle.y;
    }else if(this.#joueurId == 2){
      this.leftPaddle = paddle.y;
    }
  }

   move_player_down(){
    if(this.#joueurId == 1){
      this.leftPaddleDown();
    }else if(this.#joueurId == 2){
      this.rightPaddleDown();
      
    }
  }

 
  move_player_up(){
   
    if(this.#joueurId == 1){
      this.leftPaddleUp();
    }else if(this.#joueurId == 2){
      this.rightPaddleUp();
    }
  }

 
  stop_moving_player(){
   
    if(this.#joueurId == 1){
      this.leftPaddleStopMoving();
    }else if(this.#joueurId == 2){
      this.rightPaddleStopMoving();
    }
  }


  disable_start(){
    document.getElementById("start").disabled = true;
  }

  /**
   * donne un ID au joueur actuel
   * @param {*} player 
   */
  set_player_id(player){
    this.#joueurId = player.id;
  }

  /**
   * donne un nom au joueur actuel
   * @param {*} player 
   */
  set_player_name(player){
    document.getElementById("player").innerHTML = player.name;
  }

  connect() {
        // création de la socket (connection client server)
        socket = io('http://localhost:8080/');
        socket.on("start_game", () => this.start());
        socket.on('send_new_ball', () => this.redemare());

        socket.on('disble_start' , () => this.disable_start());
        socket.on('set_player_name', (player) => this.set_player_name(player));
        socket.on('set_player_id', (player) => this.set_player_id(player));
        socket.on('set_msg_box', (msg) => this.set_msg(msg));
        socket.on('move_down', () => this.move_player_down());
        socket.on('move_up', () => this.move_player_up());
        socket.on('stop_moving', () => this.stop_moving_player());

        socket.on('sync_ball', (ball) => this.send_sync_ball(ball));
        socket.on('sync_paddle', (paddle) => this.send_sync_paddle(paddle));

        socket.on('disconnected', () => this.has_disconnected());
  }
  
  has_disconnected(){
    this.set_msg({msg_txt: "he  left the game"});
  }

  set_msg(msg){
    document.getElementById("msg_box").innerHTML = msg.msg_txt;
  }

  redemare(){
    this.set_msg({msg_txt: ""});
    this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, this);
    this.paused = false;
    this.ball.stopMoving();
    this.leftPaddle.y = this.canvas.height/2;
    this.rightPaddle.y = this.canvas.height/2;
    setTimeout( () => {
      this.ball.startMoving();
    }, 1000);
  }

  /** animate the game : move and draw */
  animate() {
    this.moveAndDraw();
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
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
      this.send_sync_ball();
    }
    if(this.ball.collisionWith(this._rightPaddle)){
      this.ball.resetBall();
      this.send_sync_ball();
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




keyDownActionHandler(event){
  switch (event.key) {
      case " ":
        this.startRound();
      case "ArrowUp":
      case "UP":
        this.send_sync_paddle();
        if(this.#joueurId == 1){
          this.leftPaddleUp();
        }else if (this.#joueurId ==2){
          this.rightPaddleUp();
        }
        
        socket.emit("move up");
        break;
    
       
          break;
       case "ArrowDown":
       case "DOWN":
        this.send_sync_paddle();
        if(this.#joueurId == 1){
          this.leftPaddleDown();
        }else if (this.#joueurId == 2){
          this.rightPaddleDown();
        }

        socket.emit("move down");
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
        this.send_sync_paddle();
        if(this.#joueurId == 1){
          this.leftPaddleStopMoving();
        }else if (this.#joueurId ==2){
          this.rightPaddleStopMoving();
        }
        
        socket.emit("stop moving");
        break;
      default: return;
        
  }
  event.preventDefault();


} 

}
