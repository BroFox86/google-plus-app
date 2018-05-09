/* ==========================================================================
  Created by Daur "BroFox" Gamisonia.
  Google Plus: https://plus.google.com/+DaurGamisoniya
  GitHub: https://github.com/BroFox86
  ========================================================================== */

var targetNode = document.getElementsByClassName("gb_b")[1],
        config = { attributes: true };

var callback = function(mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.attributeName == "title") {

      var amount  = targetNode.getAttribute("title").match(/[1-99]$/),
          appName = "Google+ ";

      if (amount != null) {
        document.title = appName + "(" + amount + ")";
      } else {
        document.title = appName;
      }
    }
  }
};

var observer = new MutationObserver(callback);

observer.observe(targetNode, config);