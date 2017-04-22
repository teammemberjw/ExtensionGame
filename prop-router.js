function makePropRouter(){
  var propTable = [];

  return {

    assignPropToDiv: function(propID){
      propTable.push(propID);
    },

    clearRouterTable: function(){
      propTable = [];
    },

    getDivForProp: function(propID){
      for(var i = 0;i<propTable.length;i++){
        if(propTable[i] == propID)
        {
          return i;
        }
      }
    },

    getPropForDiv: function(divID){
      return propTable[divID];
    }
  }
}
