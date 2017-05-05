function makeNarrationManager(){
  /* PRIVATE VARIABLES */
  var dialogue = ["This is a test!"]; // test dialogue
  var index = 0;
  var boxPainter = boxPainter.makeBoxPainter();
  var portraitPainter = portraitPainter.makePortraitPainter();
  
  /* PUBLIC METHODS */
  var that = {
    advanceText: function(){
      if(dialogue.length!=0 && index<dialogue.length-1){
        boxPainter.calculateSize(dialogue[index], 10, 10); // the x and y locations of the box
        index++;
      }else{
        boxPainter.calculateSize(null, 0, 0);
        index = 0;
      }
      boxPainter.display();
    },
    
    select: function(choice){
      /* LOGIC GOES HERE */
    }
  };
  return that;
}
