class Carrot extends Powerup{

	
	constructor(x,y, isGold = false){
		
		var imgPath =  "assets/Carrot/carrot.png";

		if(isGold){
			imgPath =  "assets/Carrot/carrot_gold.png";
		}

		super(imgPath,x,y);

		

		this.velocityX = isGold ? -4 : -2;
	
	}



	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		if(this.x < -this.width-50){
			this.x = 700;
			this.y = this.getRandomYPos();
		}

		this.x += this.velocityX;
	}


	
}