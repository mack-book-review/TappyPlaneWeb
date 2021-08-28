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

		this.x += this.velocityX;
		this.y += this.velocityY;
	}

}