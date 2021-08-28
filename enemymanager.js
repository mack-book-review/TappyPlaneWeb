class EnemyManager extends SpriteManager{

	constructor(context){

		super(context);

		this.sprites = [
			new Bee(500,50),
			new Bee(400,200),
			new Bat(300,400),
			new Bat(100,100),
			new Bomb(350),
			new Bomb(200),
			new Bomb(500)
		];

	}

	



	

}