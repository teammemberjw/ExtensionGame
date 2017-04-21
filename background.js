var windowOpen = false;

chrome.extension.onMessage.addListener(function(request,sender,sendResponse)
{
	if(request.message == "openWindow" && !windowOpen)
	{
		chrome.windows.create({
			url:"gameHTML.html",
			type:"panel",
			width:800,
			height:500,
			top:150,
			left:350,
			focused:true
		});

		windowOpen = true;
	}
	else if(request.message == "gameWindowClose")
	{
		windowOpen = false;
	}

});
