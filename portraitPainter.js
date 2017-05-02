function makePortraitPainter(){
  /* PRIVATE VARIABLES */
  var portraitX;
  var portraitY;
  var portraitW;
  var portraitH;
  var portrait; // the image file for the base
  var mouth; // an array of images for the mouth
  var mouthTicker = 0;
  var isAnimated = false;
  
  /* PUBLIC METHODS */
  var that = {
    paintBase: function(x, y, w, h, image){
      portraitX = x;
      portraitY = y;
      portraitW = w;
      portraitH = h;
      portrait = image;
      
      /* PAINT BASE PORTRAIT HERE */
    },
    paintMouth: function(){
      if(isAnimated){
       if(mouthTicker<mouth.length-1){
          /* MOUTH CONTINUES TO MOVE IN CURRENT DIRECTION */
       }else{
          /* MOUTH NOW MOVIES IN OPPOSITE DIRECTION */
       }
      }else{
         /* MOUTH IS REVERTED TO DEFAULT POSITION */
      }
    }
  };
  return that;
}
