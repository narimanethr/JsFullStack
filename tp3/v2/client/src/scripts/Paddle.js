import Mobile from './Mobile.js';
import MoveState from './MoveState.js';

const  image_Paddle= './images/paddle.png';
const shiftY = 10;
export default class Paddle extends Mobile {
    constructor(x, y, theGame) {
        super(x, y, image_Paddle, 0,shiftY );
        this._moving = MoveState.NONE;
}
    get up () {
        return (this._moving == MoveState.UP);
    }
    
   
    get down () {
        return (this._moving == MoveState.DOWN);
    }
    
   
    get moving() {
        return this._moving;
    }

    
    set moving(moving) {
        this._moving = moving;
    }

    
    moveDown() {
        this.shiftY += this.shiftY;
        this.moving = MoveState.DOWN;
    }

   
    moveUp() {
        this.shiftY -=this.shiftY ;
        this.moving = MoveState.UP;
    }
    stopMoving() {
        this.moving = MoveState.NONE;
    }
    move() {
        if(this.moving!=MoveState.NONE){
          if (this.y + shiftY> shiftY+1 && this.moving === MoveState.UP)  {
            super.move();
        }
        else if(this.y+shiftY<this.theGame.canvas.height-shiftY -60 && this.moving === MoveState.DOWN){
          super.move();
        }
        }
      }
      
      inside(px,py){
        return (px >= this.x && px <=(this.x+this.img.width) && py >= this.y && py <= (this.y+this.img.height));
      }
    
      inside2(px,py){
        return (px >= this.x && px <=(this.x+this.img.width) && py >= this.y && py <= (this.y+this.img.height));
      }

  
  

}

