class Enemy extends Animation {
    constructor(matrix, image, x, offsetY = 0, imageWidth, imageHeight, spriteWidth, spriteHeight) {
        super(matrix, image, x, offsetY, imageWidth, imageHeight, spriteWidth, spriteHeight);
        this.initialSpeed = 5;
        this.maxSpeed = 10;
        this.minSpeed = 4;
        this.speed = this.initialSpeed;
        this.x = width;
    }

    walk() {
        this.x -= this.speed;
    }

    setSpeed() {
        this.speed = Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;
    }

    enterScene() {
        this.x = width;
    }
}