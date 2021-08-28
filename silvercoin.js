
class SilverCoin extends Coin{

	constructor(x,y){
		

		super("silver",x,y);

		var turningAnimation = Animation.GetCoinTurningAnimation("silver");
		this.runAnimation(turningAnimation);
	
		this.velocityX = -6;
		this.value = 3;

	}


}
