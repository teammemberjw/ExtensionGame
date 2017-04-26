/*
* PROP OBJECT
* RESPONSIBILITIES: This object is used to represent a prop on screen. It holds info
*   about the prop's bounds, basePoint, walkingPoint
* EXTRA COMMENT: Used by the propPainter object to adjust the background and position and size
*   of the div that will visually represent the prop
*/

function makeProp(){

  /*PRIVATE VARIABLES*/

  var bounds = {
    x: null,
    y: null,
    w: null,
    h: null
  }

  var spriteManager = makeSpriteManager();

  //depth position of prop within the scene.
  var basePoint = 0;

  var walkingPoint = {
    x:null,
    y:null
  }

  var id = null;

  var spriteChanged = true;
  var positionChanged = true;

  /*PUBLIC METHODS*/

  var that = {

    setID: function(propID){
      id = propID;
    },
    getID: function(){
      return id;
    },
    setSpriteData:function(spriteData){
      spriteManager.initializeSprites(spriteData);
    },
    setSprite : function(spriteID){
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
    gotClicked : function(x,y){
      return (that.liesUnder(x,y) && that.hasColorAtCoordinate(x,y));
    },
    click: function(){
      alert(that.getID());
    },
    advanceSprite : function(){
      spriteChanged = spriteManager.advanceSprite();
    },
    needsDrawing: function(){
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
      return spriteManager.colourAt(adjustedX, adjustedY);
    },
    setDrawingOffset: function(dp){
      drawingOffset = dp;
    },
    setBasePoint: function(bp){
      basePoint = bp;
    },
    getAbsoluteBasePoint: function(){
      return basePoint + bounds.y;
    },
  }// END OF RETURN STATEMENT
}

/*
* Changes the location of a prop.
* Accepts parameters (xDest, yDest), the destination coordinates.
*/
function moveTo(xDest, yDest){
  that.setX(xDest);
  that.setY(yDest);
  positionChanged = true;
  return;
}