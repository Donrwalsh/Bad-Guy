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

  

  train() {
    if (this._player.guardTrainingUnlocked) {
      if (this._player.isGuardTrainingHappening) {
        if (this._player.training[0]['full']) {
          if (this._player.guardTrainingCapacity != this._player.training[0]['currentStore']) {
            this._player.training[0]['full'] = false;
            this._player.training[0]['magicModulo'] = this.ticker % this._player.guardTrainingRate == 0 ? this._player.guardTrainingRate : (this.ticker % this._player.guardTrainingRate) - 1;
            this._player.guardTrainingRateLock = this._player.guardTrainingRate;
          }
        }
        if (!(this._player.training[0]['magicModulo'] > -1)) {
          this._player.training[0]['magicModulo'] = this.ticker % this._player.guardTrainingRate == 0 ? this._player.guardTrainingRate : (this.ticker % this._player.guardTrainingRate) - 1;
          this._player.guardTrainingRateLock = this._player.guardTrainingRate;
        } else {
          if (this._player.training[0]['magicModulo'] == this.ticker % this._player.guardTrainingRateLock) {
            this._player.training[0]['currentStore']++;
            this._player.training[0]['queued']--;
            if (this._player.training[0]['queued'] == 0) {
              this._player.isGuardTrainingHappening = false;
            }
            if (this._player.guardTrainingCapacity == this._player.training[0]['currentStore']) {
              this._player.training[0]['full'] = true;
            }
          }
          var sanityTickerNumber = this.ticker % this._player.guardTrainingRateLock <= this._player.training[0]['magicModulo'] ? (this.ticker % this._player.guardTrainingRateLock) + this._player.guardTrainingRateLock : this.ticker % this._player.guardTrainingRateLock;
          this._player.training[0]['percentage'] = Math.round(((sanityTickerNumber - this._player.training[0]['magicModulo']) / this._player.guardTrainingRateLock) * 10000) / 100;

        }
      }
    }
  }


  ngOnInit() {



    setInterval(() => {
      this._loop.action();


      this.ticker++;
      if (this.ticker % 60 == 0) {
        this.minute = true;
      }

      this.train();

      this.minute = false;
    }, 100);
  }
}