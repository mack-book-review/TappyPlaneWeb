class Plane extends Sprite{

	constructor(color,x,y){

		var imgPath =  "assets/Planes/plane" + color + "1.png";

		super(imgPath,x,y);

		var textures = Animation.GetTappyPlaneTextures(color);
		var flyingAnimation = new Animation(textures,true);
		flyingAnimation.frameInterval = 300;
		this.runAnimation(flyingAnimation);
	}

}