import {NgModule} from "@angular/core";
import {ActivityPanelComponent} from "./activity-panel.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ActivityPanelComponent
  ],
  exports: [
    ActivityPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class ActivityPanelModule {

}