/*
* The manifest file has specified for this content script to only run on 
*  reddit user pages.
*/


// this stores the HTML element containing the username in a variable
var $name = $(".titlebox > h1");
$name.css("background-color","red");


// only background script can open a window, so we send a message to the 
// background to open it
$name.click(function(){
	chrome.extension.sendMessage({message:"openWindow"},function(){
		//this is a callback function. There's nothing it needs 
		//to do though
	})
});
