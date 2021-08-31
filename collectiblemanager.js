class CollectibleManager extends SpriteManager{

	constructor(context){

		super(context);

		this.sprites = [
			new GoldCoin(700,400),
			new GoldCoin(800,100),

			new SilverCoin(850,400),
			new SilverCoin(650,400),
			new SilverCoin(750,300),

			new BronzeCoin(200,400),
			new BronzeCoin(800,330),
			new BronzeCoin(900,410),

		];

	}

}