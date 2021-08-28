class Cloud extends Sprite{

	constructor(number, x, y){
		
		var imgPath =  "assets/BackgroundElements/cloud"+number+".png";

		super(imgPath,x);

		this.velocityX = -2;
		this.velocityY = 0;
	}



	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		if(this.x < -this.width*2){
			this.x = 800;
		}

		this.x += this.velocityX;
		this.y += this.velocityY;
	}

}