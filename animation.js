 
 class Animation{



     static GetExplosionTextureImgPaths(){
         var basePath = "assets/Explosion/regularExplosion";
         var imgPaths = [];
         for(var i = 0; i < 9; i++){

             var fullPath = basePath + "0" + i + ".png";
             imgPaths.push(fullPath);
         }


         return imgPaths;
     }



     static GetTappyPlaneTextureImgPaths(color = "Blue"){
         var basePath = "assets/Planes/plane" + color;
         var imgPaths = [];
         for(var i = 1; i < 4; i++){
             var fullPath = basePath + i + ".png";
             imgPaths.push(fullPath);
         }


         return imgPaths;
     }


    static GetCoinTextureImgPaths(color){
         var basePath = "assets/Coins/" + color;
         var imgPaths = [];
         
         for(var i = 1; i < 4; i++){
             var fullPath = basePath + "_" + i + ".png";
             imgPaths.push(fullPath);
         }

         for(var i = 3; i > 0; i--){
             var fullPath = basePath + "_" + i + ".png";
             imgPaths.push(fullPath);
         }


         return imgPaths;
     }

     static GetBeeTextureImgPaths(){
         var p1 = "assets/Bee/bee-fly.png";
         var p2 = "assets/Bee/bee.png";

         return [p1,p2];
     }

      static GetBatTextureImgPaths(){
         var p1 = "assets/Bat/bat-fly.png";
         var p2 = "assets/Bat/bat.png";

         return [p1,p2];
     }

     static GetEvilSunTextureImgPaths(){
         var basePath = "assets/Sun/sun";
         var imgPaths = [];
         for(var i = 1; i < 3; i++){
             var fullPath = basePath + i + ".png";
             imgPaths.push(fullPath);
         }
         return imgPaths;
     }

     static GetWingmanTextureImgPaths(){
         var basePath = "assets/Wingman/wingMan";
         var imgPaths = [];
         for(var i = 1; i < 6; i++){
             var fullPath = basePath + i + ".png";
             imgPaths.push(fullPath);
         }
         return imgPaths;
     }

     
   

      static GetTextures(imgPaths){
         var imgArray = [];

         imgPaths.forEach((imgPath,index) =>{
             var img = new Image();
             img.src = imgPath;
             imgArray.push(img);
         });

         
            return imgArray;

     }

      static GetBatTextures(){
         var imgPaths = Animation.GetBatTextureImgPaths();
         return Animation.GetTextures(imgPaths);
     }


     static GetExplosionTextures(){
         var textures = Animation.GetExplosionTextureImgPaths();
         return Animation.GetTextures(textures);
     }

      static GetBeeTextures(){
         var imgPaths = Animation.GetBeeTextureImgPaths();
         return Animation.GetTextures(imgPaths);
     }

     static GetTappyPlaneTextures(color){
         var imgPaths = Animation.GetTappyPlaneTextureImgPaths(color);
         return Animation.GetTextures(imgPaths);
     }

    static GetEvilSunTextures(){
        var imgPaths = Animation.GetEvilSunTextureImgPaths();
        return Animation.GetTextures(imgPaths);

    }


       static GetWingmanTextures(){
         var imgPaths = Animation.GetWingmanTextureImgPaths();
         return Animation.GetTextures(imgPaths);

     }

     static GetExplosionTextures(){
         var imgPaths = Animation.GetExplosionTextureImgPaths();

         return Animation.GetTextures(imgPaths);
     }


     static GetCoinTextures(color){
         var imgPaths = Animation.GetCoinTextureImgPaths(color);

         return Animation.GetTextures(imgPaths);
     }



      static GetCoinTurningAnimation(color){

         var anim = new Animation(Animation.GetCoinTextures(color),true);
         anim.frameInterval = 300;
         return anim;
     }

     static GetEvilSunTurningAnimation(){

         var anim = new Animation(Animation.GetEvilSunTextures());
         anim.autoLoop = true;
         anim.frameInterval = 30;
         return anim;
     }


     static GetWingmanFlyingAnimation(){

         return new Animation(Animation.GetWingmanTextures());
     }
     

     constructor(textures, autoloop = false){
         this.textures = textures;
         this.currentFrame = 0;
         this.frameInterval = 10;
         this.timeCounter = 0;
         this.autoLoop = autoloop;
         this.animationFinishCallback = function(){};
     }

     setAutoloopOn(){
         this.autoloop = true;
     }

     resetCurrentFrame(){
         this.currentFrame = 0;
     }

     incrementFrameNumber(){
         if(this.currentFrame < this.textures.length){
             this.currentFrame += 1;
         } else {
             this.currentFrame = 0;
         }
     }

     getCurrentTexture(){
         return this.textures[this.currentFrame];
     }

     getCurrentFrame(){
         return this.currentFrame;
     }


    addTextures(textures)
    {
        this.textures = textures;
    }

     getTextureCount(){
         return this.textures.length;
     }


     resetTimeCounter(){
         this.timeCounter = 0;
     }

     incrementTimeCounter(timeDiff){
         this.timeCounter += timeDiff;
     }

 
 }
