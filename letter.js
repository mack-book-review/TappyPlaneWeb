class Letter extends Sprite{


	constructor(letter,x,y){

		var imgPath =  "assets/Letters/letter" + letter + ".png";

		super(imgPath,x,y);

		this.letter = letter;
		this.velocityX = -Math.floor(Math.random()*10);
		this.velocityY = 0;

		
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