import { Component } from '@angular/core';

const { remote } = electron;

@Component({
    selector: 'controls',
    template: `
    <div class="controls">
        <btn-min (click)="minimize($event)"></btn-min>
        <btn-max (click)="maximize($event)"></btn-max>
        <btn-close (click)="close($event)"></btn-close>
    </div>`
})
export class ControlsComponent {

    minimize(event: Event) {
        this.handleWindow(event, this.minimizeWindow);
    }

    maximize(event: Event) {
        this.handleWindow(event, this.maximizeWindow);
    }

    close(event: Event) {
        this.handleWindow(event, this.closeWindow);
    }

    handleWindow(event: Event, handler: (window: Electron.BrowserWindow) => void) {
        event.preventDefault();
        var window = remote.getCurrentWindow();
        handler(window);
    }

    private minimizeWindow(window: Electron.BrowserWindow) {
        window.minimize()
    }

    private maximizeWindow(window: Electron.BrowserWindow) {
        if(!window.isMaximized()) 
            window.maximize(); 
        else 
            window.unmaximize();
    }

    private closeWindow(window: Electron.BrowserWindow) {
        window.close();
    }

}