import {NgModule} from "@angular/core";
import {ActivityPanelComponent} from "./activity-panel.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@NgModule({
  declarations: [
    ActivityPanelComponent
  ],
  exports: [
    ActivityPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MatSliderModule]
})
export class ActivityPanelModule {

}