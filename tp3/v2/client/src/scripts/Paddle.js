import Mobile from './Mobile.js';
import MoveState from './MoveState.js';

const  image_Paddle= './images/paddle.png';
const shiftY = 8;
export default class Paddle extends Mobile {
    constructor(x, y) {
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
    move(canvas) {
        if (this.moving === MoveState.DOWN) {
            this.y = Math.min(520, this.y + this.shiftY);
        }
        // déplace sans sortir des limites 
        if (this.moving === MoveState.UP) {
            this.y = Math.max(0, this.y + this.shiftY);
        }
    }

  
  

}

