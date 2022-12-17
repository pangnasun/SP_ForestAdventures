function setup() {
    createCanvas(windowWidth, windowHeight);
    bgMusic.loop();
    frameRate(GAME_FRAME_RATE);
    currentScene = 'startupScene';
    buttonManager = new ButtonManager('Start Game', width/2, height/1.5);
    scoreBoard = new ButtonManager('Leaderboard', width/2, height/2);
    game = new Game();
    game.setup();
    startup = new Startup();
    scenes = {
        gameScene: game,
        startupScene: startup
    };
    // bgMusic.play();
    
}

function keyPressed() {
    game.keyPressed(key)
}

function draw() {
    scenes[currentScene].draw();
    // let inp = createInput('');
    // inp.position(width / 3, height / 2);
    // inp.size(100);
    // inp.input(myInputEvent);
    // noLoop();
}

function myInputEvent() {
    console.log('you are typing: ', this.value());
}