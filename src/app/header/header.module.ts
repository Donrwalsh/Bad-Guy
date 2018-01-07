import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class HeaderModule {

}