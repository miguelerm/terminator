import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { LineModel } from "./line.model";

@Component({
    selector: 'terminal',
    template: `
    <div id="terminal">
        <line *ngFor="let line of lines" [model]="line"></line>
    </div>`
})
export class TerminalComponent implements OnInit {

    private terminalHost: Element;
    private terminal: Element;
    private linea: Element;
    private comando: HTMLElement;
    private cursor: Element;
    
    lines: LineModel[] = [];

    constructor(private terminalRef: ElementRef) {
        this.terminalHost = terminalRef.nativeElement;
    }

    @HostListener('document:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {

        var lastLine = this.getLastLineOrDefault();
        var text = lastLine.text;
        var key = event.key;

        if (key === "Backspace") {
            if (text.length > 0) {
                text = text.substring(0, text.length - 1);
            }
        } else if (key.length === 1) {
            text += key;
        } else if (key === "Enter") {

            
            this.addNewLine();
            return;

        } else {
            console.log("unhandled key ", key);
        }

        lastLine.text = text;

    }

    ngOnInit() {
        this.addNewLine();
    }

    private addNewLine() {
        var lastLine = this.getLastLine();

        if (lastLine)
            lastLine.current = false;

        this.lines.push({current:true, text:''});
    }

    private getLastLineOrDefault(): LineModel {
        return this.getLastLine() || {current: true, text: ''};
    }
    
    private getLastLine(): LineModel | null {
        return this.lines.length > 0 ? this.lines[this.lines.length -1] : null;
    }

}