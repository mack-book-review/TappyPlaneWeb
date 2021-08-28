class CollectibleManager extends SpriteManager{

	constructor(context){

		super(context);

		this.sprites = [
			new GoldCoin(100,100),
			new SilverCoin(150,200),
			new BronzeCoin(200,400),

		];

	}

}