class Background extends Sprite{


	constructor(index = null){

		const backgrounds = [
			"colored_castle",
			"colored_desert",
			"colored_forest"
		];
		
		var randIndex = Math.floor(Math.random()*backgrounds.length);
		index = index == null ? randIndex:index;

		var imgPath =  "assets/Backgrounds/"+backgrounds[index]+".png";

		super(imgPath,0,0);

		this.x = 0;
		this.y = 0;
		this.width = 640;
		this.height = 480;
		this.velocityX = -1;
	}



	updatePhysics(timeDiff){

		super.updatePhysics(timeDiff);


		this.x += this.velocityX;
	}



}
