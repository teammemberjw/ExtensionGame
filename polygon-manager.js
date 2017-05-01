/*
*  POLYGON MANAGER OBJECT
*  RESPONSIBILITIES: testing if a point is in a polygon, and generating an array
*    that represents which points are in the polygon and which aren't
*/
function makePolygonManager(){
  /*PRIVATE VARIABLES*/

  /*PUBLIC METHODS*/
  var that = {
    detectIfPointIsInPoly : function(x,y,poly){

    	var nodes = poly.nodes;

    	var lastX = nodes[nodes.length-1][0]-x;
    	var lastY = nodes[nodes.length-1][1]-y;

    	//CW 1 quadrant = +1;  CCW = -1
    	var wn = 0;

    	for(var j = 0;j<nodes.length;j++){
    		var node = nodes[j];
    		var newX = node[0]-x;
    		var newY = node[1]-y

    		if(lastX>=0 && newX<0){
    			var yInt = that.yIntercept(newX,newY,lastX,lastY);
    			if(yInt<0){
    				wn-=1;
    			}
    		}
    		else if(lastX<0 && newX >= 0){
    			var yInt = that.yIntercept(newX,newY,lastX,lastY);
    			if(yInt<0){
    				wn+=1;
    			}
    		}
    		lastX = newX;
    		lastY = newY;
    	}

    	if(wn!=0){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
    xIntercept : function(x1,y1,x2,y2){
    	var slope = (y1-y2)/(x1-x2);

    	return -y1/slope +x1;
    },
    yIntercept : function(x1,y1,x2,y2){
    	var slope = (y1-y2)/(x1-x2);

    	return -slope*(x1)+y1;
    },
    generateFloor : function(floorWidth, floorHeight, gridSpacing, polies){
      var divX = (floorWidth - floorWidth%gridSpacing)/gridSpacing;
      var divY = (floorHeight - floorHeight%gridSpacing)/gridSpacing;

      var gridArr = new Array(divX);
    	for(var m = 0;m<divX;m++){
    		gridArr[m] = new Array(divY);
        for(var n=0;n<divY;n++){
          gridArr[m][n] = 0;
        }
    	}

      for(var m = 0;m<polies.length;m++){
        var poly = polies[m];

        var doesNegate = poly.isNoWalk;

        var top = poly.bounds[0];

        top = (top-top%gridSpacing)/gridSpacing;

        var right = poly.bounds[1]/gridSpacing;

        if(right%gridSpacing<gridSpacing/2)
          right = right-right%gridSpacing;
        else{
          right = right - right%gridSpacing + gridSpacing;
        }
        var bottom = poly.bounds[2]/gridSpacing;

        if(bottom%gridSpacing<gridSpacing/2)
          bottom = bottom-bottom%gridSpacing;
        else{
          bottom = bottom - bottom%gridSpacing + gridSpacing;
        }

        if(bottom>=gridArr[0].length)
        {
          bottom = gridArr[0].length-1;
        }

        if(right>=gridArr.length)
        {
          right = gridArr.length-1;
        }

        var left = poly.bounds[3]/gridSpacing;
        left = left-left%gridSpacing;
        for(var i = left;i<=right;i++){
          for(var j = top;j<=bottom;j++){
            if(that.detectIfPointIsInPoly(i*gridSpacing,j*gridSpacing,poly)){
              if(!doesNegate){
                gridArr[i][j]=1;
              }
              else{
                gridArr[i][j]=0;
              }
            }
          }
        }
      }
      return gridArr;
    }
  }
  return that;
}
