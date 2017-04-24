function makeClickHandler(){

  var clickSheet = $("#clickWindow").get(0);
  clickSheet.setAttribute("tabindex",0);
  clickSheet.focus();

  return {
    attachClickListener : function(sceneController){
      clickSheet.addEventListener("click",function(e){
          var xClick = e.clientX;
          var yClick = e.clientY;
      });
    },
    //when a key pressed down even occurs, function(e) is called.
    attachKeyListener : function(sceneController){
    	clickSheet.addEventListener('keydown', function(e){
        var key = e.keyCode;
        alert("test");

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
