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

  var currentPath;

  var direction = RIGHT;
  var isMoving = false;

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

    getIsMoving : function(){
      return isMoving;
    },
    getDirection : function(){
      return direction;
    },
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
    setPath : function(path){
      currentPath = path;
    },
    getPath : function(){
      return currentPath;
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
    /*this method should be overwitten during loading by prop data.
    * It handles the click.
    */
    click: function(prop){

    },
    directionWasPressed(dir){
      if(direction == dir && isMoving){
        isMoving = false;
        that.setWalkingSprite(direction, isMoving);
      }
      else{
        direction = dir;
        isMoving = true;
        that.setWalkingSprite(direction, isMoving);
      }
    },
    setWalkingSprite: function(direction, isMoving){
      switch(direction){
        case LEFT:
          isMoving ? that.setSprite("left") : that.setSprite("leftStill");
          break;
        case RIGHT:
          isMoving ? that.setSprite("right") : that.setSprite("rightStill");
          break;
        /*
        There is not any animation avaiable for UP and DOWN direction, so the switch cases for UP and DOWN are omiited for now  - Apr 27, 2017, 2:18am
        */
        default:
          break;
      }

    },
    advanceMovement : function(){
      if(currentPath!=null){
        var nextPos = currentPath.getNext();
        if(nextPos == null){
          currentPath.callBack();
          currentPath.cleanUp();
          currentPath = null;
          return;
        }
        nextX = nextPos.x * PIX_DIM;
        nextY = nextPos.y * PIX_DIM;
        that.setLocation(nextY,nextX);
      }
      if(isMoving){
        that.moveProp();
        positionChanged = true;
      }
    },
    moveProp : function(){
      switch(direction){
        case UP:
          that.setY(that.getY() - MOVE_LENGTH);
          break;
        case DOWN:
          that.setY(that.getY() + MOVE_LENGTH);
          break;
        case LEFT:
          that.setX(that.getX() - MOVE_LENGTH);
          break;
        case RIGHT:
          that.setX(that.getX() + MOVE_LENGTH);
          break;
        default:
          break;
      }
    },
    advanceSprite : function(){
      spriteChanged = spriteManager.advanceSprite();
    },
    needsDrawing: function(){
      if(spriteChanged || positionChanged){
        spriteChanged = false;
        positionChanged = false;
        return true;
      }
      else{
        return false;
      }
    },
    getSpriteManager : function(){
      return spriteManager;
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
