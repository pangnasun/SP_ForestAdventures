class Startup {
    constructor() {
        this._backgroundImage();
        this._renderTitle();
        this._startButton();
    }

    draw() {
        //    
    }

    _backgroundImage() {
        image(startupImage, 0, 0, width, height);
    }

    _renderTitle() {
        textFont(startupFont);
        textAlign(CENTER);
        textSize(50);
        text('Welcome to', width * 0.5, height / 5);
        textSize(100);
        text('Forest Adventures', width * 0.5, height / 3);
    }

    _startButton() {
        // buttonManager.y = height / 7 * 4;
        buttonManager.draw();
        // scoreBoard.y = height / 7 * 4;
        scoreBoard.draw();
    }
}