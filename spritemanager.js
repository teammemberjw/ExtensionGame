function makeSpriteManager(){
  var currentSprite;
  var spritesTable = {};

  return {
    initializeSprites: function(spriteDataArray){
      for(var i = 0;i<spriteDataArray.length;i++){
        var sprite = makeSprite();
        sprite.setSpriteData(spriteDataArray[i]);
        sprite.init();
        spritesTable[sprite.getID()] = sprite;
      }
    },
    setSprite:function(spriteName){
      currentSprite = spritesTable[spriteName];
      currentSprite.init();
    },
    advanceSprite(){
      return currentSprite.advance(); // returns true if anything changed
    },
    getImage:function(){
      return currentSprite.getImage();
    },
    getFrameCoordinates(){
      return currentSprite.getCurrentFrameCoordinates();
    },
    colourAt(x,y){

    },

  }
}