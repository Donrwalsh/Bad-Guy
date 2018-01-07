import {NgModule} from "@angular/core";
import {SchemePanelComponent} from "./scheme-panel.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SchemePanelComponent
  ],
  exports: [
    SchemePanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class SchemePanelModule {

}