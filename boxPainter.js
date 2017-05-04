function makeBoxPainter(){
 /* PRIVATE VARIABLES */
 var dialogue; // the current String to display; could be null
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
    dialogue = text.trim();
    boxX = x; 
    boxY = y;
   if(dialogue!=null){
    var totalChar = dialogue.split(''); // produces an array of chars
    var spaceIndex = -1; // the index of a space key in the array
    var finalStr;
    
    /* CALCULATE THE BOX'S WIDTH AND HEIGHT */
    if(totalChar.length>MAX_WIDTH){ // currently undefined constant
     var i = MAX_WIDTH;
     while(dialogue.length!=0){
      while(spaceIndex == -1 || i>=0){
       if(totalChar[i] == ' ')
        spaceIndex = i;
       i--;
      }
      if(spaceIndex!=-1){ 
       finalStr += dialogue.slice(0, spaceIndex) + "<br>";
       dialogue = dialogue.slice(spaceIndex);
       spaceIndex = -1;
      }else{ // if no spaces are found
       finalStr += dialogue;
       dialogue = "";
      }
     } // while
     boxW = MAX_WIDTH*CHAR_WIDTH + CHAR_MARGIN;
     boxH = (finalStr.match(/<br>/g)+1)*CHAR_HEIGHT + CHAR_MARGIN; // should multiply the number of lines by the constant
    }else{ // String is short enough to fit in one line
     boxW = totalChar.length*CHAR_WIDTH + CHAR_MARGIN; // currently undefined constants
     boxH = CHAR_HEIGHT + CHAR_MARGIN; // currently undefined constants
    }
    
    /* CALCULATE IF BOX IS WITHIN BOUNDARIES */
    while(boxX+boxW+10>constants.WIN_WIDTH){ // 10 represents a margin
     boxX-=5;
    }
    while(boxY+boxH+10>constants.WIN_HEIGHT){
     boxY-=5;
    }
    
    dialogue = finalStr; // in order for other functions to access
   } // if(dialogue!=null)
   this.display();
  },
  
  display: function(){
   /* CLEAR PREVIOUS BOX */
   if(dialogue!=null){
    /* CREATE A NEW BOX */
    /* WRITE TEXT */
   }
  }
 };
 return that;
}
