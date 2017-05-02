/*
Goals (functionality): 
1) Accept arrays of Strings to present in sequence
2) Change or close the narration box when the user clicks 
3) Trigger callback function when narration is finished
4) Allow placement of box to be configured
5) Allow font to be configured

Goals (appearance): 
1) Create divs specified to present the narration
2) Create old-timey font for the look -COMPLETE- 
3) Create style of background of box
*/

function makeNarrationManager(){
  /* PRIVATE VARIABLES */
  var font; // the name and location of the desired .tff file
  var dialogue = {};
  var boxX;
  var boxY;
  
  /* PUBLIC METHODS */
  var that = {
    init: function(dialogueArr, x, y, fontLocation){
      dialogue = dialogueArr;
      boxX = x; 
      boxY = y;
      font = fontLocation + ".tff";
    }
  } // makeNarrationManager
  return that;
} // narrationManager
