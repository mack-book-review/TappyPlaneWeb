class Sprite{

		constructor(imgSrc = null,x = null,
			y = null,
			width = null,
			height = null){

			//Configure image used for sprite
			this.img =  new Image();
			this.img.src = imgSrc;

			//Configure current animation
			this.currentAnimation = null;

			/**Configure position and size
			* Use GAME_SETTINGS singleton to get default start
			* position for the player
			* */
			var pos = [10,300];
			this.x = x ?? pos[0];
			this.y = y ?? pos[1];
			this.width = width ?? this.img.naturalWidth;
			this.height = height ?? this.img.naturalHeight;
			
			//Configure health and dead/alive status
			this.health = 1;
			this.isDead = false;

			
			;

		}

	

		
		hasOverlapWith(otherSprite,adjustmentFactor = 1){
			return !(
				this.x > (otherSprite.x+otherSprite.width*adjustmentFactor) || 
					(this.x + this.width*adjustmentFactor < otherSprite.x) ||
					(this.y > (otherSprite.y + otherSprite.height*adjustmentFactor)) ||
					((this.y+this.height*adjustmentFactor) < otherSprite.y)
					);
		}

		


		get boundingRectangle(){
			return [this.x,this.y,this.width,this.height];
		}

		/** Getters for Position and Size **/

		getX(){
			return this.x;
		}

		getY(){
			return this.y;
		}

		getWidth(){
			return this.width;
		}

		getHeight(){
			return this.height;
		}

		setX(xPos){
			this.x = xPos;
		}

		setY(yPos){
			this.y = yPos;
		}

		setWidth(newWidth){
			this.width = newWidth;
		}

		setHeight(newHeight){
			this.height = newHeight;
		}

		

		takeDamage(){

			if(this.isDead){
				return;
			}

			if(this.health > 0){
				this.health -= 1;
			} else {

				var textures = Animation.GetExplosionTextures();
				var explosionAnimation = new Animation(textures);
				var currentSprite = this;
				this.runAnimation(explosionAnimation,function(){
					console.log("Finished running animation");
				});
			}
		}


		
		checkPosition(){

				if(this.x < 0){
					this.velocityX = 0;
				}


				if(this.x > 640 -this.width){
					this.velocityX = 0;
				}


				if(this.y < 0){
					this.velocityY = 0;
				}

				if(this.y > 480 - this.height){
					this.velocityY = 0;
				}



		}
		
		updatePhysics(timeDiff){
				
			
		}

		
		runAnimation(animation, callback = null){

			this.currentAnimation = animation;

			if(callback != null && typeof(callback) == "function"){
				callback();
			}
		
		}



		drawImage(context,timeDiff){
			

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
					delete this.currentAnimation;
					this.currentAnimation = null;
					this.isDead = true;
				}



				
			}
			
		}
	}


