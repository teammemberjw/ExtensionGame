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

  var props = [];
  var propHash = {};
  var userControlledProp; // when a prop is supposed to react to key events it will be here
  var character; // the character prop will always be here?


  /*PUBLIC METHODS*/

  return {
    setPropData: function(propDataArray){
      for(var i = 0; i<propDataArray.length; i++){
        var propData = propDataArray[i];
        var prop = makeProp();
        prop.setID(propData.id);
        prop.setBounds(propData.bounds);
        prop.setWalkingPoint(propData.walkingPoint);
        prop.setBasePoint(propData.basePoint);
        prop.setSpriteData(propData.sprites);
        props.push(prop);
        propHash[prop.getID()]=prop;

      }
    },

    /*this must be overwritten by subclasses*/
    init:function(){

    },

    setPropSprite: function(propID,spriteID){
        propHash[propID].setSprite(spriteID);
    },

    updateScene: function(){

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
      for(var i = props.length-1;i>0;i--){
        if(props[i].gotClicked(x,y)){
          props[i].click();
          return;
        }
      }
      props[0].click(); // if no other props clicked, background takes click
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
            lowestIndex = j
          }
        }
        var temp = props[i];
        props[i] = props[lowestIndex];
        props[lowestIndex] = temp;
      }
    }

  } // END OF RETURN STATEMENT

}
