import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ControlsComponent } from './controls.component';
import { TerminalComponent } from './terminal.component';
import { LineComponent } from './line.component';
import { BtnMinComponent } from './btn-min.component';
import { BtnMaxComponent } from './btn-max.component';
import { BtnCloseComponent } from './btn-close.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlsComponent,
    TerminalComponent,
    BtnMinComponent,
    BtnMaxComponent,
    BtnCloseComponent,
    LineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }