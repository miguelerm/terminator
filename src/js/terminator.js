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

document.onkeydown = function () {
    console.log(arguments);
}