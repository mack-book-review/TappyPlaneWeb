class Plane extends Sprite{

	constructor(color,x,y){

		var imgPath =  "assets/Planes/plane" + color + "1.png";

		super(imgPath,x,y);

		var textures = Animation.GetTappyPlaneTextures(color);
		var flyingAnimation = new Animation(textures,true);
		flyingAnimation.frameInterval = 300;
		this.runAnimation(flyingAnimation);

		this.velocityX = 0;
		this.velocityY = 0;
		this.health = 10;
		this.coinValue = 0;

		this.enemyContactTimer = new Timer();
		this.coinContactTimer = new Timer();
		this.enemyContactTimer.timeInterval = 2000;
		// this.hasEnemyContact = false;
		// this.enemyContactInterval = 500;
		// this.enemyContactTimer = 0;
	}


	processClick(mouseX,mouseY){

		if(mouseY < this.y){
			this.velocityY = -5;
		}

		if(mouseY > this.y + this.height){
			this.velocityY = 5;

		}
	}

	zeroVelocity(){
		this.velocityY = 0;
		this.velocityX = 0;
	}


	
	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		this.enemyContactTimer.runTimer(timeDiff);
		this.coinContactTimer.runTimer(timeDiff);

		// if(this.hasEnemyContact){
		// 	console.log("Player is in contact...");

		// 	this.enemyContactTimer += timeDiff;
		// 	console.log("Contact time: " + this.contactTimer);

		// 	if(this.enemyContactTimer > this.enemyContactInterval){
		// 		console.log("Player no longer in contact");
		// 		this.hasEnemyContact = false;
		// 		this.enemyContactTimer = 0;
		// 	}
		// }

		this.x += this.velocityX;
		this.y += this.velocityY;
	}

}