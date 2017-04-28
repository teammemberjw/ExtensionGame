function makePath(path){
  var index = 0;
  var path = path;
  var callBackFunction;
  var options;

  var that = {

    getNext : function(){
      if(index == path.length){
        return null;
      }
      return path[index++];
    },
    setCallBack : function(cb,opts){
      callBackFunction = cb;
      options = opts;
    },
    callBack: function(){
      callBackFunction(options);
    },
    cleanUp: function(){
      index = null;
      path = null;
      callBackFunction = null;
      options = null;
    }
  }

  return that;
}
