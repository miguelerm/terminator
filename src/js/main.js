var container = document.getElementById('terminal-container');
var terminal = new Terminal();
terminal.open(container);
terminal._initialized = true;
var shellprompt = '$ ';
terminal.prompt = function () {
    terminal.write('\r\n' + shellprompt);
};
terminal.writeln('Welcome to xterminal.js');
terminal.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
terminal.writeln('Type some keys and commands to play around.');
terminal.writeln('');
terminal.prompt();

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