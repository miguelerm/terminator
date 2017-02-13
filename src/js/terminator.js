var remote = require('electron').remote;

function init() {

    function addHandler(selector, handler) {
        document.querySelector(selector).addEventListener("click", function (e) {
            var window = remote.getCurrentWindow();
            handler(window);
        });
    }

    addHandler('.controls > .btn.min', function (window) {
        window.minimize();
    });

    addHandler('.controls > .btn.max', function (window) {
        if (!window.isMaximized()) {
            window.maximize();
        } else {
            window.unmaximize();
        }
    });

    addHandler('.controls > .btn.close', function (window) {
        window.close();
    });
};

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        init();
    }
};

var linea = document.getElementById("linea");
document.onkeydown = function (e) {

    var text = linea.innerText;
    var key = e.key;

    if (key === "Backspace") {
        if (text.length > 0) {
            text = text.substring(0, text.length - 1);
        }
    } else {
        text += key;
    }

    linea.innerText = text;

    console.log(e.key, e);
}