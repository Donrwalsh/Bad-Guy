import { Component } from '@angular/core';
import { BaseNum } from '../../base-num';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'scheming-modal',
    templateUrl: './scheming-modal.html',
    styleUrls: ['../../app.component.scss'],
})
export class SchemingModal extends BaseNum {



    constructor(
        public dialogRef: MatDialogRef<SchemingModal>,
        //@Inject(MAT_DIALOG_DATA) public data: any
    ) 
        {
            super();
         }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
