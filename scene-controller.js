function makeSceneController(){

  var floorArray = [];
  var isPaused = false;
  var actionHappening = false;
  var scene = null;
  var propPainter = makePropPainter();
  var sceneLoader = makeSceneLoader();
  var clickHandler = makeClickHandler();
  clickHandler.attachClickListener(this);

  return {

    loadAndSetScene : function( newScene ){
      scene = sceneLoader.load(newScene);
      scene.assignDivs(propPainter);
    },

    clearScene: function(){
      scene.detachPropDivs();
    },

    loop: function(){
      scene.sortProps();
      propPainter.paintProps(scene);
    },

    advanceAnimations: function(){

    },

    hideDivsNotInUse: function(){
      for(var i = divsInUse; i< NUM_DIVS;i++){
        propDivs[i].style.left = HIDING_X + "px";
      }
    }
  }
}

var sc = makeSceneController();
sc.loadAndSetScene("testScene");
sc.loop(); // single loop, not ongoing
