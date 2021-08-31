class LetterManager extends SpriteManager{

	//could use different approach - ASCII conversion instead
	//of an array of letters
	static Letters = ["A","B"];

	constructor(context){

		super(context);

		this.sprites = [
			new Letter("A"),
			new Letter("B")
		];

	}


	configureSpritesForWord(word){

	}

}