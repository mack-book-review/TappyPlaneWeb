class BaseScene{

	constructor(game_screen_id){
		this.canvas = document.getElementById(game_screen_id);
		this.context = this.canvas.getContext('2d');
		this.x = 0;
		this.y = 0;

		//Initialize game states
		this.isPaused = false;
		this.isLost = false;
		this.isWon = false;
;	}

	configureCanvasEventListeners(){

			var scene = this;

			this.canvas.addEventListener("gameresumed", function(){
				
				scene.isPaused = false;

		
			});

			this.canvas.addEventListener("gamepaused", function(){
				
				scene.isPaused = true;

		
			});

			this.canvas.addEventListener("gamewon", function(){
				
				scene.isWon = true;

		
			});


			this.container.addEventListener("gamelost", 
				function(){
					scene.isLost = true;
	
			});


			this.container.addEventListener("hudupdate", function(event){
				
			

			});

			this.container.addEventListener("playerupdate", function(event){
				
				
			});

		}

	

	

	clearCanvas(){
		this.context.clearRect(0,0,640,480);
	}

	drawText(someText){
		this.context.font = '48px Caesar Dressing';
  		this.context.fillText(someText, this.x, this.y);
	}

	updateAnimations(){
		console.log("Updating animations...");
		this.drawText("Hello world!")
;	}

	updatePhysics(){
		console.log("Updating physics...");
		this.x += 0.1;
		this.y += 0.1;
	}

	update(){
		console.log("Updating other...");
	
	}

	hasWonGame(){
			return this.isWon;
			
	}

	hasLostGame(){
		return this.isLost;
			
	}


	checkForGameWinOrLoss(){

		if(this.hasLostGame()){
			
			this.generateGameLossEvent();
			
		}

		if(this.hasWonGame()){
			
			this.generateGameWinEvent();

		}
	}

	/** Trigger Custom Events for Game Win or Game Loss **/
	generateGameWinEvent(){
		const event = new CustomEvent('gamewon',{bubbles:true});
		this.canvasElement.dispatchEvent(event);
	}

	generateGameLossEvent(){
		const event = new CustomEvent('gamelost',{bubbles:true});
		this.canvasElement.dispatchEvent(event);
	}

}