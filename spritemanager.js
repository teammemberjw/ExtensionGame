/*
* SPRITEMANAGER OBJECT
* RESPONSIBILITIES: Managing sprites, finding out if sprite has been clicked,
*   advancing sprites animation, switching between sprites
*/

function makeSpriteManager(){

  /*PRIVATE VARIABLES */
  var currentSprite;
  var spriteWidth;
  var spriteHeight;
  var clickedData; // the colour data for the location that was clicked
  var spritesTable = {};

  /*PUBLIC METHODS*/

  return {
    initializeSprites: function(spriteDataArray){
      for(var i = 0;i<spriteDataArray.length;i++){
        var sprite = makeSprite();
        sprite.setSpriteData(spriteDataArray[i]);
        sprite.init();
        spritesTable[sprite.getID()] = sprite;
      }
      // currentSprite = 0; or whatever the first sprite needs to be
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
      var canvas = this.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = spriteWidth;
      canvas.height = spriteHeight;
      clickedData = ctx.getImageData(x, y, 1, 1);
      return clickedData[3]; // returs the alpha channel only; 0 is fully transparent
    },

  } // END OF RETURN STATEMENT
}
