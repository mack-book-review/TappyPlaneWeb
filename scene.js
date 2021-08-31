class Scene extends BaseScene{

	constructor(container_id,game_screen_id){
		super(container_id,game_screen_id);

		// this.healthDisplay = this.container.querySelector("#health-display");
		// this.scoreDisplay = this.container.querySelector("#score-display");
	
		this.score = 0;

		this.player = new Plane("Yellow",50,50);
		this.backgroundManager = new BackgroundManager(this.context);
		this.enemyManager = new EnemyManager(this.context);
		this.coinManager = new CollectibleManager(this.context);
		this.powerupManager = new PowerupManager(this.context);

		this.currentWord = WordGenerator.GET_RANDOM_WORD();
		this.currentWordArr = Array.from(this.currentWord);
		this.wordProgress = [];

		this.letterManager = new LetterManager(
			this.context,			//drawing context
			this.currentWord, 		//the target word that must be spelled
			5 						//total number of random letters
		);


		this.mouseDown = false;
		this.mouseDownX = 0;
		this.mouseDownY = 0;

		InputHelper.ConfigureCanvasMouseControls(this);

		this.hudManager = new HUDManager(this);
	}

	/** High-Level Game Loop Hooks **/

	update(timeDiff){
		super.update(timeDiff);
		this.hudManager.update(timeDiff);

		if(this.player.coinValue == 30){
			this.isWon = true;
		}

		if(this.player.isDead){
			this.isLost = true;
		}
	}

	updatePhysics(timeDiff){
		super.updatePhysics(timeDiff);

		this.performCollisionCheck();

		this.updateBackgroundPhysics(timeDiff);
		this.updateEnemyPhysics(timeDiff);
		this.updateCoinPhysics(timeDiff);
		this.updatePowerupPhysics(timeDiff);
		this.updateLetterPhysics(timeDiff);

		if(this.mouseDown){
			this.player.processClick(this.mouseDownX,this.mouseDownY);
		} else {
			this.player.zeroVelocity();
		}

		this.player.updatePhysics(timeDiff);

	}

	updateAnimations(timeDiff){

		super.updateAnimations(timeDiff);

		this.drawBackgrounds(timeDiff);
		this.drawCoins(timeDiff);
		this.drawEnemies(timeDiff);
		this.drawPowerups(timeDiff);
		this.drawLetter(timeDiff);
		this.drawPlayer(timeDiff);

	}



	/** DRAW FUNCTIONS - called in updateAnimations **/
	drawBackgrounds(timeDiff){
		this.backgroundManager.drawBackgrounds(timeDiff);
	}

	drawEnemies(timeDiff){
		this.enemyManager.drawSprites(timeDiff);
	}

	drawPowerups(timeDiff){
		this.powerupManager.drawSprites(timeDiff);
	}

	drawCoins(timeDiff){
		this.coinManager.drawSprites(timeDiff);
	}

	drawPlayer(timeDiff){
		
		this.player.drawImage(this.context,timeDiff);
	}

	drawLetter(timeDiff){
		
		this.letterManager.drawSprites(this.context,timeDiff);
	}

	/** updatePhysics functions **/

	updateBackgroundPhysics(timeDiff){
		this.backgroundManager.updatePhysics(timeDiff);
	}

	updateEnemyPhysics(timeDiff){
		this.enemyManager.updatePhysics(timeDiff);
	}

	updateCoinPhysics(timeDiff){
		this.coinManager.updatePhysics(timeDiff);
	}

	updatePowerupPhysics(timeDiff){
		this.powerupManager.updatePhysics(timeDiff);
	}

	updateLetterPhysics(timeDiff){
		this.letterManager.updatePhysics(timeDiff);
	}



	/** High-Level Method for Collision Checking - called in game hook **/
	performCollisionCheck(){
		var scene = this;

		this.enemyManager.iterateSprites(function(enemy){
			scene.checkCollision(scene.player,enemy);
		});

		this.coinManager.iterateSprites(function(coin){
			scene.checkCollision(scene.player,coin);
		});

		this.powerupManager.iterateSprites(function(powerup){
			scene.checkCollision(scene.player,powerup);
		});

		this.letterManager.iterateSprites(function(letter){
			scene.checkCollision(scene.player,letter);
		});

	
	}


	/** Helper functions for collision checking **/

	checkCollision(s1,s2){
		if(s1.hasOverlapWith(s2)){
			this.processCollision(s1,s2);
		}
	}


	processCollision(s1,s2){

		if(s1 instanceof Plane && s2 instanceof Enemy && !this.player.enemyContactTimer.timerOn){
			console.log("Collision with enemy!");

			this.player.takeDamage();
			this.player.enemyContactTimer.timerOn = true;
			
		} 

		
		if(s1 instanceof Plane && s2 instanceof Coin && !this.player.coinContactTimer.timerOne){
			console.log("Collision with coin!");
			this.player.coinValue += s2.value;
			console.log("Coin Value: " + this.player.coinValue);
			this.player.coinContactTimer.timerOn = true;
			
			this.coinManager.removeSprite(s2);
		}

		if(s1 instanceof Plane && s2 instanceof Powerup && !this.player.powerupContactTimer.timerOn){
			console.log("Collision with powerup!");
			this.player.isInvincible = true;
			this.player.powerupContactTimer.timerOn = true;
			this.powerupManager.removeSprite(s2);
		}

		if(!this.player.powerupContactTimer.timerOn){
			this.player.isInvincible = false;

		}

		if(s1 instanceof Plane && s2 instanceof Letter && !this.player.letterContactTimer.timerOn){
			console.log("Collision with letter!");

			var letter = Object.assign(Letter,s2);
			console.log("Player collided with letter: " + letter.letter);

			this.letterManager.removeSprite(s2);
			this.player.letterContactTimer.timerOn = true;

		}

		
	}
}