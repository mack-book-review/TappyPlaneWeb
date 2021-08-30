class CollectibleManager extends SpriteManager{

	constructor(context){

		super(context);

		this.sprites = [
			new GoldCoin(400,300),
			new SilverCoin(150,400),
			new BronzeCoin(200,400),

		];

	}

}