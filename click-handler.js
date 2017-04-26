function makeClickHandler(){

  var clickWindow = document.getElementById("clickWindow");

  return {
    attachClickListener : function(sceneController){
      clickWindow.addEventListener("click",function(e){
          var xClick = e.clientX;
          var yClick = e.clientY;
          sceneController.routeClick(xClick,yClick);
      });
    },
    //when a key pressed down even occurs, function(e) is called.
    attachKeyListener : function(sceneController){
    	window.addEventListener('keydown', function(e){
        var key = e.keyCode;
        sceneController.scene.routeKey(key);
      });
    }
  }
}
