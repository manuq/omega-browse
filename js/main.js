define(function(require) {
    var icons = require("xi-graphics/icons");

    var webView = document.getElementById("web-view");
    var backButton = document.getElementById("back-button");
    var forwardButton = document.getElementById("forward-button");
    var locationInput = document.getElementById("location-input");
    var throbber = document.getElementById("throbber");

    icons.load({"name": "actions/go-left"}, function(data) {
        backButton.style.backgroundImage = "url('" + data + "')";
    });

    icons.load({"name": "actions/go-right"}, function(data) {
        forwardButton.style.backgroundImage = "url('" + data + "')";
    });

    backButton.addEventListener("click", function() {
        webView.goBack()
    });

    forwardButton.addEventListener("click", function() {
        webView.goForward()
    });

    function getURLFromInput(input) {
        if (input.indexOf("http://") == 0 || input.indexOf("https://") == 0) {
            return  input;
        } else if (input.indexOf(".") != -1) {
            return "http://" + input;
        } else {
            return "http://www.google.com/search?q=" + input;
        }
    }

    locationInput.addEventListener("change", function(event) {
        webView.src = getURLFromInput(locationInput.value);
        event.preventDefault();
    });

    webView.addEventListener("mozbrowserloadstart", function() {
	throbber.classList.add('loading');
    });

    webView.addEventListener("mozbrowserloadend", function() {
	throbber.classList.remove('loading');
    });

});
