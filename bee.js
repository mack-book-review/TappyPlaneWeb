class Bee extends Enemy{

	constructor(x,y){

		var imgPath =  "assets/Bee/bee.png";

		super(imgPath,x,y);

		var textures = Animation.GetBeeTextures();
		var flyingAnimation = new Animation(textures,true);
		flyingAnimation.frameInterval = 300;
		this.runAnimation(flyingAnimation);

		this.velocityX = -5;
		this.velocityY = 0;
	}



	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		if(this.x < -this.width){
			this.x = 700;
			var randY = this.getRandomYPos();
			console.log("Rand Y: " + randY);
			this.y = randY;
		}

		this.x += this.velocityX;
		this.y += this.velocityY;
	}

}