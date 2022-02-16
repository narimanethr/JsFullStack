import Mobile from './Mobile.js';
import MoveState from './MoveState.js';

const  image_Paddle= './images/paddle.png';

export default class Paddle extends Mobile {
    constructor(x, y) {
        super(x, y, image_Paddle, 0, 6);
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
        this.speedY = 6;
        this.moving = MoveState.DOWN;
    }

   
    moveUp() {
        this.speedY = -6;
        this.moving = MoveState.UP;
    }
    stopMoving() {
        this.moving = MoveState.NONE;
    }
    move(canvas) {
        if (this.moving === MoveState.DOWN) {
            this.y = Math.min(520, this.y + this.speedY);
        }
        // déplace sans sortir des limites 
        if (this.moving === MoveState.UP) {
            this.y = Math.max(0, this.y + this.speedY);
        }
    }

  
    isInside(x, y) {
    if((this.x <= x && x <= (this.x + this.image.width)) && (this.y <= y && y <= (this.y + this.image.height))) {
        return true;
    }
    return false;
}
}