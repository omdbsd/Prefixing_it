chrome.action.onClicked.addListener( function( tab ) {
    var u = tab.url;
    var nu = "https:\/\/xxrrg.herokuapp.com\/proxy\/" + u ;
	console.log( nu );
    chrome.tabs.update( tab.id, { url: nu }) ;
});
