function makeSceneController(){

  var floorArray = [];
  var isPaused = false;
  var actionHappening = false;
  var scene = null;
  var propPainter = makePropPainter();
  var sceneLoader = makeSceneLoader();
  var clickHandler;

  return {

    init(){
      clickHandler = makeClickHandler();
      clickHandler.attachClickListener(this);
      clickHandler.attachKeyListener(this);
    },

    loadAndSetScene : function( newScene ){
      scene = sceneLoader.load(newScene);
      scene.assignDivs(propPainter);
    },

    clearScene: function(){
      scene.detachPropDivs();
    },

    startLoop: function(){
      setInterval(this.loop,LOOP_DELAY);
    },

    loop: function(){
      scene.sortProps();
      scene.advanceSprites();
      propPainter.paintProps(scene);
    },

    hideDivsNotInUse: function(){
      for(var i = divsInUse; i< NUM_DIVS;i++){
        propDivs[i].style.left = HIDING_X + "px";
      }
    }
  }
}

var sc = makeSceneController();
sc.init();
sc.loadAndSetScene("testScene");
sc.startLoop();
