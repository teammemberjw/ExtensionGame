function makeSceneController(){

  var floorArray = [];
  var background = $("#background").get(0);
  var propDivs = $(".propDiv").toArray();
  var divsInUse = 0;
  var isPaused = false;
  var actionHappening = false;
  var scene = null;
  var routerTable = makePropRouter(); // not sure this will be needed
  var sceneLoader = makeSceneLoader();
  var clickHandler = makeClickHandler();

  function hideDivsNotInUse(){
    for(var i = divsInUse; i<propDivs.length;i++)
    {
      propDivs.style.left = constants.HIDING_X + "px";
    }
  }

  return {

    initSceneController:function(){
      clickHandler.attachClickListener(this);
    },

    setScene : function( newScene ){
      scene = newScene;
      divsInUse = scene.initialize(background,propDivs);
      hideDivsNotInUse();
    },

    clearScene: function(){
      scene.detachPropDivs();
      divsInUse = 0;
    },

    loop: function(){

    },

    advanceAnimations: function(){

    },
  }
}

makeSceneController();
