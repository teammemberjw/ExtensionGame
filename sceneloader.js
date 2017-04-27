/*
* SCENELOADER OBJECT
* RESPONSIBILITIES: Stores scene-creating functions and loaded scenes
* USED BY: SceneController object (found in scenecontroller.js)
*/

function makeSceneLoader(){

  /*PRIVATE VARIABLES*/

  var scenes = {   // loaded scenes
    testScene:null
  }

  //this is an object full of key value pairs. key = scene name, value = scene's function
  var sceneMakerFunctions = {
    testScene : testSceneMaker   // this example scene maker can be found in testSceneMaker.js
  }

  /*PUBLIC METHODS*/
  var that = {
    load: function(sceneName){
      if(scenes[sceneName] !=null){
        return scenes[sceneName];
      }
      else{
        scenes[sceneName] = sceneMakerFunctions[sceneName]();
        return scenes[sceneName];
      }
    }
  };

  return that;
}
