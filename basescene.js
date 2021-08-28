class BaseScene{

	constructor(game_screen_id){
		this.canvas = document.getElementById(game_screen_id);
		this.context = this.canvas.getContext('2d');

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


			this.canvas.addEventListener("gamelost", 
				function(){
					scene.isLost = true;
	
			});


		

		}

	

	

	clearCanvas(){
		this.context.clearRect(0,0,640,480);
	}

	drawText(someText,x,y){
		this.context.font = '48px Caesar Dressing';
  		this.context.fillText(someText,x,y);
	}

	updateAnimations(timeDiff){
		this.drawText("Hello world!")
;	}

	updatePhysics(timeDiff){
		
	}

	update(timeDiff){
	
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

	processCollision(s1,s2){

	}

	checkCollision(s1,s2){
		if(s1.overlapsWith(s2)){
			processCollision(s1,s2);
		}
	}

	/** Trigger Custom Events for Game Win or Game Loss **/
	generatePlayerHitEvent(){
		const event = new CustomEvent('player-hit',{bubbles:true});
		this.canvasElement.dispatchEvent(event);
	}

	generateCollectibleEvent(){
		const event = new CustomEvent('collectible-gained',{bubbles:true});
		this.canvasElement.dispatchEvent(event);
	}

	generateGameWinEvent(){
		const event = new CustomEvent('gamewon',{bubbles:true});
		this.canvasElement.dispatchEvent(event);
	}

	generateGameLossEvent(){
		const event = new CustomEvent('gamelost',{bubbles:true});
		this.canvasElement.dispatchEvent(event);
	}

}