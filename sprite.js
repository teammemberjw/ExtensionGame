function makeSprite(){
  var index = 0;
  var ticks = 0;
  var tickVal;
  var repeat = true;
  var frameCoordinates;
  var image;
  var id;

  return {
    init:function(){
      index = 0;
      ticks = 0;
    },
    setSpriteData(spriteData){
      id = spriteData.id;
      repeat = spriteData.repeat;
      frameCoordinates = spriteData.frameCoordinates;
      image = spriteData.image;
      this.finished = spriteData.finished;
      tickVal = ((spriteData.speed * 1000) / frameCoordinates.length) / LOOP_DELAY;
    },

    getID(){
      return id;
    },
    getCurrentFrameCoordinates(){
      return frameCoordinates[index];
    },
    getImage: function(){
      return image;
    },
    advance: function(){ // the true or false indicates if something changed
      ticks++;
      if(ticks%tickVal==0){
        ticks = 0;
        index++;
        if(index == frameCoordinates.length){
          if(repeat){
            index = 0;
          }
          else{
            this.finished();
          }
        }
        return true;
      }
      return false;
    },
    finished:function(){
      alert("this should be overwritten when initializing sprite!");
    }

  }
}
