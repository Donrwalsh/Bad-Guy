import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/core/player.service';
import { SchemingService } from './services/scheming.service';
import { PrimaryLoopService } from './services/primary-loop.service';
import { NumbersService } from './services/core/numbers.service';
import { InventoryService } from './services/inventory.service';
import { TrainingService } from './services/training.service';
import { RecruitingService } from './services/recruiting.service';
import { OperatingService } from './services/operating.service';
import { Scheme } from './models/scheme'

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
    public _numbers: NumbersService,
    public _loop: PrimaryLoopService,
    public _scheming: SchemingService,
    public _inventory: InventoryService,
    public _training: TrainingService,
    public _operating: OperatingService,
    public _recruiting: RecruitingService,
    private _dataService: DataService,
  ) {

    this._dataService.getSchemes()
      .subscribe((res) => {
        var SchemeData = new Array();
        for (var i = 0; i < res.length; i++) {
          let newScheme = new Scheme(res[i].ref, res[i].name, res[i].description, res[i].flavor, res[i].tree);
          newScheme._player = this._player;
          newScheme._numbers = this._numbers;
          SchemeData.push( newScheme );
        }
        this._scheming.schemes = SchemeData;
      });

    this._dataService.getOperations()
      .subscribe(res =>  this._operating.operations = res)
  }

  ngOnInit() {

    setInterval(() => {
      this._loop.action();
    }, 100);
  }
}