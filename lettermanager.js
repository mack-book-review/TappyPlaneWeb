class LetterManager extends SpriteManager{


	constructor(context,currentWord,totalRandomLetters){

		super(context);

		/** Initialize sprites array**/
		this.sprites = [];

		/**Populate the sprites array with the letters that
		 * the player needs to spell the target word 
		**/
		var sprites = this.sprites;
		Array.from(currentWord).forEach(letter => sprites.push(new Letter(letter)));

		/**Populate the sprites array with some random letters
		*that the player doesn't need in order to make the 
		*game more challenging 
		**/
		for(var i = 0; i < totalRandomLetters; i++){
			var randCode = Math.floor(Math.random()*(96-67)) + 67;
			var letter = String.fromCharCode(randCode);
			this.sprites.push(new Letter(letter));
		}
	
	}


	configureSpritesForWord(word){

	}

}