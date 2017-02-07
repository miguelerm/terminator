var windowHeight = window.innerHeight;
var container = document.getElementById('terminal-container');
container.style.height = windowHeight + 'px';

window.onresize = function () {
    windowHeight = window.innerHeight;
    container.style.height = windowHeight + 'px';
    terminal.fit();
}

var terminal = new Terminal({cursorBlink: true});
terminal.open(container);

terminal._initialized = true;
var shellprompt = '$ ';
terminal.prompt = function () {
    terminal.write('\r\n' + shellprompt);
};
terminal.writeln('Welcome to Terminator');
terminal.writeln('Type help to get more information.');
terminal.prompt();

terminal.toggleFullscreen();
terminal.fit();

terminal.on('key', function (key, ev) {
    var printable = (!ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey);

    if (ev.keyCode == 13) {
        terminal.prompt();
    } else if (ev.keyCode == 8) {
        // Do not delete the prompt
        if (terminal.x > 2) {
            terminal.write('\b \b');
        }
    } else if (printable) {
        terminal.write(key);
    }
});

terminal.on('paste', function (data, ev) {
    terminal.write(data);
});

//var initialGeometry = terminal.proposeGeometry();
//var rows = initialGeometry.rows;
var charHeight = terminal.viewport.currentRowHeight;
var rows = parseInt(windowHeight / charHeight);

terminal.focus();

/*

var height = (rows * charHeight).toString() + 'px';
container.style.height = height;
*/