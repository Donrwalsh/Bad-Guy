import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { PlayerService } from './services/player.service';
import { HeaderModule } from './header/header.module';
import { SchemePanelModule } from './scheme-panel/scheme-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    SchemePanelModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }