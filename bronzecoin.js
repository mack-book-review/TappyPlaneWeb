
class BronzeCoin extends Coin{

	constructor(x,y){
		

		super("bronze",x,y);

		var turningAnimation = Animation.GetCoinTurningAnimation("bronze");
		this.runAnimation(turningAnimation);
	
		this.velocityX = -3;
		this.value = 1;

	}

	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);

		if(this.x < -this.width){
			this.y = this.getRandomYPos();
		}

		this.y += this.velocityY;
	}


}