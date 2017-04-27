/*
* PROPPAINTER OBJECT
* RESPONSIBILITIES: This is used to assign div elements to a scene's props,
*   to clear divs when a scene changes, and to update the appearance of the divs
*   as the game changes.
*/

function makePropPainter(){

  /*PRIVATE VARIABLES*/
  var propDivs = $(".propDiv").toArray();
  var propTable = [];
  var propDivsInUse = 0;

  /*PUBLIC METHODS*/
  return {
    assignPropToDiv: function(propID){
      propTable.push(propID);
      propDivsInUse++;
    },
    clearRouterTable: function(){
      propTable = [];
      propDivsInUse = 0;
    },
    getDivForProp: function(propID){
      for(var i = 0;i<propTable.length;i++){
        if(propTable[i] == propID)
        {
          return propDivs[i];
        }
      }
    },
    getPropForDiv: function(divID){
      return propTable[divID];
    },
    paintProps: function(scene){
      var props = scene.getProps();
      for(var i = 0; i<props.length; i++){
        prop = props[i];
        var propDiv = this.getDivForProp(prop.getID());
        if(prop.needsDrawing()){
          var bgOffset = prop.getBackgroundOffset();
          propDiv.style.backgroundPositionX = bgOffset[0]+"px";
          propDiv.style.backgroundPositionY = bgOffset[1]+"px";
          propDiv.style.backgroundImage = "url('"+prop.getImage()+"')";

          var divLocation = prop.getDrawingLocation();
          propDiv.style.left = divLocation[0] + "px";
          propDiv.style.top = divLocation[1] + "px";
          propDiv.style.width = prop.getW() + "px";
          propDiv.style.height = prop.getH() + "px";
        }
        propDiv.style.zIndex = i+"";
      }
    }
  }
}
