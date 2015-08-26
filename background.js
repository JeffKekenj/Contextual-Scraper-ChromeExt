//<script src="rightclick.js"></script>
function getClickHandler(info,tab) {
 return function(info, tab) {
  //alert('howdy');
  test();
 };
}; 

function test(){
	var arr = [], l = document.links;
	for(var i=0; i<l.length; i++) {
		arr.push(l[i].href);
	}	
	console.log('tseting');
	alert('testthing ' +arr);
	for(var j=0; i<l.length; j++) {
		alert('test '+arr[j]);
	}	
};


chrome.contextMenus.create({
 "title" : "Show Links",
 "type" : "normal",
 "onclick" : getClickHandler()
});