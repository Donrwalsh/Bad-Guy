import { Component } from '@angular/core';
import { DataService } from '../data.service';
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
    
}

