/*
Goals (functionality): 
1) -COMPLETE- 
2) Change or close the narration box when the user clicks 
3) Trigger callback function when narration is finished ***** need clarification
4) Allow placement of box to be configured
5) Allow font to be configured ****************************** won't this be in the css file?

Goals (appearance): 
1) Create divs specified to present the narration
2) -COMPLETE- 
3) Create style of background of box
*/

function makeBoxPainter(){
 /* PRIVATE VARIABLES */
 var dialogue; // the current String to display
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
   advanceDialogue: function(){
     if(dialogue.length!=0 && index<dialogue.length-1){
       index++;
       return dialogue[index-1];
     }else{
       index = 0;
       return null; // when the calling function receives null, it should interpret this as "there is no more dialogue"
     }
   },
   
 };
 return that;
}
