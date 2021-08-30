class Bat extends Enemy{

	constructor(x,y){

		var imgPath =  "assets/Bee/bee.png";

		super(imgPath,x,y);

		var textures = Animation.GetBatTextures();
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
			this.y = this.getRandomYPos();
		}

		this.x += this.velocityX;
		this.y += this.velocityY;
	}

}