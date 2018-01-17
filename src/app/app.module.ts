import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { PlayerService } from './services/player.service';
import { PrimaryLoopService } from './services/primary-loop.service';
import { SchemingService } from './services/scheming.service';
import { InventoryService } from './services/inventory.service';
import { TrainingService } from './services/training.service';
import { RecruitingService } from './services/recruiting.service';
import { OperatingService } from './services/operating.service';
import { HeaderModule } from './header/header.module';
import { SchemePanelModule } from './scheme-panel/scheme-panel.module';
import { ActivityPanelModule } from './activity-panel/activity-panel.module';
import { NumbersService } from './services/core/numbers.service';

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
    SchemingService,
    OperatingService,
    RecruitingService,
    TrainingService,
    InventoryService,
    PrimaryLoopService,
    NumbersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }