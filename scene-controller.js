/*
* SCENECONTROLLER OBJECT
* RESPONSIBILITIES: Acts as middle man between scenes and div elements, performs game loop,
*   loads scenes
*/

function makeSceneController(){

  /*PRIVATE VARIABLES*/

  var isPaused = false;
  var actionHappening = false;
  var scene = null;
  var propPainter = makePropPainter();
  var sceneLoader = makeSceneLoader();
  var clickHandler;

  /*PUBLIC METHODS*/

  var that = {

    init: function(){
      clickHandler = makeClickHandler();
      clickHandler.attachClickListener(that);
      clickHandler.attachKeyListener(that);
    },

    routeClick : function(x,y){
      scene.routeClick(x,y);
    },
    routeKey : function(key){
      scene.routeKey(key);
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
      setTimeout(that.loop,LOOP_DELAY);
    },

    loop: function(){
      scene.sortProps();
      scene.updateScene();
      scene.advanceSprites();
      propPainter.paintProps(scene);
      setTimeout(that.loop,LOOP_DELAY);
    },

    hideDivsNotInUse: function(){
      for(var i = divsInUse; i< NUM_DIVS;i++){
        propDivs[i].style.left = HIDING_X + "px";
      }
    }
  }

  return that;
}


var sc = makeSceneController();
sc.init();
sc.loadAndSetScene("testScene");
sc.startLoop();
