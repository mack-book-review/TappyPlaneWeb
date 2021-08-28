class InputHelper{

	

	static ConfigureCanvasMouseControls(scene){

			scene.canvas.addEventListener("mousedown", function(event){

				event.preventDefault();
			
				var x = event.clientX;
				var y = event.clientY;

				console.log("x: " + x);
				console.log("y: " + y);

				console.log("playerX: " + scene.player.x);
				console.log("playerY: " + scene.player.y);

				scene.mouseDown = true; 
				scene.mouseDownX = x;
				scene.mouseDownY = y;
	
			});

			scene.canvas.addEventListener("mouseup", function(event){

				event.preventDefault();
				console.log(event);
				
				scene.mouseDown = false; 
			
	
			});
	}


	
}