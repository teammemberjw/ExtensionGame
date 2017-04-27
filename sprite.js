/*
* SPRITE OBJECT
* RESPONSIBILITIES: This represents current state of sprite animation
* EXTRA COMMENT: tickVal represents how many cycles through the game loop must pass before
*   the animation frame should advance.  One cycle = a "tick". This is how we control the speed
*   of the animation.
*/

function makeSprite(){

  /*PRIVATE VARIABLES */
  var index = 0;
  var ticks = 0;
  var tickVal;
  var repeat = true;
  var frameCoordinates; // array of coordinates in sprite representing animation frames
  var image; // string of image filename
  var id;
  var justStarted = true; //normally the prop
  var isAnimator = false; // some sprites won't animate

  /*PUBLIC METHODS*/

  that = {
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
      that.finished = spriteData.finished;
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
            that.finished();
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
  return that;
}
