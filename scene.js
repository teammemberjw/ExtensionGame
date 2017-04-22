function makeScene(){

  var props = [];

  return {
    setPropData: function(propDataArray){
      for(var i = 0; i<propDataArray.length; i++){
        var propData = propDataArray[i];
        var prop = makeProp();
        prop.setID(propData.id);
        prop.setBounds(propData.bounds);
        prop.setAnimationManager(propData.animationManager);
        prop.setWalkingPoint(propData.walkingPoint);
        prop.setBasePoint(propData.basePoint);
        prop.setImage(propData.image);

        props.push(prop);

      }
    },
    assignDivs: function(propPainter){
      for(var i = 0; i<props.length;i++){
        propPainter.assignPropToDiv(props[i].getID());
      }
    },
    detachPropDivs: function(){
      for(var i = 0;i<props.length;i++){
        props[i].clearPropDiv();
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
