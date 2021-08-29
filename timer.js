class Timer{

	constructor(){

		this.timerOn = false;
		this.timeInterval = 500;
		this.totalTime = 0;


	}

	runTimer(timeDiff){
		if(this.timerOn){

				this.totalTime += timeDiff;

				if(this.totalTime > this.timeInterval){
					this.timerOn = false;
					this.totalTime = 0;
				}
			}
	}
}