/* EXAMPLE SUBCLASS OF SCENELOADER
*
*  -This is an example of how specific scenes are to be created.
*  -The testSceneMaker function is registered in the sceneloader objects's
*    sceneMakerFunctions objects
*/

function testSceneMaker(){
  var base = makeScene();

  /*Here we provide info about props and their sprites*/
  base.setPropData( [
    {
      id:"background",
      walkingPoint:{x:100,y:100},
      basePoint:0,
      bounds: {x:0,y:0,w:WIN_WIDTH,h:WIN_HEIGHT},
      sprites: [
        {
          id: "testSpriteID",
          image:"test.png",
          frameCoordinates: [[0,0],[100,0],[200,0]],
          repeat:true,
          tickVal:3,
          isAnimator: false,
          finished:function(){
            alert("done");
          }
        },
        {
          id: "secondSprite",
          image:"test.png",
          frameCoordinates: [[0,0],[0,4],[0,8],[0,12]],
          repeat:true,
          tickVal:3,
          isAnimator: false,
          finished:function(){
            alert("done");
          }
        }
      ]
    },
    {
      id:"prop",
      walkingPoint:{x:100,y:100},
      basePoint:100,
      bounds: {x:300,y:200,w:104,h:150},
      sprites: [
        {
          id: "testSpriteID",
          image:"test2.png",
          frameCoordinates: [[0,0],[104,0],[208,0],[312,0],[416,0],[520,0]],
          repeat:true,
          tickVal:3,
          isAnimator:true,
          finished:function(){
            alert("done");
          }
        },
        {
          id: "secondSprite",
          image:"test.png",
          frameCoordinates: [[0,0],[0,4],[0,8],[0,12]],
          repeat:true,
          tickVal:8,
          isAnimator:true,
          finished:function(){
            alert("done");
          }
        }
      ]
    }
  ]);

  /*Here we overwrite Scene's init method.  This is called when a scene is
  * loaded by the sceneController's loadAndSetScene method.
  */
  base.init = function(){
    base.setPropSprite("background","secondSprite");
    base.setPropSprite("prop","testSpriteID");
  }

  base.updateScene = function(){
    var p = base.getProp("prop");
    var x = p.getX();
    var y = p.getY();
    if(x < 500)
    {
      p.moveTo(x+4,y);
    }
  }

  return base;
}
