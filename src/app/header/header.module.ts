import {NgModule} from "@angular/core";
import {HeaderComponent, DialogOverviewExampleDialog} from "./header.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {SchemingModal} from '../modal/scheming-modal/scheming-modal.component';
import {ModalModule} from '../modal/modal.module';

@NgModule({
  declarations: [
    HeaderComponent,
    DialogOverviewExampleDialog
  ],
  exports: [
    HeaderComponent,
    MatDialogModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ModalModule
  ],
  providers: [],
  entryComponents: [SchemingModal]
})
export class HeaderModule {

}