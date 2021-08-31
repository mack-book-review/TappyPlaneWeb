class AssetLoader{


	


	static GetSoundURLs(){
		return [];
	}

	static GetImageURLs(){
		

		var urls = AssetLoader.GetURLCollection().reduce(
			function(current,nextArray){
				
				return current.concat(nextArray);
			});



		return urls;
	}

	static GetURLCollection(){ 
		return [
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
		AssetLoader.LetterURLs,
		AssetLoader.PowerupURLs,

		];
	}

		static PowerupURLs = [
		
			"assets/Carrot/carrot.png",
			"assets/Carrot/carrot_gold.png",

		];


		static LetterURLs = [
		"assets/Letters/letter_A.png",
		"assets/Letters/letter_B.png",
		"assets/Letters/letter_C.png",
		"assets/Letters/letter_D.png",
		"assets/Letters/letter_E.png",
		"assets/Letters/letter_F.png",
		"assets/Letters/letter_G.png",
		"assets/Letters/letter_H.png",
		"assets/Letters/letter_I.png",
		"assets/Letters/letter_J.png",
		"assets/Letters/letter_K.png",
		"assets/Letters/letter_L.png",
		"assets/Letters/letter_M.png",
		"assets/Letters/letter_N.png",
		"assets/Letters/letter_O.png",
		"assets/Letters/letter_P.png",
		"assets/Letters/letter_Q.png",
		"assets/Letters/letter_R.png",
		"assets/Letters/letter_S.png",
		"assets/Letters/letter_T.png",
		"assets/Letters/letter_U.png",
		"assets/Letters/letter_V.png",
		"assets/Letters/letter_W.png",
		"assets/Letters/letter_X.png",
		"assets/Letters/letter_Y.png",
		"assets/Letters/letter_Z.png",

		];


	static BackgroundElementURLs = [
		"assets/BackgroundElements/castle_beige.png",
		"assets/BackgroundElements/castle_grey.png",
		"assets/BackgroundElements/castle_wall.png",
		"assets/BackgroundElements/cloud1.png",
		"assets/BackgroundElements/cloud2.png",
		"assets/BackgroundElements/cloud3.png",
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
		"assets/BackgroundElements/groundDirt.png",
		"assets/BackgroundElements/groundGrass.png",
		"assets/BackgroundElements/groundIce.png",
		"assets/BackgroundElements/groundRock.png",
		
		"assets/BackgroundElements/house_beige_front.png",
		"assets/BackgroundElements/house_beige_side.png",
		"assets/BackgroundElements/house_grey_front.png",
		"assets/BackgroundElements/house_grey_side.png",

		"assets/BackgroundElements/moon_full.png",
		"assets/BackgroundElements/moon_half.png",
		"assets/BackgroundElements/piramid.png",

		"assets/BackgroundElements/sun.png",
		"assets/BackgroundElements/temple.png",
		"assets/BackgroundElements/tower_beige.png",
		"assets/BackgroundElements/tower_grey.png",

		"assets/BackgroundElements/tree01.png",
		"assets/BackgroundElements/tree02.png",
		"assets/BackgroundElements/tree03.png",
		"assets/BackgroundElements/tree04.png",
		"assets/BackgroundElements/tree05.png",
		"assets/BackgroundElements/tree06.png",
		"assets/BackgroundElements/tree07.png",
		"assets/BackgroundElements/tree08.png",
		"assets/BackgroundElements/tree09.png",
		"assets/BackgroundElements/tree10.png",
		"assets/BackgroundElements/tree11.png",
		"assets/BackgroundElements/tree12.png",
		"assets/BackgroundElements/tree13.png",
		"assets/BackgroundElements/tree14.png",
		"assets/BackgroundElements/tree15.png",

		"assets/BackgroundElements/tree16.png",
		"assets/BackgroundElements/tree17.png",
		"assets/BackgroundElements/tree18.png",
		"assets/BackgroundElements/tree19.png",
		"assets/BackgroundElements/tree20.png",

		"assets/BackgroundElements/tree21.png",
		"assets/BackgroundElements/tree22.png",
		"assets/BackgroundElements/tree23.png",
		"assets/BackgroundElements/tree24.png",

		"assets/BackgroundElements/tree25.png",
		"assets/BackgroundElements/tree26.png",
		"assets/BackgroundElements/tree27.png",

		"assets/BackgroundElements/tree28.png",
		"assets/BackgroundElements/tree29.png",
		"assets/BackgroundElements/tree30.png",

		"assets/BackgroundElements/tree31.png",
		"assets/BackgroundElements/tree32.png",
		"assets/BackgroundElements/tree33.png",

		"assets/BackgroundElements/tree34.png",
		"assets/BackgroundElements/tree35.png",


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
		"assets/EvilSun/sun1.png",
		"assets/EvilSun/sun2.png",

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



	requestImage(url){
		return this.loadedImages[url];
	}

	constructor(){
		this.loadedImages = {};
		this.loaded = false;
    	this.loadedCount = 0;
    	this.totalCount = 0;
    	this.soundFileExtn = ".ogg";
    	this.configureSoundFileExtension();


    	this.loadAllImages(AssetLoader.GetImageURLs());
    	this.loadAllSounds(AssetLoader.GetSoundURLs());

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
		var assetLoader = this;
		urls.forEach(url => assetLoader.loadImage(url));
	
	}

	 loadImage(url){ 
            this.totalCount++;
            this.loaded = false; 
            //show loading progress bar here 

            var image=new Image(); 
            image.src = url;
            this.loadedImages[url] = image;
            image.onload = this.itemLoaded(); 
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
            console.log("All items loaded");
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