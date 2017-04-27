/*
* SPRITEMANAGER OBJECT
* RESPONSIBILITIES: Managing sprites, finding out if sprite has been clicked,
*   advancing sprites animation, switching between sprites
*/

function makeSpriteManager(){

  /*PRIVATE VARIABLES */
  var currentSprite;
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
    colourAt(x,y,dWidth,dHeight){
      var canvas = document.createElement('canvas');
      canvas.width = dWidth;
      canvas.height = dHeight;
      var ctx = canvas.getContext('2d');
      var clickedData;
      var image = new Image();
      image.src = currentSprite.getImage();
      canvas.width = dWidth;
      canvas.height = dHeight;
      ctx.drawImage(image, 0, 0);
      clickedData = ctx.getImageData(x, y, 1, 1).data;
      if(clickedData[3]==0) // [3] is the alpha channel; 0 is fully transparent
        alert('Clicked transparent');
      else
        alert('Clicked sprite');
      return clickedData[3];
    },
  } // END OF RETURN STATEMENT
}
