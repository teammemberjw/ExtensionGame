/*
Goals (functionality): 
-COMPLETE- 1) Accept arrays of Strings to present in sequence 
2) Change or close the narration box when the user clicks 
3) Trigger callback function when narration is finished
4) Allow placement of box to be configured
5) Allow font to be configured

Goals (appearance): 
1) Create divs specified to present the narration
-COMPLETE- 2) Create old-timey font for the look -- Will be used in the CSS file
3) Create style of background of box
*/

function makeNarrationManager(){
  /* PRIVATE VARIABLES */
  var dialogue = {}; // each separate "page" is a String; ie ["Hello. <br>It's good to see you.", "How are you?"];
  var index = 0; // the current position of displayed dialogue
  var boxX;
  var boxY;
  var boxW; // Note: once the size of the font can be ascertained, this will be calculated based on 
  var boxH; // the width and height of the letters
  
  /* PUBLIC METHODS */
  var that = {
    drawBox: function(dialogueArr, x, y){
      dialogue = dialogueArr;
      boxX = x; 
      boxY = y;
      /* CALCULATE WIDTH AND HEIGHT HERE */
    },
    displayDialogue: function(){
      if(dialogue.length!=0 && index<dialogue.length-1){
        index++;
        return dialogue[index-1];
      }else{
        index = 0;
        return null; // when the calling function receives null, it should interpret this as "there is no more dialogue"
      }
    }
  } // that
 } // makeNarrationManager
  return that;
} // narrationManager
