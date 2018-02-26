import { Component, OnInit } from '@angular/core';
import { SchemingService } from './services/scheming.service';
import { PrimaryLoopService } from './services/primary-loop.service';
import { InventoryService } from './services/inventory.service';
import { TrainingService } from './services/training.service';
import { LairService } from './services/lair.service';
import { RecruitingService } from './services/recruiting.service';
import { OperatingService } from './services/operating.service';
import { Scheme } from './models/scheme';
import { Recruit } from './models/recruit';
import { Train } from './models/train';
import { Operation } from './models/operation';
import { CookieService } from 'ngx-cookie-service';
import { Base } from './base';
import { BaseNum } from './base-num';
import { BaseService } from './services/base.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LairModal } from './modal/lair-modal/lair-modal.component';
import { SystemService } from './services/system.service';

// Import the DataService
import { DataService } from './services/data.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseNum implements OnInit {

  constructor(public cookieService: CookieService,
    public _system: SystemService,
    public _base: BaseService,
    public dialog: MatDialog,
    public _lair: LairService,
    public _loop: PrimaryLoopService,
    public _scheming: SchemingService,
    public _inventory: InventoryService,
    public _training: TrainingService,
    public _operating: OperatingService,
    public _recruiting: RecruitingService,
    private _dataService: DataService,
  ) {
    super();

    if (cookieService.check('save')) {
      _system.devLog("save data exists");
      _system.load(this.cookieService.get('save'));
    }   else {
      _system.devLog("save data does not exist")
      _system.devLog(this._system.freshGame);
      _system.load(this._system.freshGame);
    }
    
    this._dataService.getOperations()
      .subscribe(res => this._operating.operations = res)
  }

  openLairModal(): void {
    let dialogRef = this.dialog.open(LairModal, {
        width: '75%',
    });

    dialogRef.afterClosed().subscribe(result => {
        this._system.devLog('The dialog was closed');
    });
}


  ngOnInit() {

    setInterval(() => {
      this._loop.action();
    }, 100);
  }
}