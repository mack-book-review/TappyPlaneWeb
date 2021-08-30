class BaseScene{

	constructor(container_id, game_screen_id){
		this.container = document.getElementById(container_id);
		this.canvas = document.getElementById(game_screen_id);
		this.context = this.canvas.getContext('2d');

		//Initialize game states
		this.gameState = "intro";

		//Start game in intro mode
		this.showIntroScreen();
		this.configureCanvasEventListeners();
;	}

	showIntroScreen(){
		this.context.fillStyle = "rgb(50,200,250)";
		this.context.fillRect(0,0,640,480);

		var img = document.createElement("img");
		img.src = "assets/HUD/text_ready.png";
		img.style.position = "absolute";
		img.style.dislpay = "block";
		img.style.left = "140px";
		img.style.top = "150px";

		img.addEventListener("mouseover",function(){
			
			img.style.transform = "scale(1.5)";
			img.style.transition = "transform 3s";
		});

		img.addEventListener("mouseout",function(){
			
			img.style.transform = "scale(1)";
			img.style.transition = "transform 3s";
		});

		this.container.appendChild(img);

		var basescene = this;
		
		var introHandler = function(){
			basescene.container.removeChild(img);
			basescene.gameState = "playing";
			basescene.container.removeEventListener("click", introHandler);

		};

		this.container.addEventListener("click",introHandler);
	}

	configureCanvasEventListeners(){

			var scene = this;

			this.canvas.addEventListener("gameresumed", function(){
				
				
		
			});

			this.canvas.addEventListener("gamepaused", function(){
				

		
			});

			var scene = this;
			this.canvas.addEventListener("gamewon", function(){
				console.log("You won!");
				scene.gameState = "gamewon";
				var message = document.createElement("div");
				message.innerHTML = "<p>Level Completed!</p>";
				scene.container.appendChild(message);

		
			});


			this.canvas.addEventListener("gamelost", 
				function(){
				console.log("You lost!");
				scene.gameState = "gamelost";
				var message = document.createElement("div");
				message.innerHTML = "<p>Level Completed!</p>";
				scene.container.appendChild(message);
				
	
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
		if(this.isLost || this.isWon){
			return;
		}

	}

	updatePhysics(timeDiff){
		if(this.isLost || this.isWon){
			return;
		}
		
	}

	update(timeDiff){
		if(this.isLost || this.isWon){
			return;
		}
	
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
		this.canvas.dispatchEvent(event);
	}

	generateGameLossEvent(){
		const event = new CustomEvent('gamelost',{bubbles:true});
		this.canvas.dispatchEvent(event);
	}

}