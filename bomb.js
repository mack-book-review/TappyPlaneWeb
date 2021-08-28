class Bomb extends Enemy{

	constructor(x){
		
		var imgPath =  "assets/Bomb/bomb.png";

		super(imgPath,x);

		this.y = -this.height - 50;
		this.velocityX = 0;
		this.velocityY = 5;
	}



	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		if(this.y > this.height + 480){
			this.y = -this.height - 50;
		}

		this.y += this.velocityY;
	}

}