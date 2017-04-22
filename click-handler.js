function makeClickHandler(){

  var clickSheet = $("#clickWindow").get(0);

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
    }
  }
}
