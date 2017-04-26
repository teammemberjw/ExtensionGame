
/* This file is code for setting up the window and html elements */

window.resizeTo(WIN_WIDTH,WIN_HEIGHT);

/*This keeps the window from being resized*/
window.addEventListener("resize",function(){
  window.resizeTo(WIN_WIDTH,WIN_HEIGHT);
});


for(var i = 0; i <NUM_DIVS;i++){
  var propDiv = document.createElement("div");
  propDiv.classList.add("propDiv");
  propDiv.id = i+""; //will be used by prop-router // not sure any more
  propDiv.style.position = "absolute";
  document.body.appendChild(propDiv);
}

var clickWindow = document.createElement("div");
clickWindow.id = "clickWindow";
clickWindow.position = "absolute";
clickWindow.style.width = WIN_WIDTH +"px";
clickWindow.style.height = WIN_HEIGHT + "px";
clickWindow.style.zIndex = "100";
clickWindow.style.position = "absolute";
document.body.appendChild(clickWindow);
clickWindow = null;

/*
*  This tells the background script that it doesn't have to block
*   the creation of new windows, because this window has closed.
*/
window.addEventListener("unload",function(){
	chrome.extension.sendMessage({message:"gameWindowClose"},function(){
		//nothing to do.
	});
});
