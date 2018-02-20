import { Component, Inject } from '@angular/core';
import { SchemingService } from '../services/scheming.service';
import { InventoryService } from '../services/inventory.service';
import { HeroesService } from '../services/heroes.service';
import { Base } from '../base';
import { BaseService } from '../services/base.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {SchemingModal} from '../modal/scheming-modal/scheming-modal.component';
import { SystemService } from '../services/system.service';
import { CookieService } from 'ngx-cookie-service';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['../app.component.scss'],
})
export class HeaderComponent extends Base {

    constructor(public _base: BaseService,
        public cookieService: CookieService,
        public _system: SystemService,
        public _heroes: HeroesService,
        public _scheming: SchemingService,
        public _inventory: InventoryService,
        public dialog: MatDialog) {
        super();
    }

    animal: string;
    name: string;

    openDialog(): void {
        let dialogRef = this.dialog.open(SchemingModal, {
            width: '75%',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }


    notorietyRotationStyle() {
        var degrees = this._heroes.notorietySpinnerPercent();
        return { 'transform': 'rotate(' + degrees + 'deg)' }
    }

    schemeStyle() {
        return { 'cursor': this._base.earningSchemePoints ? 'pointer' : 'default' }
    }

    schemeProgressBarStyle() {
        return { 'width': this._base.currentScheme.percentage + '%' }
    }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    template: '<p>Potato</p>',
})
export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}