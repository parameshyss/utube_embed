/*
 * Author: Parameshwaran B
 */

function isYouTubeVideoURL(url) {
  var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/watch\?v=.+/
  var match  = url.match(regExp);

  return match ? true : false;
}

chrome.browserAction.onClicked.addListener(function(tab) {

    /*
        1. Get current URL
        2. Check if it is YouTube video URL
        3. convert URL to embed mode
            3.1 https://www.youtube.com/watch?v=EKkzbbLYPuI to https://www.youtube.com/embed/EKkzbbLYPuI
            i.e., replace "watch?v=" with "embed/"
        4. Load current Tab with converted URL
     */
    var current_url = tab.url;

    if (true == isYouTubeVideoURL(current_url)) {
      var new_url = current_url.replace("watch?v=", "embed\/");
      //alert("New URL is : " + new_url);
      chrome.tabs.update(tab.id, {url: new_url});
    }
});