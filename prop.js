function makeProp(){

  var bounds = {
    x: null,
    y: null,
    w: null,
    h: null
  }

  var zIndex = 0;

  var animationManager = null;

  var propDiv = null;

  var basePoint = 0;

  var walkingPoint = {
    x:null,
    y:null
  }

  var id = null;

  var image = null;

  return {

    setID: function(propID){
      id = propID;
    },

    getID: function(){
      return id;
    },

    setBounds: function(bnds){
      bounds = bnds;
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

    setAnimationManager: function(animManager){
      animationManager = animManager;
    },

    setZIndex: function(z){
      zIndex = z;
    },

    getZIndex: function(){
      return zIndex;
    },

    setImage: function(img){
      image = "url("+img+")";
    },

    getImage: function(){
      return image;
    },

    hasColorAtCoordinate: function (x,y){   // x,y are relative to entire screen so they must be adjusted
      var adjustedX = x - bounds.x;
      var adjustedY = y - bounds.y;
    },

    setWalkingPoint: function(wp){
      walkingPoint = wp;
    },

    setBasePoint: function(bp){
      basePoint = bp;
    },

    getAbsoluteBasePoint: function(){
      return basePoint + bounds.y;
    }
  }
}
