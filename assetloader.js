class AssetLoader{


	

	static SoundURLs = [];

	static BackgroundElementURLs = [
		"assets/BackgroundElements/castle_beige.png",
		"assets/BackgroundElements/castle_grey.png",
		"assets/BackgroundElements/castle_wall.png",
		"assets/BackgroundElements/cloud1.png",
		"assets/BackgroundElements/cloud2.png",
		"assets/BackgroundElements/cloud4.png",
		"assets/BackgroundElements/cloud5.png",

	];


	static BackgroundURLs = [];

	static BatURLs = [
		"assets/Bat/bat-fly.png",
		"assets/Bat/bat.png"];

	static BeeURLs = [
		"assets/Bee/bee-fly.png",
		"assets/Bee/bee.png"
	];

	static BombURLs = ["assets/Bomb/bomb.png"];
	
	static CoinURLs = [
		"assets/Coins/bronze_1.png",
		"assets/Coins/bronze_2.png",
		"assets/Coins/bronze_3.png",
		"assets/Coins/bronze_4.png",
		"assets/Coins/gold_1.png",
		"assets/Coins/gold_2.png",
		"assets/Coins/gold_3.png",
		"assets/Coins/gold_4.png",
		"assets/Coins/silver_1.png",
		"assets/Coins/silver_2.png",
		"assets/Coins/silver_3.png",
		"assets/Coins/silver_4.png",

	];

	static EvilCloudURLs = [
		"assets/EvilCloud/cloud.png",

	];

	static PlaneURLs = [
		"assets/Planes/planeBlue1.png",
		"assets/Planes/planeBlue2.png",
		"assets/Planes/planeBlue3.png",
		"assets/Planes/planeGreen1.png",
		"assets/Planes/planeGreen2.png",
		"assets/Planes/planeGreen3.png",
		"assets/Planes/planeRed1.png",
		"assets/Planes/planeRed2.png",
		"assets/Planes/planeRed3.png",
		"assets/Planes/planeYellow1.png",
		"assets/Planes/planeYellow2.png",
		"assets/Planes/planeYellow3.png",
	];


	constructor(image_urls,sound_urls){

		this.loaded = false;
    	this.loadedCount = 0;
    	this.totalCount = 0;
    	this.soundFileExtn = ".ogg";
    	this.configureSoundFileExtension();


    	this.loadAllImages(image_urls);
    	this.loadAllSounds(sound_urls);

    	//show loading progress bar?
    	this.onload = function(){
    		console.log("Start showing progress bar");
    	};
    	this.onload();
	}

	loadAllSounds(urls){
		for(var i = 0; i < urls.length; i++){
			this.loadSound(url);
		}
	}

	loadAllImages(urls){
		for(var i = 0; i < urls.length; i++){
			this.loadImage(url);
		}
	}

	 loadImage(url){ 
            this.totalCount++;
            this.loaded = false; 

            //show loading progress bar here 

            var image=new Image(); 
            image.src = url;
            image.onload = this.itemLoaded; 
            return image;
       }

	loadSound(url){
        this.totalCount++;
        this.loaded = false;
      
        var audio=new Audio();
        audio.src = url + loader.soundFileExtn; 
        audio.addEventListener("canplaythrough", loader.itemLoaded, false); 
        return audio;
      }

       itemLoaded(){
        this.loadedCount++;

        //here: configure message for loading progress
        if (this.loadedCount === this.totalCount){
            // Loader has loaded completely.. 
            this.loaded = true;
            // Hide the loading screen $('#loadingscreen').hide();
            //and call the loader.onload method if it exists
           if(this.onload){
                this.onload();
                this.onload = undefined; 
            }
         } 
    }

	configureSoundFileExtension(){
	 var mp3Support,oggSupport;
        var audio=document.createElement('audio'); 

        if (audio.canPlayType) {
            // Currently canPlayType() returns: "", "maybe" or "probably" 
            mp3Support="" !=audio.canPlayType('audio/mpeg');
            oggSupport="" !=audio.canPlayType('audio/ogg; codecs="vorbis"');
        } else {
            //The audio tag is not supported 
            mp3Support = false;
            oggSupport = false;
        }
        // Check for ogg, then mp3, and finally set soundFileExtn to undefined
        this.soundFileExtn = oggSupport?".ogg":mp3Support?".mp3":undefined; 
    }
}