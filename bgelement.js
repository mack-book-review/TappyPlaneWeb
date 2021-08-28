class Tree extends Sprite{

	constructor(name, x,y){

		var imgPath =  "assets/BackgroundElements/"++".png";

		super(imgPath,x,y);

	
		this.velocityX = -5;
		this.velocityY = 0;
	}



	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		if(this.x < 0){
			this.x = 700;
		}

		this.x += this.velocityX;
		this.y += this.velocityY;
	}

}