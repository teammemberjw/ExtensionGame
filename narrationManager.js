function makeNarrationManager(){
  /* PRIVATE VARIABLES */
  var dialogue = {};
  var index = 0;
  
  /* PUBLIC METHODS */
  var that = {
    advanceText: function(){
       if(dialogue.length!=0 && index<dialogue.length-1){
         index++;
        // return dialogue[index-1]; send this data to the boxPainter
       }else{
         index = 0;
       //  return null; // when the calling function receives null, it should interpret this as "there is no more dialogue"
       }
    },
    select: function(choice){
      /* LOGIC GOES HERE */
    }
  };
  return that;
}
