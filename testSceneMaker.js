function testSceneMaker(){
  var base = makeScene();

  base.setPropData( [
    {
      id:"background",
      walkingPoint:{x:100,y:100},
      basePoint:100,
      bounds: {x:300,y:200,w:200,h:100},
      sprites: [
        {
          id: "testSpriteID",
          image:"test.png",
          frameCoordinates: [[0,0],[100,0],[200,0]],
          repeat:true,
          speed:10,
          finished:function(){
            alert("done");
          }
        }
      ]
    },
  ]);

  base.init = function(){
    base.setPropSprite("background","testSpriteID");
  }

  return base;
}
