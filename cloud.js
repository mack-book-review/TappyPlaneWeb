class Cloud extends Sprite{

	constructor(number, x, y){
		
		var imgPath =  "assets/BackgroundElements/cloud"+number+".png";

		super(imgPath,x);

		this.velocityX = -1.5;
		this.velocityY = 0;
	}



	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		if(this.x < -this.width*2){
			this.x = 800;
			this.y = this.getRandomYPos()/2;
		}

		this.x += this.velocityX;
		this.y += this.velocityY;
	}

}