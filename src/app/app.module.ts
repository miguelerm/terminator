import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { AppComponent }      from './app.component';
import { HeaderComponent }   from './header.component';
import { ControlsComponent } from './controls.component';
import { TerminalComponent } from './terminal.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, ControlsComponent, TerminalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }