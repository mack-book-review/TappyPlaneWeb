class AssetLoader{


	

	static SoundURLs = [];


	//use a reduce function
	static GetImageURLs(){
		var urls = [];



		return urls;
	}

	static URLCollection = [
		AssetLoader.BackgroundElementURLs,
		AssetLoader.BackgroundURLs,
		AssetLoader.BatURLs,
		AssetLoader.BeeURLs,
		AssetLoader.BombURLs,
		AssetLoader.CoinURLs,
		AssetLoader.EvilCloudURLs,
		AssetLoader.EvilSunURLs,
		AssetLoader.ExplosionURLs,
		AssetLoader.PlaneURLs,
		AssetLoader.FlyURLs,
		AssetLoader.FlymanURLs,
		AssetLoader.HUDURLs,
		AssetLoader.SpikeballURLs,
		AssetLoader.SpikemanURLs,
		AssetLoader.SpringmanURLs,
		AssetLoader.WingmanURLs,

	];

	static BackgroundElementURLs = [
		"assets/BackgroundElements/castle_beige.png",
		"assets/BackgroundElements/castle_grey.png",
		"assets/BackgroundElements/castle_wall.png",
		"assets/BackgroundElements/cloud1.png",
		"assets/BackgroundElements/cloud2.png",
		"assets/BackgroundElements/cloud4.png",
		"assets/BackgroundElements/cloud5.png",
		"assets/BackgroundElements/cloud6.png",
		"assets/BackgroundElements/cloud7.png",
		"assets/BackgroundElements/grass1.png",
		"assets/BackgroundElements/grass2.png",
		"assets/BackgroundElements/grass3.png",
		"assets/BackgroundElements/grass4.png",
		"assets/BackgroundElements/grass5.png",
		"assets/BackgroundElements/grass6.png",
		"assets/BackgroundElements/grass7.png",
		"assets/BackgroundElements/groundDirt.png",
		"assets/BackgroundElements/groundGrass.png",
		"assets/BackgroundElements/groundIce.png",
		"assets/BackgroundElements/groundRock.png",


	];


	static BackgroundURLs = [
		"assets/Backgrounds/background.png",
		"assets/Backgrounds/colored_castle.png",
		"assets/Backgrounds/colored_desert.png",
		"assets/Backgrounds/colored_talltrees.png",
		"assets/Backgrounds/uncolored_castle.png",
		"assets/Backgrounds/uncolored_desert.png",
		"assets/Backgrounds/uncolored_forest.png",
		"assets/Backgrounds/uncolored_hills.png",
		"assets/Backgrounds/uncolored_peaks.png",
		"assets/Backgrounds/uncolored_piramids.png",
		"assets/Backgrounds/uncolored_plain.png",
		"assets/Backgrounds/uncolored_talltrees.png",


		];

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

	static EvilSunURLs = [
		"assets/Planes/sun1.png",
		"assets/Planes/sun2.png",

	];

	static ExplosionURLs = [
		"assets/Explosion/regularExplosion00.png",
		"assets/Explosion/regularExplosion01.png",
		"assets/Explosion/regularExplosion02.png",
		"assets/Explosion/regularExplosion03.png",
		"assets/Explosion/regularExplosion04.png",
		"assets/Explosion/regularExplosion05.png",
		"assets/Explosion/regularExplosion06.png",
		"assets/Explosion/regularExplosion07.png",
		"assets/Explosion/regularExplosion08.png",

	];


	static FlyURLs = [
		"assets/Fly/flyDead.png",
		"assets/Fly/flyFly1.png",
		"assets/Fly/flyFly2.png",

	];

	static FlymanURLs = [
		"assets/Flyman/flyman_fly.png",
		"assets/Flyman/flyman_jump.png",
		"assets/Flyman/flyman_stand.png",
		"assets/Flyman/flyman_still_fly.png",
		"assets/Flyman/flyman_still_jump.png",
		"assets/Flyman/flyman_still_stand.png",

	];


	static HUDURLs = [
		"assets/HUD/text_gameover.png",
		"assets/HUD/text_go.png",
		"assets/HUD/text_ready.png",
		"assets/HUD/text_score.png",
		"assets/HUD/text_score_small.png",
		"assets/HUD/text_timeup.png",

	];

	static SpikeballURLs = [
		"assets/Spikeball/spikeBall1.png",
		"assets/Spikeball/spikeBall2.png",
	
	];

	static SpikemanURLs = [
		"assets/Spikeman/spikeMan_jump.png",
		"assets/Spikeman/spikeMan_stand.png",
		"assets/Spikeman/spikeMan_walk1.png",
		"assets/Spikeman/spikeMan_walk2.png",

	];

	static SpringmanURLs = [
		"assets/Springman/springMan_hurt.png",
		"assets/Springman/springMan_stand.png",

	];

	static WingmanURLs = [
		"assets/Wingman/wingMan1.png",
		"assets/Wingman/wingMan2.png",
		"assets/Wingman/wingMan3.png",
		"assets/Wingman/wingMan4.png",
		"assets/Wingman/wingMan5.png",

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