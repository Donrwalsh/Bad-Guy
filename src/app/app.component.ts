import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/player.service';
import { SchemingService } from './services/scheming.service';
import { PrimaryLoopService } from './services/primary-loop.service';
import { InventoryService } from './services/inventory.service';
import { TrainingService } from './services/training.service';
import { RecruitingService } from './services/recruiting.service';
import { OperatingService } from './services/operating.service';

// Import the DataService
import { DataService } from './data.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public _player: PlayerService,
    public _loop: PrimaryLoopService,
    public _scheming: SchemingService,
    public _inventory: InventoryService,
    public _training: TrainingService,
    public _operating: OperatingService,
    public _recruiting: RecruitingService,
    private _dataService: DataService,
  ) {

    this._dataService.getSchemes()
      .subscribe(res => this._scheming.schemes = res);

    this._dataService.getOperations()
      .subscribe(res => this._operating.operations = res)
  }

  ticker: number = 0;
  betterTicker: number = 600;
  minute: boolean = false;

  schemes: Array<any>;

  ngOnInit() {

    setInterval(() => {
      this._loop.action();
    }, 10);
  }
}