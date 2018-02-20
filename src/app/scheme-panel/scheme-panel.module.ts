import {NgModule} from "@angular/core";
import {SchemePanelComponent} from "./scheme-panel.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    SchemePanelComponent
  ],
  exports: [
    SchemePanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MatSliderModule, MatTooltipModule]
})
export class SchemePanelModule {

}