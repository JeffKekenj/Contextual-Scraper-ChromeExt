function sendSearch(selectedText) {
 var serviceCall = 'http://www.google.com/results?search_query=' + selectedText;
 chrome.tabs.create({url: serviceCall});
}

chrome.contextMenus.create(
 {
  title: "Find '%s'", 
  contexts:["selection"], 
  onclick: function(info, tab) {
      sendSearch(info.selectionText);
  }
 });
 
 /*var arr = [], l = document.links;
for(var i=0; i<l.length; i++) {
  arr.push(l[i].href);
}*/