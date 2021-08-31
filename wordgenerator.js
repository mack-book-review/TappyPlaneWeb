class WordGenerator{

	static GET_WORD_LIST(){
		return [
			"apple",
			"orange",
			"banana",
			"cherry",
			"grape",
			"watermelon",
			"lemon",
			"mango"
		];
	}

	static GET_RANDOM_WORD(){
		var words = WordGenerator.GET_WORD_LIST();
		var index = Math.floor(Math.random()*words.length);
		return words[index].toUpperCase();
	}
}