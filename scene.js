/*
* SCENE OBJECT
* RESPONSIBILITIES: Managing props, routing keyevents and mouse clicks to props,
*  sorting drawing order of props, performing logic of scene
*
* EXTRA COMMENT: Should be subclassed to be given specific behaviour
*   --- An example subclass can be found in testSceneMaker.js
*/

function makeScene(){

  /*PRIVATE VARIABLES*/

  var floorArray = [[],[]];
  var props = [];
  var propHash = {};
  var pathFinder = makePathFinder();
  var userControlledProp; // when a prop is supposed to react to key events it will be here
  var character; // the character prop will always be here?
  var polygonManager = new makePolygonManager();

  /*PUBLIC METHODS*/
  var that = {
    setPropData: function(propDataArray){
      for(var i = 0; i < propDataArray.length; i++){
        var propData = propDataArray[i];
        var prop = makeProp();
        prop.setID(propData.id);
        prop.setLocation(propData.location.x, propData.location.y);
        prop.setDrawingOffset(propData.drawingOffset);
        prop.setDimensions(propData.dimensions);
        prop.setBasePoint(propData.basePoint);
        prop.setSpriteData(propData.sprites);
        prop.click = propData.click;
        props.push(prop);
        propHash[prop.getID()]=prop;

      }
    },

    makeFloorArray : function(floorData){
      floorArray = polygonManager.generateFloor(WIN_WIDTH, WIN_HEIGHT, PIX_DIM,floorData);
      that.floorTest();
      pathFinder.init(floorArray);
    },

    floorTest : function(){
      var can = document.createElement("canvas");
      var ctx = can.getContext("2d");
      can.width = WIN_WIDTH;
      can.height = WIN_HEIGHT;
      var img = ctx.getImageData(0,0,WIN_WIDTH,WIN_HEIGHT);
      var data = img.data;
      var boxWid = PIX_DIM * 4;
      var row = WIN_WIDTH * boxWid;

      for(var i = 0; i<floorArray.length;i++){
        for(var j = 0;j<floorArray[0].length;j++){
          if(floorArray[i][j] != 1){
            data[i*boxWid + 3 + j * row] = 255;
            data[i*boxWid + 0 + j * row] = 255;
            data[i*boxWid + 1 + j * row] = 255;
            data[i*boxWid + 2 + j * row] = 255;

          }
        }
      }
      img.data = data;
      ctx.putImageData(img,0,0);
      document.getElementById("clickWindow").appendChild(can);
    },

    /*this must be overwritten by subclasses*/
    init:function(){

    },

    setUserControlledProp(propID){
      userControlledProp = propHash[propID];
    },
    getUserControlledProp(){
      return userControlledProp;
    },
    setPropSprite: function(propID,spriteID){
        propHash[propID].setSprite(spriteID);
    },

    updateScene: function(){

    },
    advancePropMovement(){
      for(var i = 0;i<props.length;i++){
        var prop = props[i];
        if(prop.getPath() != null){
          prop.advanceMovement();
          return;
        }
        if(prop.getIsMoving()){
          if(that.checkIfMovementPossible(prop.getDirection(),prop.getX(),prop.getY())){
            prop.advanceMovement();
          }
          else{
            prop.directionWasPressed(prop.getDirection());
          }
        }
      }
    },
    checkIfMovementPossible(dir,locX,locY){
      switch(dir){
        case UP:
          return floorArray[locX/PIX_DIM][locY/PIX_DIM-MOVE_MULT] == 1;
          break;
        case DOWN:
          return floorArray[locX/PIX_DIM][locY/PIX_DIM+MOVE_MULT] == 1;
          break;
        case LEFT:
          return floorArray[locX/PIX_DIM-MOVE_MULT][locY/PIX_DIM] == 1;
          break;
        case RIGHT:
          return floorArray[locX/PIX_DIM+MOVE_MULT][locY/PIX_DIM] == 1;
          break;
        default:
          return false;
      }
    },
    advanceSprites: function(){
      for(var i = 0; i <props.length;i++){
        props[i].advanceSprite();
      }
    },

    routeKey: function(key){
      if(key == UP || key == DOWN || key == LEFT || key == RIGHT){
        userControlledProp.directionWasPressed(key);
      }
    },

    routeClick: function(x,y){
      if(true){ // just while testing aStar
        var userProp = that.getUserControlledProp();
        var userX = userProp.getX();
        var userY = userProp.getY();
        var pathCoords = pathFinder.getPath(userX,userY,x,y);
        var path = makePath(pathCoords);
        path.setCallBack(function(){alert("hello");},null);
        userProp.setPath(path);
        return;
      }
      for(var i = props.length-1; i > 0; i--){
        if(props[i].gotClicked(x,y)){
          props[i].click(props[i]); // you must pass the prop to it's click method
          return;
        }
      }
      props[0].click(props[0]); // if no other props clicked, background takes click
    },

    assignDivs: function(propPainter){
      for(var i = 0; i<props.length;i++){
        propPainter.assignPropToDiv(props[i].getID());
      }
    },

    getProps: function(){
      return props;
    },

    getProp: function(propID){
      return propHash[propID];
    },

    /*After this is done, props[] should be ordered by drawing order */
    sortProps: function(){
      for(var i = 0; i<props.length;i++){
        var lowestIndex = i;
        var lowest = props[i].getAbsoluteBasePoint();
        for(var j = i; j<props.length;j++){
          var jBasePoint = props[j].getAbsoluteBasePoint();
          if(jBasePoint < lowest){
            lowest = jBasePoint;
            lowestIndex = j;
          }
        }
        var temp = props[i];
        props[i] = props[lowestIndex];
        props[lowestIndex] = temp;
      }
    }
  }; // END OF THAT

  return that;

}
