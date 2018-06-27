/* ==========================================================================
  Notification counter listener for Google Plus.
  Designed to use with Nativefier on macOS (github.com/jiahaog/nativefier).

  Created by Daur "BroFox" Gamisonia.
  github.com/BroFox86

  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  Example of use:
  
  nativefier "plus.google.com" --counter --inject path/to/notification.js --icon path/to/icon.png
  ========================================================================== */

// Select the node that will be observed for mutations
var targetNode = document.getElementsByClassName("gb_b")[1];

// Options for the observer (which mutations to observe)
var config = { attributes: true };

// Name of the application
var appName = "Google+ ";

// Callback function to execute when mutations are observed
var callback = function (mutationsList) {
  for (var mutation of mutationsList) {

    // Get a number of unread notifications
    var amount = targetNode.getAttribute("title").match(/[1-99]$/);

    if (mutation.attributeName == "title" && amount != null) {
      // Write the number to the page tittle in brackets
      document.title = appName + "(" + amount + ")";
    } else {
      // Or leave the application name alone
      document.title = appName;
    }
  }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);