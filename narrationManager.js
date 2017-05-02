function makeNarrationManager(){
  /* PRIVATE VARIABLES */
  var dialogue = {};
  var index = 0;
  
  /* PUBLIC METHODS */
  var that = {
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
