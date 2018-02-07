import { Component } from '@angular/core';
import { BaseNum } from '../../base-num';
import { LairService } from '../../services/lair.service';
import { BaseService } from '../../services/base.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'lair-modal',
    templateUrl: './lair-modal.html',
    styleUrls: ['../../app.component.scss'],
})
export class LairModal extends BaseNum {



    constructor(
        public dialogRef: MatDialogRef<LairModal>,
        public _lair: LairService,
        public _base: BaseService
        //@Inject(MAT_DIALOG_DATA) public data: any
    ) 
        {
            super();
         }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
