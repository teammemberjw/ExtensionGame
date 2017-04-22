function makeSceneLoader(){

  var scenes = {
    testScene:null
  }

  var sceneLoaders = {
    testScene : testSceneMaker
  }


  function isLoaded(sceneName){
    return scenes[sceneName];
  }

  return {
    load: function(sceneName){
      if(scenes[sceneName] !=null){
        return scenes[sceneName];
      }
      else{
        scenes[sceneName] = sceneLoaders[sceneName]();
        return scenes[sceneName];
      }
    }
  }

}
