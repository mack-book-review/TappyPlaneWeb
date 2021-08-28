
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
          }

           const elapsed = timestamp - start;
          console.log(elapsed);
           if (previousTimeStamp !== timestamp) {
            // Math.min() is used here to make sure the element stops at exactly 200px
              scene.clearCanvas();
              scene.updateAnimations();
              scene.updatePhysics();
           }


           scene.checkForGameWinOrLoss();

    
            previousTimeStamp = timestamp

            if(scene.isPaused || scene.isLost || scene.isWon){
                console.log("Game stopped");
            } else {

               window.requestAnimationFrame(run);

            }

  
        }

      window.requestAnimationFrame(run);
  }

  
}