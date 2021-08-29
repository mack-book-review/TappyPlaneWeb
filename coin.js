class Coin extends Sprite{

	static CoinIdentifier = 0;

	constructor(color,x,y){
		
		var imgPath =  "assets/Coins/" + color +"_1.png";

		super(imgPath,x,y);

		

		this.velocityX = -10;
		this.value = 1;
		this.identifier = Coin.CoinIdentifier;
		Coin.CoinIdentifier += 1;
	}



	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		if(this.x < -this.width-50){
			this.x = 700;
		}

		this.x += this.velocityX;
	}

}

