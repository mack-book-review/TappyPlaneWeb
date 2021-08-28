class GoldCoin extends Coin{

	constructor(x,y){
		
		super("gold",x,y);

		

		var turningAnimation = Animation.GetCoinTurningAnimation("gold");
		this.runAnimation(turningAnimation);
	
		this.velocityX = -10;
		this.value = 5;
	}


}
