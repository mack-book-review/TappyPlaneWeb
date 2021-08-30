
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
              
              //Show that the game is loading

              if(scene.gameState == "intro"){


              }

              //Start the game (don't run this code unless game is fully loaded)
              if(scene.gameState == "playing"){
                  scene.clearCanvas();
                  scene.update(elapsed);
                  scene.updateAnimations(elapsed);
                  scene.updatePhysics(elapsed);
                  scene.checkForGameWinOrLoss();

              }

              if(scene.gameState == "paused"){
               //draw the text on the canvas itself instead of using
                //the HTML elements

              }

              if(scene.gameState == "gamewon"){
                console.log("The game has been won!");
                //draw the text on the canvas itself instead of using
                //the HTML elements
              }

              if(scene.gameState == "gamelost"){

                 console.log("The game is lost!");
                  //draw the text on the canvas itself instead of using
                //the HTML elements

              }

           }


         

    
            
          
            previousTimeStamp = timestamp;
         


            window.requestAnimationFrame(run);

     

  
        }

      window.requestAnimationFrame(run);
  }

  
}