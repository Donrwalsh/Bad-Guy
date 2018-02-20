import {NgModule} from "@angular/core";
import {SchemingModal} from "./scheming-modal/scheming-modal.component";
import {LairModal} from "./lair-modal/lair-modal.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    SchemingModal,
    LairModal
  ],
  exports: [
    SchemingModal,
    MatDialogModule,
    LairModal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: []
})
export class ModalModule {

}