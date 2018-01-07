import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class HeaderModule {

}