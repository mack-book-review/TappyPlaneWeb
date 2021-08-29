class SpriteManager{

	constructor(context){
		this.context = context;
		this.sprites = [];
	}


	iterateSprites(callback){
		this.sprites.forEach(callback);
	}

	addSprites(sprites){
		sprites.forEach(function(s){
			this.sprites.push(s);
		});
	}

	updatePhysics(timeDiff){
		this.sprites.forEach(function(s){
			s.updatePhysics(timeDiff);

		});
	}

	drawSprites(timeDiff){
		var manager = this;
		this.sprites.forEach(function(s){
			s.drawImage(manager.context,timeDiff);
		});
	}

	removeSprite(identifier){
		var targetIndex = null;
		
		this.sprites.forEach(function(val,index){
			if(val.identifier == identifier){
				targetIndex = index;
			}
		});

		this.sprites.splice(targetIndex,1);
	}
}