import Mobile from './Mobile.js';
import MoveState from './MoveState.js';

const  image_Paddle= './images/paddle.png';
const shiftY = 8;
export default class Paddle extends Mobile {
    constructor(x, y, theGame) {
        super(x, y, image_Paddle, 0,shiftY );
        this._moving = MoveState.NONE;
        this.theGame = theGame;
}
    getup() {
        return (this._moving == MoveState.UP);
    }
    
   
    getdown() {
        return (this._moving == MoveState.DOWN);
    }
    
   
    get moving () {
        return this._moving;
    }

    
    set moving(moving) {
        this._moving = moving;
    }

    
    moveDown() {
        this.shiftY += this.shiftY;
        this._moving = MoveState.DOWN;
    }

   
    moveUp() {
        this.shiftY -=this.shiftY ;
        this.moving = MoveState.UP;
    }
    stopMoving() {
        this.moving = MoveState.NONE;
    }
    move(){
        if(this.getdown()){
          this.y = Math.min(this.y + this.shiftY, this.theGame.canvas.height - this.img.height);
        }
  
        if(this.getup()){
          this.y = Math.max(this.y - this.shiftY, 0);
        }
      }
  

  inside(px, py){
    return (px >= this.x && px <=(this.x+this.img.width) && py >= this.y && py <= (this.y+this.img.height));
  }



    

}

