import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'terminal',
    template: `<div id="terminal">
    <div class="linea">
        <span class="prompt">&gt;</span><span class="comando"></span><span class="cursor">_</span>
    </div>
</div>`
})
export class TerminalComponent implements OnInit {

    private terminalHost: Element;
    private terminal: Element;
    private linea: Element;
    private comando: HTMLElement;
    private cursor: Element;

    constructor(private terminalRef: ElementRef) {
        this.terminalHost = terminalRef.nativeElement;
    }

    @HostListener('document:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        var text = this.comando.innerText;
        var key = event.key;

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
            this.linea.removeChild(this.cursor);
            div.appendChild(this.cursor);
            this.terminal.appendChild(div);
            this.linea = div;
            this.comando = c;
            console.log("last command: ", text);
            return;
        } else if (key.length === 1) {
            text += key;
        }

        this.comando.innerText = text;
        //console.log('> ', event.key);
    }

    ngOnInit() {
        this.terminal = this.terminalHost.firstElementChild;
        this.linea = this.terminal.getElementsByClassName("linea")[0];
        this.comando = this.linea.getElementsByClassName("comando")[0] as HTMLElement;
        this.cursor = this.linea.getElementsByClassName("cursor")[0];
    }

}