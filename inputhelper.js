class InputHelper{

	

	static ConfigureCanvasMouseControls(scene){

			scene.canvas.addEventListener("mousedown", function(event){

				event.preventDefault();
			
				var x = event.clientX;
				var y = event.clientY;

			

				scene.mouseDown = true; 
				scene.mouseDownX = x;
				scene.mouseDownY = y;
	
			});

			scene.canvas.addEventListener("mouseup", function(event){

				event.preventDefault();
				
				scene.mouseDown = false; 
			
	
			});
	}


	
}