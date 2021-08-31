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




	}

	addPauseButton(){
		var pause = document.createElement("a");
		pause.style.position = "fixed";
		pause.style.cursor = "pointer";

		pause.style.dislpay = "block";
		pause.style.width = "200px";
		pause.style.height = "40px";
		pause.style.right = "20px";
		pause.style.top = "10px";
		pause.style.paddingTop = "0px";
		pause.style.textAlign = "center";
		pause.style.color = "blue";
		pause.style.fontSize = "2em";
		pause.style.fontFamily = "Bangers";
		pause.style.opacity = "0.7";
		pause.style.textShadow = '2px 2px 2px yellow';


		var txt = document.createTextNode("Pause Game");
		pause.appendChild(txt);

		var scene = this;
		pause.addEventListener("click", function(){
			if(scene.gameState != "playing" && scene.gameState != "paused"){
				pause.style.display = "hidden";
				return;
			}

			var txtNode = pause.childNodes[0];
			pause.removeChild(txtNode);

			if(scene.gameState == "playing"){
				scene.gameState = "paused";
				var txt = document.createTextNode("Resume Game");
				pause.appendChild(txt);

			} else {
				scene.gameState = "playing";
				var txt = document.createTextNode("Pause Game");
				pause.appendChild(txt);
			}
			
		});

		this.container.appendChild(pause);

	}


	showGameWonScreen(){
		this.context.fillStyle = "rgb(50,200,250)";
		this.context.fillRect(0,0,640,480);

		var gameWon = document.createElement("a");
		gameWon.appendChild(document.createTextNode("You Won!"));

		gameWon.style.position = "absolute";
		gameWon.style.display = "block";
		gameWon.style.left = "140px";
		gameWon.style.top = "150px";
		gameWon.style.cursor = "pointer";
		gameWon.style.fontFamily = "Bangers";
		gameWon.style.fontSize = "5em";
		gameWon.style.color = "white";
		gameWon.style.width = "350px";


		gameWon.addEventListener("mouseover",function(){
			
			gameWon.style.transform = "scale(1.5)";
			gameWon.style.transition = "transform 3s";
		});

		gameWon.addEventListener("mouseout",function(){
			
			gameWon.style.transform = "scale(1)";
			gameWon.style.transition = "transform 3s";
		});

		this.container.appendChild(gameWon);

		var playAgain = document.createElement("a");
		playAgain.appendChild(document.createTextNode("Contine to Next Level"));
		playAgain.style.position = "absolute";
		playAgain.style.display = "block";
		playAgain.style.cursor = "pointer";
		playAgain.style.fontFamily = "Bangers";
		playAgain.style.fontSize = "3em";
		playAgain.style.color = "white";
		playAgain.style.width = "350px";
		playAgain.style.left = "140px";
		playAgain.style.top = "350px";

		playAgain.addEventListener("mouseover",function(){
			
			playAgain.style.color = "blue";
			playAgain.style.transition = "all 2s";
		});


		this.container.appendChild(playAgain);


		var basescene = this;
		
		var gameoverHandler = function(){
			basescene.container.removeChild(gameWon);
			basescene.container.removeEventListener("click", gameoverHandler);
			window.location = window.location.href;
		};
		
		playAgain.addEventListener("click",gameoverHandler);
		this.container.addEventListener("click",gameoverHandler);
	}


	showGameLostScreen(){
		this.context.fillStyle = "rgb(50,200,250)";
		this.context.fillRect(0,0,640,480);

		var img = document.createElement("img");
		img.src = "assets/HUD/text_gameover.png";
		img.style.position = "absolute";
		img.style.display = "block";
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

		var playAgain = document.createElement("a");
		playAgain.appendChild(document.createTextNode("Click to Play Again"));
		playAgain.style.position = "absolute";
		playAgain.style.display = "block";
		playAgain.style.cursor = "pointer";
		playAgain.style.fontFamily = "Bangers";
		playAgain.style.fontSize = "3em";
		playAgain.style.color = "white";
		playAgain.style.width = "350px";
		playAgain.style.left = "140px";
		playAgain.style.top = "350px";

		playAgain.addEventListener("mouseover",function(){
			
			playAgain.style.color = "blue";
			playAgain.style.transition = "all 2s";
		});


		this.container.appendChild(playAgain);


		var basescene = this;
		
		var gameoverHandler = function(){
			basescene.container.removeChild(img);
			basescene.container.removeEventListener("click", gameoverHandler);
			window.location = window.location.href;
		};
		playAgain.addEventListener("click",gameoverHandler);
		this.container.addEventListener("click",gameoverHandler);
	}

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
			basescene.addPauseButton();
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
				scene.showGameWonScreen();

		
			});


			this.canvas.addEventListener("gamelost", 
				function(){
				console.log("You lost!");
				scene.gameState = "gamelost";
				scene.showGameLostScreen();
				
	
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