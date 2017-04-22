function makeSceneController()
{
  var floorArray = [];
  var background = $("#background");
  var propDivs = $(".propDiv");
  var propDivsInUse = [];
  var isPaused = false;
  var actionHappening = false;
  var scene = null;
  var routerTable = makePropRouter();

  return {

    setScene : function( newScene ){
      scene = newScene;
    },

    initializeScene : function(){

    },

    clearScene: function(){

    },

    loop: function(){

    },

    advanceAnimations: function(){

    }
  }
}

makeSceneController();
