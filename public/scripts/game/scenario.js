class Scenario {
    constructor(img, img1, speed) {
      this.image = img;
      this.image1 = img1;
      this.speed = speed;
      this.x1 = 0;
      this.x2 = width;
    }
    
    render() {
      image(this.image, this.x1, 0, width, height);
      image(this.image, this.x2, 0, width, height);

      image(this.image1, this.x1, -50, (width * 0.5), this.image1.height * ((width * 0.5)/this.image1.width));
      image(this.image1, this.x2, -50, (width * 0.5), this.image1.height * ((width *0.5) / this.image1.width));

    }
    
    move() {
      this.x1 -= this.speed;
      this.x2 -= this.speed;
      if (this.x1 < -width) {
        this.x1 = width;
      }
      if (this.x2 < -width) {
        this.x2 = width;
      }
    }
  }