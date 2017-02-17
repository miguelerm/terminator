import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'terminal',
    template: `<div id="terminal">
    <div class="linea">
        <span class="prompt">&gt;</span><span class="comando"></span><span class="cursor">_</span>
    </div>
</div>`
})
export class TerminalComponent implements OnInit {

    ngOnInit() {
        var terminal = document.getElementById("terminal");
        var linea = terminal.getElementsByClassName("linea")[0];
        var comando = linea.getElementsByClassName("comando")[0] as HTMLElement;
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
    }

}