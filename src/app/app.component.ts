import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/player.service';
import { SchemingService} from './services/scheming.service';
import { PrimaryLoopService } from './services/primary-loop.service';

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
    private _dataService: DataService,
  ) {

    this._dataService.getSchemes()
      .subscribe(res => this.schemes = res);
  }

  ticker: number = 0;
  betterTicker: number = 600;
  minute: boolean = false;

  schemes: Array<any>;

  selectScheme(scheme, id) {
    if (this._scheming.schemeLearnable(scheme)) {
      this._scheming.currentScheme = scheme;
      this._scheming.setCurrentSchemeLevel();
      this._scheming.earningSchemePoints = true;
    }
  }

  ngOnInit() {

    setInterval(() => {
      this._loop.action();
    }, 10);
  }
}