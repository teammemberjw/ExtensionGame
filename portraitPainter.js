function makePortraitPainter(){
  /* PRIVATE VARIABLES */
  var portraitX;
  var portraitY;
  var portraitW;
  var portraitH;
  var portrait; // the image file for the base
  var mouth; // the image file for the mouth
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
       if(mouthTicker==0){
         mouthTicker = 1;
          /* MOUTH IS DRAWN CLOSED */
       }else{
         mouthTicker = 0;
          /* MOUTH IS DRAWN OPEN */
       }
      }else{
        mouthTicker = 0; 
        /* MOUTH IS DRAWN CLOSED */
      }
    }
  };
  return that;
}
