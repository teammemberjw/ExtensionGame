function makeBoxPainter(){
 /* PRIVATE VARIABLES */
 var dialogue; // the current String to display
 var boxX;
 var boxY;
 var boxW; // Note: once the size of the font can be ascertained, this will be calculated based on 
 var boxH; // the width and height of the letters
 
 /* PUBLIC METHODS */
 var that = {
  setLocation: function(x, y){
   boxX = x;
   boxY = y;
  },
  calculateSize: function(text, x, y){
    dialogue = text;
    boxX = x; 
    boxY = y;
    /* CALCULATE WIDTH AND HEIGHT HERE */
  },
  display: function(){
   /* CLEAR LAST BOX, CREATE A NEW ONE */
   /* WRITE TEXT */
  }
 };
 return that;
}
