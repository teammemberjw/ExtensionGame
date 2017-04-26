/*
* SCENECONTROLLER OBJECT
* RESPONSIBILITIES: Acts as middle man between scenes and div elements, performs game loop,
*   loads scenes
*/

function makeSceneController(){

  /*PRIVATE VARIABLES*/

  var floorArray = [];
  var isPaused = false;
  var actionHappening = false;
  var scene = null;
  var propPainter = makePropPainter();
  var sceneLoader = makeSceneLoader();
  var clickHandler;

  /*PUBLIC METHODS*/

  return {

    init: function(){
      clickHandler = makeClickHandler();
      clickHandler.attachClickListener(this);
      clickHandler.attachKeyListener(this);
    },

    routeClick : function(x,y){
      scene.routeClick(x,y);
    },

    loadAndSetScene : function( newScene ){
      scene = sceneLoader.load(newScene);
      scene.assignDivs(propPainter);
      scene.init();
    },

    clearScene: function(){
      scene.detachPropDivs();
    },

    startLoop: function(){
      setInterval(this.loop,LOOP_DELAY);
    },

    loop: function(){
      scene.sortProps();
      scene.updateScene();
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
