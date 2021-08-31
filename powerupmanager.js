class PowerupManager extends SpriteManager{

	constructor(context){

		super(context);

		this.sprites = [
			new Carrot(100,200,true),
			new Carrot(150,300,true),
			new Carrot(200,400,false)

		];

	}
}