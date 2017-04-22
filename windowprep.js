
window.resizeTo(WIN_WIDTH,WIN_HEIGHT);


for(var i = 0; i <NUM_DIVS;i++){
  var propDiv = document.createElement("div");
  propDiv.classList.add("propDiv");
  propDiv.id = i+""; //will be used by prop-router // not sure any more
  propDiv.style.position = "absolute";
  document.body.appendChild(propDiv);
}

var clickWindow = document.createElement("div");
clickWindow.id = "clickWindow";
document.body.appendChild(clickWindow);
clickWindow = null;
