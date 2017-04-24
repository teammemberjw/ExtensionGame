function makeClickHandler(){

  var clickSheet = $("#clickWindow").get(0);
  //clickSheet.focus();
  //clickSheet.setAttribute("tabindex",0);

  return {
    attachClickListener : function(sceneController){
      clickSheet.addEventListener("click",function(e){
        var xClick = e.clientX;
        var yClick = e.clientY;
        var propsToCheck = sceneController.scene.getSortedProps();
        for(prop in propsToCheck){
          if(prop.liesUnder(xClick,yClick)){
            if(prop.hasColorAtCoordinate(xClick,yClick)){
              prop.click();
              return;
            }
          }
        }
      });
    },
    //when a key pressed down even occurs, function(e) is called.
    attachKeyListener : function(sceneController){
    	window.addEventListener('keydown', function(e){
        var key = e.keyCode;
        //alert("test");
        
        if (key == '38'){
          alert("up");
        }
        if(key == '39'){
          alert("right");
        }
        if (key == '40'){
          alert("down")
        }
        if(key == '37'){
          alert("left")
        }

        return key;
      });
    }
  }
}
