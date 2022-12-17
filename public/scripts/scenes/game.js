class Game {
    constructor() {
        this.currentEnemyIndex = 0;
        this.stage = level.map;
        this.name;
        this.hurtSound = loadSound("assets/audio/hurt.mp3");
        this.gameOverSound = loadSound("assets/audio/gameover.wav");
    }

    setup() {
        scenario = new Scenario(imgBackground, bg1, BG_SPEED);
        score = new Score();
        life = new Life(level.settings.maxLife, level.settings.initialLife);
    
        //bgMusic.loop();
  
        hero = new Hero(heroMatrix, imgHero, 0, 120, heroSprite.halfW, heroSprite.halfH, heroSprite.w, heroSprite.h);
        const enemy = new Enemy(enemyMatrix, imgEnemy, width - enemySprite.halfW, 120, enemySprite.halfW, enemySprite.halfW, enemySprite.w, enemySprite.w);
        
        const enemyTroll = new Enemy(enemyTrollMatrix, imgEnemyTroll, width - enemyTrollSprite.halfW,90, enemyTrollSprite.halfW, enemyTrollSprite.halfW, enemyTrollSprite.w, enemyTrollSprite.w);
        
        const enemyFlying = new Enemy(enemyFlyingMatrix, imgEnemyFlying, 0, 230, enemyFlyingSprite.halfW, enemyFlyingSprite.halfH, enemyFlyingSprite.w, enemyFlyingSprite.h);
        const enemyWolf = new Enemy(enemyWolfMatrix, imgEnemyWolf, width - enemyWolfSprite.halfW, 70, enemyWolfSprite.halfW, enemyWolfSprite.halfW, enemyWolfSprite.w, enemyWolfSprite.w);
        
        enemies.push(enemy);
       enemies.push(enemyTroll);
        enemies.push(enemyFlying);
        enemies.push(enemyWolf);
        
    }

    keyPressed(key) {
        if (key === 'ArrowUp' || key == ' ') {
            hero.jump();
        }
    }
    
    draw() {
        scenario.render();
        scenario.move();

        
    
        if (kb.pressing(RIGHT_ARROW)) {
            hero.walk('right');
        }
        
        if (kb.pressing(LEFT_ARROW)) {
            hero.walk('left');
        }
    
        hero.render();
        hero.applyGravity();
        
        const currentStage = this.stage[this.currentEnemyIndex];
        const currentEnemy = enemies[currentStage.enemy];
        currentEnemy.speed = currentStage.speed;
        const isEnemyOnScreen = currentEnemy.x < -(currentEnemy.imageWidth+100);
    
        currentEnemy.render();
        currentEnemy.walk();
    
        if (isEnemyOnScreen) {
            this.currentEnemyIndex++;
            currentEnemy.enterScene();
            if (this.currentEnemyIndex > this.stage.length-1) {
                this.currentEnemyIndex = 0;
            }
        }
    
        if (hero.collisionCheck(currentEnemy)) {
            this.hurtSound.play();
            life.oneLost();
            hero.setInvincible();
            if (life.current === 0) {
                this.gameOverSound.play();
                noStroke();
                fill('rgba(0,0,0,1)');
                rect(width / 2 - 300, height / 3 -100, 600, 400);
                image(gameOverImage, width * 0.5 - 200, height * 0.5 - 200);
                textSize(65);
                
                fill('#FFF');
                text('Your Score: ' + parseInt(score.score), width/2 , height/2);
                

                input = createInput("Enter your name").attribute('placeholder', 'X');;
                // input = createElement('input', "nter your name");
                input.position(width/2 - 100, height/2 + 50);

                button = createButton('submit');
                button.position(input.x + input.width, height / 2 +50);
                button.mousePressed(this.submitInfo);

                // greeting = createElement('h2', 'what is your name?');
                // greeting.position(20, 5);

                textAlign(CENTER);
                textSize(50);

                noLoop();
            }
        }
        life.draw();
        if(life.current > 0) score.displayScore();
        score.addScore();
    }

    submitInfo() {
        this.name = input.value();
        fetch("/api/scores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.name,
                score: parseInt(score.score),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                scoreResponse = data;
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
        window.location.href = 'leaderBoard.html';
       
    }
}
