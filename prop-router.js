function makePropRouter(){

  var propTable = [];

  var propDivsInUse = 0;

  return {

    assignPropToDiv: function(propID){
      propTable.push(propID);
      propDivssInUse++;
    },

    clearRouterTable: function(){
      propTable = [];
      propDivsInUse = 0;
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
