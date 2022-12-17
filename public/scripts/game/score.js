class Score {
    constructor() {
        this.score = 0;
        textSize(50);
        textAlign(RIGHT);
        fill('#FFF');
    }

    displayScore() {
        text(parseInt(this.score), width - 100, 100);
    }
    
    addScore() {
        this.score += 0.2;
    }

    reset(){
        this.score = 0;
    }
}