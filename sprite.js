function makeSprite(){
  var index = 0;
  var ticks = 0;
  var tickVal;
  var repeat = true;
  var frameCoordinates;
  var image;
  var id;
  var justStarted = true;
  var isAnimator = false;

  return {
    init:function(){
      index = 0;
      ticks = 0;
      justStarted = true;
    },
    setSpriteData(spriteData){
      id = spriteData.id;
      repeat = spriteData.repeat;
      frameCoordinates = spriteData.frameCoordinates;
      image = spriteData.image;
      this.finished = spriteData.finished;
      tickVal =  spriteData.tickVal;
      isAnimator = spriteData.isAnimator;
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
      if(justStarted){
        justStarted = false;
        return true;
      }
      if(!isAnimator){
        return false;
      }
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
