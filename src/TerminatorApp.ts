import { BrowserWindow } from 'electron';
import * as url from 'url';
import * as path from 'path';

const defaultWindowOptions = {
  width: 800,
  height: 600,
  frame: false
};

const defaultIndexUrl = {
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
};

export interface AppConfig {
  windowOptions?: Electron.BrowserWindowOptions,
  indexUrl?: url.Url,
}

export class TerminatorApp {

  private mainWindow: Electron.BrowserWindow;

  constructor(private app: Electron.App, private config?: AppConfig) {

    config = config || {};
    config.windowOptions = config.windowOptions || defaultWindowOptions;
    config.indexUrl = config.indexUrl || defaultIndexUrl;
    this.config = config;

    app.on('activate', this.onActivate);
    app.on('ready', this.onReady);
    app.on('window-all-closed', this.onWindowAllClosed);


  }

  onActivate = () => {
    if (this.mainWindow === null) {
      this.createWindow();
    }
  }

  onReady = () => {
    this.createWindow();
  }

  onWindowAllClosed = () => {
    if (process.platform !== 'darwin') {
      this.app.quit()
    }
  }

  createWindow = () => {
    this.mainWindow = new BrowserWindow(this.config.windowOptions);

    this.mainWindow.loadURL(url.format(this.config.indexUrl));

    this.mainWindow.on("closed", () => {
      this.mainWindow = null;
    });
  }

}