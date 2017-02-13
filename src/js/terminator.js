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

var terminal = document.getElementById("terminal");
var linea = terminal.getElementsByClassName("linea")[0];
var comando = linea.getElementsByClassName("comando")[0];
var cursor = linea.getElementsByClassName("cursor")[0];

document.onkeydown = function (e) {

    var text = comando.innerText;
    var key = e.key;

    if (key === "Backspace") {
        if (text.length > 0) {
            text = text.substring(0, text.length - 1);
        }
    } else if (key === "Enter") {
        let div = document.createElement("div");
        let p = document.createElement("span");
        div.className = "linea";
        p.className = "prompt";
        p.innerHTML = "&gt;";
        div.appendChild(p);
        let c = document.createElement("span");
        c.className = "comando";
        div.appendChild(c);
        linea.removeChild(cursor);
        div.appendChild(cursor);
        terminal.appendChild(div);
        linea = div;
        comando = c;
        return;
    } else if (key.length === 1) {
        text += key;
    }

    comando.innerText = text;

    console.log(e.key, e);
}