/* EXAMPLE SUBCLASS OF SCENE
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
      backgroundOffset:{x:100,y:100},
      basePoint:0,
      drawingOffset:{x:100,y:100},
      dimensions: {w:WIN_WIDTH,h:WIN_HEIGHT},
      location: {x:100,y:100},
      click: function(prop){
        alert(prop.getID());
      },
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
      backgroundOffset:{x:100,y:100},
      basePoint:150,
      drawingOffset:{x:52,y:148},
      dimensions: {w:104,h:150},
      location: {x:52,y:150},
      click: function(prop){
        alert(prop.getID() +" is at"+prop.getX()+","+prop.getY());
      },
      sprites: [
        {
          id: "right",
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
          id: "rightStill",
          image:"test2.png",
          frameCoordinates: [[0,300]],
          repeat:true,
          tickVal:3,
          isAnimator:false,
          finished:function(){
            alert("done");
          }
        },
        {
          id: "left",
          image:"test2.png",
          frameCoordinates: [[0,150],[104,150],[208,150],[312,150],[416,150],[520,150]],
          repeat:true,
          tickVal:3,
          isAnimator:true,
          finished:function(){
            alert("done");
          }
        },
        {
          id: "leftStill",
          image:"test2.png",
          frameCoordinates: [[104,300]],
          repeat:true,
          tickVal:3,
          isAnimator:false,
          finished:function(){
            alert("done");
          }
        }
      ]
    },
    {
      id:"prop2",
      backgroundOffset:{x:100,y:100},
      basePoint:150,
      drawingOffset:{x:52,y:148},
      dimensions: {w:104,h:150},
      location: {x:300,y:300},
      click: function(prop){
        alert(prop.getID());
      },
      sprites: [
        {
          id: "test2SpriteID",
          image:"test3.png",
          frameCoordinates: [[0,0],[104,0],[208,0],[312,0],[416,0],[520,0]],
          repeat:true,
          tickVal:3,
          isAnimator:false,
          finished:function(){
            alert("done");
          }
        }
      ]
    }
  ]);

  base.makeFloorArray(
    [
      {
        isNoWalk : false,
        nodes : [[12,12],[512,92],[564,364],[348,192],[156,408],[228,168],[12,300]],
        bounds : [12,564,408,12] // top right down left
      }
    ]);

  /*Here we overwrite Scene's init method.  This is called when a scene is
  * loaded by the sceneController's loadAndSetScene method.
  */
  base.init = function(){
    base.setPropSprite("background","secondSprite");
    base.setPropSprite("prop","rightStill");
    base.setPropSprite("prop2","test2SpriteID");
    base.setUserControlledProp("prop"); // this line causes "prop" to receive key events
  }


  base.updateScene = function(){
      base.advancePropMovement();
  }

  return base;
}
