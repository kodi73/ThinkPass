chrome.runtime.onInstalled.addListener(function () {
  chrome.identity.getAuthToken({ interactive: true }, function (token) {
    console.log("Token obtained: " + token);
  });
});
