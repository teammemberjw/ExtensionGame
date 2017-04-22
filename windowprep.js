
window.resizeTo(WIN_WIDTH,WIN_HEIGHT);

var background = document.createElement("div");
background.id = "background";
document.body.appendChild(background);
background = null;

for(var i = 0; i <NUM_DIVS;i++){
  var propDiv = document.createElement("div");
  propDiv.classList.add("propDiv");
  propDiv.id = i+""; //will be used by prop-router
  document.body.appendChild(propDiv);
}

var clickWindow = document.createElement("div");
clickWindow.id = "clickWindow";
document.body.appendChild(clickWindow);
clickWindow = null;
