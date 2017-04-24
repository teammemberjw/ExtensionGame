function makeScene(){

  var props = [];
  var propHash = {};
  var characterDirection = null;

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

    advanceSprites: function(){
      for(var i = 0; i <props.length;i++){
        props[i].advanceSprite();
      }
    },

    routeKey: function(direction){
      characterDirection = direction;
    },

    routeClick: function(x,y){

    },

    assignDivs: function(propPainter){
      for(var i = 0; i<props.length;i++){
        propPainter.assignPropToDiv(props[i].getID());
      }
    },

    getProps: function(){
      return props;
    },

    sortProps: function(){   // selection sort -- if you want to replace this with something more efficient go ahead
      for(var i = 0; i<props.length;i++){

        var lowestIndex = 0;
        var lowest = props[0].getAbsoluteBasePoint();

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

      for(var i = 0; i<props.length;i++){
        props[i].setZIndex(i+"");
      }
    }

  }

}
