function makePortraitPainter(){
  /* PRIVATE VARIABLES */
  var portraitX;
  var portraitY;
  var portraitW;
  var portraitH;
  var portrait = "portraitTest.png"; // the image file for the base
  var mouth = "mouthTest.png"; // the image file for the mouth
  var mouthTicker = 0; // 0 is closed, 1 is open
  
  /* PUBLIC METHODS */
  var that = {
    initValues: function(width, height, portrait, mouth){
      portraitW = width;
      portraitH = height;
      this.portrait = portrait;
      this.mouth = mouth;
    },
    
    paintBase: function(x, y){
      portraitX = x;
      portraitY = y;
      
      /* PAINT BASE PORTRAIT HERE */
    },
    
    paintMouth: function(isAnimated){
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
    },
    
    erasePortrait: function(){
      /* ERASES MOUTH AND PORTRAIT */
    }
  };
  return that;
}
