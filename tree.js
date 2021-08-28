class Tree extends Sprite{

	constructor(number, x){
		if(number > 0 && number < 10){
			number = "0" + number;
		}
		var imgPath =  "assets/BackgroundElements/tree"+number+".png";

		super(imgPath,x);

		this.y = 480 - this.height;
		this.velocityX = -1;
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