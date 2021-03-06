import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { PrimaryLoopService } from './services/primary-loop.service';
import { SchemingService } from './services/scheming.service';
import { InventoryService } from './services/inventory.service';
import { TrainingService } from './services/training.service';
import { RecruitingService } from './services/recruiting.service';
import { OperatingService } from './services/operating.service';
import { HeaderModule } from './header/header.module';
import { SchemePanelModule } from './scheme-panel/scheme-panel.module';
import { ActivityPanelModule } from './activity-panel/activity-panel.module';
import { HeroesService } from './services/heroes.service';
import { CookieService } from 'ngx-cookie-service';
import { BaseService } from './services/base.service';
import { ModalModule } from './modal/modal.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LairModal} from './modal/lair-modal/lair-modal.component';
import {LairService} from './services/lair.service';
import { SystemService } from './services/system.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    SchemePanelModule,
    ActivityPanelModule,
    BrowserModule,
    HttpModule,
    MatTooltipModule
  ],
  providers: [
    DataService,
    BaseService,
    SchemingService,
    HeroesService,
    OperatingService,
    RecruitingService,
    LairService,
    TrainingService,
    InventoryService,
    PrimaryLoopService,
    CookieService,
    ModalModule,
    MatTooltipModule,
    SystemService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LairModal]
})
export class AppModule { }