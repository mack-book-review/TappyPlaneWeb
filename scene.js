class Scene extends BaseScene{

	constructor(game_screen_id){
		super(game_screen_id);

		this.player = new Plane("Yellow",50,50);

		this.enemies = [];
		this.barriers = [];
		this.collectibles = [];
	}


	drawEnemies(timeDiff){

	}

	drawBarriers(timeDiff){

	}

	drawCollectibles(timeDiff){

	}

	drawPlayer(timeDiff){
		this.player.drawImage(this.context,timeDiff);

	}

	updateAnimations(timeDiff){
		console.log("Scene: updating animations...");

		super.updateAnimations(timeDiff);

		this.drawCollectibles(timeDiff);
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

	iterateEnemies(callback){
		this.enemies.forEach(function(enemy){
			callback(enemy)
		});
	}

	performCollisionCheck(){
		var scene = this;

		// this.iterateEnemies(function(enemy){
		// 	scene.checkCollision(scene.player,enemy);
		// });

		// this.iterateCollectibles(function(collectible){
		// 	scene.checkCollision(scene.player,collectible);
		// });

		// this.iterateBarrieres(function(barrier){
		// 	scene.checkCollision(scene.player,barrier);
		// });
	
	}

	processCollision(s1,s2){
		super.processCollision(s1,s2);

		//process collision with enemy
		//********player's health goes down

		//process collision with collectible
		//********player's health increases, temporary invulnerability
	

		//process collision with barriers
		//*********player pushed back, zero x-velocity, health goes down
	}
}