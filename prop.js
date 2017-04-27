/*
* PROP OBJECT
* RESPONSIBILITIES: This object is used to represent a prop on screen. It holds info
*   about the prop's bounds, basePoint, walkingPoint
* EXTRA COMMENT: Used by the propPainter object to adjust the background and position and size
*   of the div that will visually represent the prop
*/

function makeProp(){

  /*PRIVATE VARIABLES*/

  var dimensions = {
    w: null,
    h: null
  }

  var location = {
    x:0,
    y:0
  }

  var spriteManager = makeSpriteManager();

  //depth position of prop within the scene.
  var basePoint = 0;

  var drawingOffset = {
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
    setDimensions: function(dim){
      dimensions = dim;
    },
    getX: function(){
      return location.x;
    },
    setX: function(x){
      location.x = x;
    },
    getY: function(){
      return location.y;
    },
    setY: function(y){
      location.y = y;
    },
    getW: function(){
      return dimensions.w;
    },
    setW: function(w){
      dimensions.w = w;
    },
    getH: function(){
      return dimensions.h;
    },
    setH: function(h){
      dimensions.h = h;
    },
    liesUnder: function(x,y){
      var divX = location.x - drawingOffset.x;
      var divY = location.y - drawingOffset.y;

      if(divX <= x && x < divX + dimensions.w){
        if(divY <= y && y < divY + dimensions.h){
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
      var adjustedX = x - (location.x - drawingOffset.x);
      var adjustedY = y - (location.y - drawingOffset.y);
      return spriteManager.colourAt(adjustedX, adjustedY, dimensions.w, dimensions.h);
    },
    setDrawingOffset: function(drawOff){
      drawingOffset = drawOff;
    },
    getDrawingOffset: function(){
      return drawingOffset;
    },
    setBasePoint: function(bp){
      basePoint = bp;
    },

    getDrawingLocation: function(){
      return [location.x - drawingOffset.x, location.y - drawingOffset.y];
    },

    /*
    * Changes the location of a prop.
    * Accepts parameters (xDest, yDest), the destination coordinates.
    */
    setLocation : function(xDest, yDest){
      that.setX(xDest);
      that.setY(yDest);
      positionChanged = true;
    },
    getAbsoluteBasePoint: function(){
      return basePoint + location.y;
    }
  }
  return that;
}
