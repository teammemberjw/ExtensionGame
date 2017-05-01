function makePath(path){
  var index = 0;
  var path = path;
  var callBackFunction;
  var options;
  var previousPoint = path[0];
  var reachedLastIndex = false;

  var that = {

    getNext : function(){

      if(index >= path.length){ //
        if(reachedLastIndex == false){
          reachedLastIndex = true;
          return path[path.length-1];
        }
        return null;
      }
      var next = path[index];
      if(previousPoint.x != next.x && previousPoint.y != next.y){
        index += Math.ceil(MOVE_MULT /2);
      }
      else{
        index += MOVE_MULT;
      }
      previousPoint = next;
      return next;
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
