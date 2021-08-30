class CollectibleManager extends SpriteManager{

	constructor(context){

		super(context);

		this.sprites = [
			new GoldCoin(400,100),
			new SilverCoin(550,400),
			new BronzeCoin(200,400),

		];

	}

}