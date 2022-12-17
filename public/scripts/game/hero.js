class Hero extends Animation {
    constructor(matrix, image, x, offsetY = 0, imageWidth, imageHeight, spriteWidth, spriteHeight) {
        super(matrix, image, x, offsetY, imageWidth, imageHeight, spriteWidth, spriteHeight);
        
        this.halfWidth = this.imageWidth * 0.5;
        this.halfHeight = this.imageHeight * 0.5;

        this.screenRightLimit = width - (this.imageWidth * 0.8);

        this.posY = height - imageHeight - offsetY;
        this.y = this.posY;

        this.jumpForce = 0;
        this.gravity = 6;
        this.jumpCount = 0;

        this.hitBoxOffset = 0.7;
        this.jumpSound = loadSound("assets/audio/jump.mp3");

        this.invincible = false;
    }

    jump() {
        if(this.jumpCount < 2){
            this.jumpSound.play();
            this.jumpForce = -50;
            this.jumpCount++;
        }
    }

    applyGravity() {
        this.y += this.jumpForce;
        this.jumpForce += this.gravity;
        if (this.y > this.posY) {
            this.y = this.posY;
            this.jumpForce = 0;
            this.jumpCount = 0;
        }
    }

    walk(direction){
        switch (direction) {
            case 'left':
                if (this.x > 0) {
                    this.x -= 10;
                }
                
                break;
            
            case 'right':
                if (this.x < this.screenRightLimit) {
                    this.x += 10;
                }
                break;
        
            default:
                this.x += 10;
                break;
        }
    }

    setInvincible() {
        this.invincible = true;
        setTimeout(() => {
            this.invincible = false;
        }, 1500);
    }

    collisionCheck(enemy) {
        if (this.invincible) {
            return false;
        }
        // noFill();
        // rect(this.x,this.y,this.imageWidth * this.hitBoxOffset,this.imageHeight * this.hitBoxOffset);
        // rect(enemy.x,enemy.y,enemy.imageWidth * this.hitBoxOffset,enemy.imageHeight * this.hitBoxOffset);
        return collideRectRect(
            this.x,
            this.y,
            this.imageWidth * this.hitBoxOffset,
            this.imageHeight * this.hitBoxOffset,
            enemy.x,
            enemy.y,
            enemy.imageWidth * this.hitBoxOffset,
            enemy.imageHeight * this.hitBoxOffset,
        );
    }

    
    
}
