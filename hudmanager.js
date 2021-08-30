class HUDManager{

	constructor(scene){
		this.scene = scene;
		this.createHUD();
	}


	createHUD(){
		this.hud = document.createElement("div");
		this.configureHUD(this.hud);

		this.coinDisplay = this.createCoinDisplay();
		this.healthDisplay = this.createHealthDisplay();

		this.coinDisplay.appendChild(document.createTextNode("Points: " + this.scene.player.coinValue));
		this.healthDisplay.appendChild(document.createTextNode("Health: " + this.scene.player.health));

		this.hud.appendChild(this.healthDisplay);
		this.hud.appendChild(this.coinDisplay);
		this.scene.container.appendChild(this.hud);

	}

	createHealthDisplay(){
		var healthDisplay = document.createElement("span");
		healthDisplay.style.float = "right";
		healthDisplay.style.marginRight = "100px";
		return healthDisplay;
	}

	createCoinDisplay(){
		var coinDisplay =document.createElement("span");
		coinDisplay.style.float = "left";
		coinDisplay.style.marginLeft = "30px";
		return coinDisplay;

	}

	configureHUD(hud){
		hud.style.display = "inline-block";
		hud.style.position = "absolute";
		hud.style.top = "480px";
		hud.style.left = "0px";
		hud.style.width = "645px";
		hud.style.margin = "0px";
		hud.style.paddingTop = "30px";
		hud.style.fontSize = '2em';
		hud.style.color = 'white';

		hud.style.height = "50px";
		hud.style.backgroundColor = "dodgerblue";
		hud.style.fontFamily = 'Bangers';


	}

	update(timeDiff){
		this.updateCoinDisplay(timeDiff);
		this.updateHealthDisplay(timeDiff);
	}

	updateCoinDisplay(timeDiff){
		var textNode = this.coinDisplay.childNodes[0];
		this.coinDisplay.removeChild(textNode);
		this.coinDisplay.appendChild(document.createTextNode("Points: " + this.scene.player.coinValue));
	}

	updateHealthDisplay(timeDiff){

		var textNode = this.healthDisplay.childNodes[0];
		this.healthDisplay.removeChild(textNode);
		this.healthDisplay.appendChild(document.createTextNode("Health: " + this.scene.player.health));

	}
}