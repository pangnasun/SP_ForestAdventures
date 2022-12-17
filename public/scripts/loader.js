function preload() {
    imgBackground = loadImage("assets/images/background/forest3.webp");
    bg1 = loadImage("assets/images/background/BBG_Trees_01.png");
    bg2 = loadImage("assets/images/background/BBG_Trees_02.png");
    bg3 = loadImage("assets/images/background/BBG_Trees_03.png");

    imgHero = loadImage(heroSprite.imagePath);
    imgEnemy = loadImage(enemySprite.imagePath);
    imgEnemyTroll = loadImage(enemyTrollSprite.imagePath);
    imgEnemyWolf = loadImage(enemyWolfSprite.imagePath);
    imgEnemyFlying = loadImage(enemyFlyingSprite.imagePath);
    gameOverImage = loadImage("assets/images/assets/game-over.png");
    startupImage = loadImage("assets/images/background/forest3.webp");
    heartImage = loadImage("assets/images/assets/heart.png");
    startupFont = loadFont("assets/images/assets/fontStart.otf");
    bgMusic = loadSound("assets/audio/music.mp3");
    

    // Levels
    level = loadJSON("levels/01.json");
}