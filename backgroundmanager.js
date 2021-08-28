class BackgroundManager{

	constructor(context){
		this.context = context;

		this.skyElements = [
			new Cloud(1,100,0),
			new Cloud(2,200,0),
			new Cloud(3,150,0)
		];

		this.groundElements = [
			new Tree(2,200),
			new Tree(12,210),
			new Tree(20,100),
			new Tree(21,140),
			new Tree(16,310),
		];
		

		this.backgrounds = [
			new Background(0),
			new Background(0),
			new Background(0),
		];

		this.initializeBackgroundPositions();
	}

	initializeBackgroundPositions(){
		for(var i = 0; i < this.backgrounds.length - 1; i++){
			this.backgrounds[i+1].x = this.backgrounds[i].width*(i+1);
		}
	}

	drawSkyElements(timeDiff){
		var manager = this;
		this.iterateSkyElements(function(skyElement){
			skyElement.drawImage(manager.context,timeDiff);
		});
	}

	drawGroundElements(timeDiff){
		var manager = this;
		this.iterateGroundElements(function(groundelement){
			groundelement.drawImage(manager.context,timeDiff);
		});
	}

	updateSkyElementPhysics(timeDiff){
		this.iterateSkyElements(function(skyElement){
			skyElement.updatePhysics(timeDiff);


		});	
	}

	updateGroundElementPhysics(timeDiff){
		var scene = this;
		this.iterateGroundElements(function(groundelement){
			groundelement.updatePhysics(timeDiff);


		});	
	}


	updatePhysics(timeDiff){
		console.log("BG Manager: updating physics of bgs");
		//When the first element in the backgrounds array goes too far
		//off-screen, push it to the end of the array
		if(this.backgrounds[0].x < -this.backgrounds[0].width){
			var bg = this.backgrounds.shift();
			this.backgrounds.push(bg);
		}

		
		this.backgrounds[0].updatePhysics(timeDiff);
		this.updateGroundElementPhysics(timeDiff);
		this.updateSkyElementPhysics(timeDiff);

		for(var i = 0; i < this.backgrounds.length - 1; i++){
			this.backgrounds[i+1].x = this.backgrounds[i].x + this.backgrounds[i].width*(i+1);
		}
	}

	drawBackgrounds(timeDiff){
		var manager = this;

		this.backgrounds.forEach(function(bg){
			bg.drawImage(manager.context, timeDiff);
		});

		this.drawGroundElements(timeDiff);
		this.drawSkyElements(timeDiff);

	}

	iterateSkyElements(callback){
		this.skyElements.forEach(function(skyElement){
			callback(skyElement)
		});
	}

	iterateGroundElements(callback){
		this.groundElements.forEach(function(groundelement){
			callback(groundelement)
		});
	}
}