import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { PlayerService } from './services/player.service';
import { PrimaryLoopService } from './services/primary-loop.service';
import { HeaderModule } from './header/header.module';
import { SchemePanelModule } from './scheme-panel/scheme-panel.module';
import { ActivityPanelModule } from './activity-panel/activity-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    SchemePanelModule,
    ActivityPanelModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataService,
    PlayerService,
    PrimaryLoopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }