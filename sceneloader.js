function makeSceneLoader(){

  var scenes = {
    firstScene:null;
  }

  var sceneLoaders = {
    firstScene : firstSceneMaker;
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
