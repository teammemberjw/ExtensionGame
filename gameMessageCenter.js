
window.addEventListener("unload",function(){
	chrome.extension.sendMessage({message:"gameWindowClose"},function(){
		//nothing to do.
	});
});
