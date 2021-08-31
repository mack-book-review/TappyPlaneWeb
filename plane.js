class Plane extends Sprite{

	constructor(color,x,y){

		var imgPath =  "assets/Planes/plane" + color + "1.png";

		super(imgPath,x,y);

		var textures = Animation.GetTappyPlaneTextures(color);
		var flyingAnimation = new Animation(textures,true);
		flyingAnimation.frameInterval = 300;
		this.runAnimation(flyingAnimation);

		this.velocityX = 0;
		this.velocityY = 0;
		this.health = 3;
		this.coinValue = 0;
		this.isInvincible = false;

		this.enemyContactTimer = new Timer();
		this.coinContactTimer = new Timer();
		this.enemyContactTimer.timeInterval = 2000;
		this.powerupContactTimer = new Timer();
		this.powerupContactTimer.timeInterval = 2000;

		
	}

	takeDamage(){

			if(this.isInvincible){
				console.log("No damage. Invincible!");
				return;
			}

			if(this.isDead){
				return;
			}

			if(this.health > 1){
				this.health -= 1;
			} else {
				this.health = 0;
				var textures = Animation.GetExplosionTextures();
				var explosionAnimation = new Animation(textures);
				explosionAnimation.frameInterval = 100;
		
				var currentSprite = this;
				this.runAnimation(explosionAnimation);
			}
		}


	processClick(mouseX,mouseY){

		if(mouseY < this.y){
			this.velocityY = -5;
		}

		if(mouseY > this.y + this.height){
			this.velocityY = 5;

		}
	}

	zeroVelocity(){
		this.velocityY = 0;
		this.velocityX = 0;
	}

	drawImage(context,timeDiff){
			if(this.isDead){
				return;
			}
			

			if(this.currentAnimation == null){


				context.drawImage(
				this.img,
				0,0,
				this.img.naturalWidth,this.img.naturalHeight, 
				this.x,this.y,
				this.width,this.height);

			} else {

				//run current animation
				var currentAnimation = this.currentAnimation;
				
				currentAnimation.incrementTimeCounter(timeDiff);

				if(currentAnimation.timeCounter > currentAnimation.frameInterval){
						
					
						currentAnimation.resetTimeCounter();
						currentAnimation.incrementFrameNumber();
				}

				if(currentAnimation.getCurrentFrame() < currentAnimation.getTextureCount()){
					

					var currentTexture = currentAnimation.getCurrentTexture();
							
					context.drawImage(
								currentTexture,
								0,0,
								currentTexture.naturalWidth,
								currentTexture.naturalHeight, 
								this.x,this.y,
								this.width,this.height);
				
				} else if(currentAnimation.autoLoop) {
					currentAnimation.resetCurrentFrame();
						
				} else {
					currentAnimation.animationFinishCallback();
					this.currentAnimation = null;
					this.isDead = true;
			
				}



				
			}
			
		}

	
	

	updatePhysics(timeDiff){

		if(this.isDead){
			return;
		}

		super.updatePhysics(timeDiff);

		this.enemyContactTimer.runTimer(timeDiff);
		this.coinContactTimer.runTimer(timeDiff);
		this.powerupContactTimer.runTimer(timeDiff);

		// if(this.hasEnemyContact){
		// 	console.log("Player is in contact...");

		// 	this.enemyContactTimer += timeDiff;
		// 	console.log("Contact time: " + this.contactTimer);

		// 	if(this.enemyContactTimer > this.enemyContactInterval){
		// 		console.log("Player no longer in contact");
		// 		this.hasEnemyContact = false;
		// 		this.enemyContactTimer = 0;
		// 	}
		// }

	
			this.x += this.velocityX;
			this.y += this.velocityY;
		

	}

}