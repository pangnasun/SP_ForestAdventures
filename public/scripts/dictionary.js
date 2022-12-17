const BG_SPEED = 2;
const GAME_FRAME_RATE = 40;

let game;
let startup;

let imgBackground, bg1, bg2, bg3;
let bgMusic;
let gameOverImage;
let startupImage;
let startupFont;

let heartImage;
let life;

let scenario;
let score;
let buttonManager;
let scoreBoard;

let currentScene;
let scenes = {};

let level;

let input, button, greeting;

// Creating hero
let hero;
let heroMatrix = []
let imgHero;
const heroSprite = {
    matrixRows: 4,
    matrixColumns: 4,
    w: 220,
    h: 270,
    halfW: 110,
    halfH: 135,
    imagePath: "assets/images/hero/running.png",
};

for (let r = 0; r < heroSprite.matrixRows; r++) {
    for (let c = 0; c < heroSprite.matrixColumns; c++) {
        heroMatrix.push({
            x: heroSprite.w * c,
            y: heroSprite.h * r,
        });
    }
}

const enemies = [];
// Setting up enemy
let enemyMatrix = []
let imgEnemy;
const enemySprite = {
    matrixRows: 7,
    matrixColumns: 4,
    w: 104,
    halfW: 52,
    imagePath: "assets/images/enemies/drop.png",
};
for (let r = 0; r < enemySprite.matrixRows; r++) {
    for (let c = 0; c < enemySprite.matrixColumns; c++) {
        enemyMatrix.push({
            x: enemySprite.w * c,
            y: enemySprite.w * r,
        });
    }
}

// Creating troll
let enemyTrollMatrix = []
let imgEnemyTroll;
const enemyTrollSprite = {
    matrixRows: 6,
    matrixColumns: 5,
    matrixSize: 28,
    frameCount: 0,
    w: 400,
    halfW: 200,
    imagePath: "assets/images/enemies/troll.png",
};
for (let r = 0; r < enemyTrollSprite.matrixRows; r++) {
    for (let c = 0; c < enemyTrollSprite.matrixColumns; c++) {
        enemyTrollMatrix.push({
            x: enemyTrollSprite.w * c,
            y: enemyTrollSprite.w * r,
        });
        enemyTrollSprite.frameCount++
        if(enemyTrollSprite.frameCount > enemyTrollSprite.matrixSize){
            break;
        }
    }
}

// Creating flying
let enemyFlyingMatrix = []
let imgEnemyFlying;
const enemyFlyingSprite = {
    matrixRows: 6,
    matrixColumns: 3,
    matrixSize: 16,
    frameCount: 0,
    w: 200,
    h: 150,
    halfW: 100,
    halfH: 75,
    imagePath: "assets/images/enemies/flying-drop.png",
};
for (let r = 0; r < enemyFlyingSprite.matrixRows; r++) {
    for (let c = 0; c < enemyFlyingSprite.matrixColumns; c++) {
        enemyFlyingMatrix.push({
            x: enemyFlyingSprite.w * c,
            y: enemyFlyingSprite.h * r,
        });
        enemyFlyingSprite.frameCount++
        if(enemyFlyingSprite.frameCount > enemyFlyingSprite.matrixSize){
            break;
        }
    }
}

// Creating wolf
let enemyWolfMatrix = []
let imgEnemyWolf;
const enemyWolfSprite = {
    matrixRows: 6,
    matrixColumns: 5,
    matrixSize: 28,
    frameCount: 0,
    w: 480,
    halfW: 240,
    imagePath: "assets/images/enemies/wolf.png",
};
for (let r = 0; r < enemyWolfSprite.matrixRows; r++) {
    for (let c = 0; c < enemyWolfSprite.matrixColumns; c++) {
        enemyWolfMatrix.push({
            x: enemyWolfSprite.w * c,
            y: enemyWolfSprite.w * r,
        });
        enemyWolfSprite.frameCount++
        if (enemyWolfSprite.frameCount > enemyWolfSprite.matrixSize) {
            break;
        }
    }
}