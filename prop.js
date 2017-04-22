function makeProp(){

  var bounds = {
    x: null;
    y: null;
    w: null;
    h: null;
  }

  var animationManager = null;

  return {

    setBounds: function(x,y,w,h){
      bounds.x = x;
      bounds.y = y;
      bounds.w = w;
      bounds.h = h;
    },

    getX: function(){
      return bounds.x;
    },
    setX: function(x){
      bounds.x = x;
    },
    getY: function(){
      return bounds.y;
    },
    setY: function(y){
      bounds.y = y;
    },
    getW: function(){
      return bounds.w;
    },
    setW: function(w){
      bounds.w = w;
    },
    getH: function(){
      return bounds.h;
    },
    setH: function(h){
      bounds.h = h;
    },

    liesUnder: function(x,y){
      if(bounds.x <= x && x < bounds.x + bounds.w){
        if(bounds.y <= y && y < bounds.y + bounds.h){
          return true;
        }
      }
      return false;
    },

    setAnimationManager(animManager){
      animationManager = animManager;
    },

    hasColorAtCoordinate(x,y){   // x,y are relative to entire screen so they must be adjusted
      var adjustedX = x - bounds.x;
      var adjustedY = y - bounds.y;
    }
  }
}
