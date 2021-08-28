
class Game{

  constructor(scene){
    this.scene = scene;



  }

  start(){
      let start, previousTimeStamp;
      let scene = this.scene;

       function run(timestamp) {
          if (start === undefined){
            start = timestamp;
            previousTimeStamp = start;
          }


           if (previousTimeStamp !== timestamp) {
            // Math.min() is used here to make sure the element stops at exactly 200px
              const elapsed = timestamp - previousTimeStamp;

              scene.clearCanvas();
              scene.update(elapsed);
              scene.updateAnimations(elapsed);
              scene.updatePhysics(elapsed);
           }


           //scene.performCollisionCheck();
           scene.checkForGameWinOrLoss();

    
            
          
            previousTimeStamp = timestamp;
            if(scene.isPaused || scene.isLost || scene.isWon){
                console.log("Game stopped");
            } else {


               window.requestAnimationFrame(run);

            }

  
        }

      window.requestAnimationFrame(run);
  }

  
}