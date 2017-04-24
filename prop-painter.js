function makePropPainter(){

  var propDivs = $(".propDiv").toArray();

  var propTable = [];

  var propDivsInUse = 0;

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
        if(prop.needsDrawing()){
          var propDiv = this.getDivForProp(prop.getID());
          var bgOffset = prop.getBackgroundOffset();
          propDiv.style.backgroundPositionX = bgOffset[0]+"px";
          propDiv.style.backgroundPositionY = bgOffset[1]+"px";
          propDiv.style.backgroundImage = "url("+prop.getImage()+")";
          propDiv.style.left = prop.getX() + "px";
          propDiv.style.top = prop.getY() + "px";
          propDiv.style.width = prop.getW() + "px";
          propDiv.style.height = prop.getH() + "px";
          propDiv.style.zIndex = prop.getZIndex() +"";
        }
      }
    }
  }
}
