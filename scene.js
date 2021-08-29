class Scene extends BaseScene{

	constructor(container_id,game_screen_id){
		super(container_id,game_screen_id);

		this.healthDisplay = this.container.querySelector("#health-display");
		this.scoreDisplay = this.container.querySelector("#score-display");
		
		this.score = 0;

		this.player = new Plane("Yellow",50,50);
		this.backgroundManager = new BackgroundManager(this.context);
		this.enemyManager = new EnemyManager(this.context);
		this.coinManager = new CollectibleManager(this.context);
	

		this.barriers = [];

		this.mouseDown = false;
		this.mouseDownX = 0;
		this.mouseDownY = 0;

		InputHelper.ConfigureCanvasMouseControls(this);
	}

	updatePlayerHealth(timeDiff){
		this.healthDisplay.removeChild(this.healthDisplay.childNodes[0]);
		this.healthDisplay.appendChild(document.createTextNode("Health: " + this.player.health));

	}
	updateScore(timeDiff){
		this.scoreDisplay.removeChild(this.scoreDisplay.childNodes[0]);

		this.scoreDisplay.appendChild(document.createTextNode(this.score));
	}

	update(timeDiff){
		super.update(timeDiff);
		this.updatePlayerHealth(timeDiff);
		this.updateScore(timeDiff);

	}

	/** DRAW FUNCTIONS - CALLED IN updateAnimations **/
	drawBackgrounds(timeDiff){
		this.backgroundManager.drawBackgrounds(timeDiff);
	}

	drawEnemies(timeDiff){
		this.enemyManager.drawSprites(timeDiff);
	}

	drawBarriers(timeDiff){

	}

	drawCoins(timeDiff){
		this.coinManager.drawSprites(timeDiff);
	}

	drawPlayer(timeDiff){
		this.player.drawImage(this.context,timeDiff);

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



	updatePhysics(timeDiff){
		super.updatePhysics(timeDiff);

		this.performCollisionCheck();

		this.updateBackgroundPhysics(timeDiff);
		this.updateEnemyPhysics(timeDiff);
		this.updateCoinPhysics(timeDiff);

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
		this.drawBarriers(timeDiff);
		this.drawPlayer(timeDiff);
;	}

	configureCanvasEventListeners(){
		super.configureCanvasEventListeners();

			this.canvas.addEventListener("hudupdate", function(event){
				
			

			});

			this.canvas.addEventListener("playerupdate", function(event){
				
				
			});
	}



	performCollisionCheck(){
		var scene = this;

		this.enemyManager.iterateSprites(function(enemy){
			scene.checkCollision(scene.player,enemy);
		});

		this.coinManager.iterateSprites(function(coin){
			scene.checkCollision(scene.player,coin);
		});

		// this.iterateCollectibles(function(collectible){
		// 	scene.checkCollision(scene.player,collectible);
		// });

		// this.iterateBarrieres(function(barrier){
		// 	scene.checkCollision(scene.player,barrier);
		// });
	
	}



	checkCollision(s1,s2){
		if(s1.hasOverlapWith(s2)){
			this.processCollision(s1,s2);
		}
	}

	processCollision(s1,s2){

		if(s1 instanceof Plane && s2 instanceof Enemy && !this.player.enemyContactTimer.timerOn){
			console.log("Collision with enemy!");
			this.player.health -= 1;
			this.player.enemyContactTimer.timerOn = true;
			
		} 

		
		if(s1 instanceof Plane && s2 instanceof Coin && !this.player.coinContactTimer.timerOne){
			console.log("Collision with coin!");
			this.player.coinValue += s2.value;
			console.log("Coin Value: " + this.player.coinValue);
			this.player.coinContactTimer.timerOn = true;
			//remove the coin
				//assign each coin a unique identifier upon instantion
				//use filter function to identify coin in array and get index
				//use the coinManager to remove the coin
			this.coinManager.removeSprite(s2);
		}

		//process collision with collectible
		//********player's health increases, temporary invulnerability
	

		//process collision with barriers
		//*********player pushed back, zero x-velocity, health goes down
	}
}