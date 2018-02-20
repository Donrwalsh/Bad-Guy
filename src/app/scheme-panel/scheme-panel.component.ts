import { Component } from '@angular/core';
import { SchemingService } from '../services/scheming.service'
import { Base } from '../base';
import { BaseService } from "../services/base.service";

@Component({
    selector: 'scheme-panel',
    templateUrl: './scheme-panel.component.html',
    styleUrls: ['./scheme-panel.component.scss', '../app.component.scss'],
})
export class SchemePanelComponent extends Base {

    constructor(public _scheming: SchemingService,
    public _base: BaseService) {
        super();
    }
    
    schemeCashAssign: number = 0;
    investingCash: boolean = false;

    onInputChange(event: any) {
        this.schemeCashAssign = event.value;
    }

    investCash() {
        if (!this.investingCash) {
            this.investingCash = true;
            if (this.schemeCashAssign <= Base.CASH) {
                Base.CASH -= this.schemeCashAssign;
                this._scheming.previewScheme.cash += this.schemeCashAssign;
                this.schemeCashAssign = 0;
            }
            this.investingCash = false;
        }
    }

}

