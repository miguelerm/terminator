import { Component, OnInit } from '@angular/core';
//const remote = require('electron').remote;

const { remote } = electron;

@Component({
  selector: 'controls',
template: `<div class="controls">
    <a title="Minimize" class="btn min">
        <svg x="0px" y="0px" viewBox="0 0 10.2 1" class="icon">
            <rect width="10.2" height="1"></rect>
        </svg>
    </a>
    <a title="Maximize" class="btn max">
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.1" class="icon">
            <path d="M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z"></path>
        </svg>
    </a>
    <a title="Close" class="btn close">
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" class="icon">
            <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "></polygon>
        </svg>
    </a>
</div>`
})
export class ControlsComponent implements OnInit { 

    ngOnInit() {
        this.addHandler('.controls > .btn.min', function (window) {
            window.minimize();
        });

        this.addHandler('.controls > .btn.max', function (window) {
            if (!window.isMaximized()) {
                window.maximize();
            } else {
                window.unmaximize();
            }
        });

        this.addHandler('.controls > .btn.close', function (window) {
            window.close();
        });
    }

    private addHandler(selector: string, handler: (window: Electron.BrowserWindow) => void) {
        document.querySelector(selector).addEventListener("click", function (e) {
            var window = remote.getCurrentWindow();
            handler(window);
        });
    }

 }