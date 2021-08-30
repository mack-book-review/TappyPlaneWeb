class Bomb extends Enemy{

	constructor(x){
		
		var imgPath =  "assets/Bomb/bomb.png";

		super(imgPath,x);

		this.y = -this.height - 50;
		this.velocityX = Math.floor(Math.random()*10)-5;
		this.velocityY = 5;
	}



	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		if(this.y > this.height + 480){
			this.y = -this.height - 50;
			this.x = 340 + (this.getRandomXPos()/2);
			this.velocityX = Math.floor(Math.random()*20)-10;
		}

		this.y += this.velocityY;
		this.x += this.velocityX;
	}

}