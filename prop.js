function makeProp(){

  var bounds = {
    x: null,
    y: null,
    w: null,
    h: null
  }

  var zIndex = 0;

  var spriteManager = makeSpriteManager();

  var propDiv = null;

  var basePoint = 0;

  var walkingPoint = {
    x:null,
    y:null
  }

  var id = null;

  var spriteChanged = true;
  var positionChanged = true;

  return {

    setID: function(propID){
      id = propID;
    },

    getID: function(){
      return id;
    },

    setSpriteData:function(spriteData){
      spriteManager.initializeSprites(spriteData);
    },

    setSprite(spriteID){
      spriteManager.setSprite(spriteID);
    },

    getBackgroundOffset: function(){
      return spriteManager.getFrameCoordinates();
    },

    getImage: function(){
      return spriteManager.getImage();
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

    advanceSprite : function(){
      spriteChanged = spriteManager.advanceSprite();
    },

    setZIndex: function(z){
      zIndex = z;
    },

    getZIndex: function(){
      return zIndex;
    },

    needsDrawing(){
      if(spriteChanged){
        spriteChanged = false;
        return true;
      }
      else{
        return false;
      }
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
