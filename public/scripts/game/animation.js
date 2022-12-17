class Animation {
    constructor(matrix, image, x, offsetY = 0, imageWidth, imageHeight, spriteWidth, spriteHeight) {
        this.matrix = matrix;
        this.image = image;
        this.x = x;
        this.offsetY = offsetY;
        this.y = height - imageHeight - this.offsetY;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.currentFrame = 0;
        this.matrixSize = this.matrix.length - 1;
    }

    render() {
        const spriteX = this.matrix[this.currentFrame].x;
        const spriteY = this.matrix[this.currentFrame].y;
        image(
            this.image,
            this.x,
            this.y,
            this.imageWidth,
            this.imageHeight,
            spriteX,
            spriteY,
            this.spriteWidth,
            this.spriteHeight
        );
        
        this.move();
    }

    move() {
        this.currentFrame++;
        if (this.currentFrame >= this.matrixSize) {
          this.currentFrame = 0;
        }
    }
}