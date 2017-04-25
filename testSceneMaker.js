function testSceneMaker(){
  var base = makeScene();

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
      bounds: {x:300,y:200,w:200,h:100},
      sprites: [
        {
          id: "testSpriteID",
          image:"test.png",
          frameCoordinates: [[0,0],[100,0],[200,0]],
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

  base.init = function(){
    base.setPropSprite("background","secondSprite");
    base.setPropSprite("prop","testSpriteID");
  }

  return base;
}
