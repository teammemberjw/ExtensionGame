var $name = $(".titlebox > h1");
$name.css("background-color","red");

$name.click(function(){
	chrome.extension.sendMessage({message:"openWindow"},function(){
		//nothing to do
	})
});