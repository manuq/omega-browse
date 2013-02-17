define(function(require) {
    var artwork = require("xi-artwork/icons");

    var webView = document.getElementById("web-view");
    var backButton = document.getElementById("back-button");
    var forwardButton = document.getElementById("forward-button");
    var locationInput = document.getElementById("location-input");

    icons.loadWithName("actions/go-left", function(data) {
        backButton.style.backgroundImage = data;
    });

    icons.loadWithName("actions/go-right", function(data) {
        forwardButton.style.backgroundImage = data;
    });

    backButton.addEventListener("click", function() {
        webView.goBack()
    });

    forwardButton.addEventListener("click", function() {
        webView.goForward()
    });

    locationInput.addEventListener("change", function(event) {
        webView.src = "http://" + locationInput.value;
        event.preventDefault();
    });
});
