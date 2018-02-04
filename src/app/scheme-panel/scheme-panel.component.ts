import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { SchemingService } from '../services/scheming.service'

@Component({
    selector: 'scheme-panel',
    templateUrl: './scheme-panel.component.html',
    styleUrls: ['./scheme-panel.component.scss', '../app.component.scss'],
})
export class SchemePanelComponent {

    constructor(public _scheming: SchemingService) {}
    
}

