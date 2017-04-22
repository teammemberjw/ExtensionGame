function testSceneMaker(){
  var base = makeScene();

  base.setPropData( [
    {
      id:"background",
      walkingPoint:{x:100,y:100},
      basePoint:100,
      bounds: {x:300,y:200,w:200,h:100},
      image: "test.png"
    },
    {
      id:"firstDiv",
      walkingPoint:{x:100,y:100},
      basePoint:100,
      bounds: {x:0,y:0,w:200,h:100},
      image: "test.png",
    },
  ]);

  return base;
}
