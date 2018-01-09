import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/player.service';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public _player: PlayerService,
    private _dataService: DataService,
  ) {

    this._dataService.getSchemes()
      .subscribe(res => this.schemes = res);
  }

  ticker: number = 0;
  minute: boolean = false;

  schemes: Array<any>;

  selectScheme(scheme, id) {
    if (this._player.schemeLearnable(scheme)) {
      this._player.currentScheme = scheme;
      this._player.setCurrentSchemeLevel();
      this._player.earningSchemePoints = true;
    }
  }

  //Scheme action.
  scheme() {

    if (this._player.earningSchemePoints) {

      //Starting scheme points per second is 1
      var schemePointsHatched: number = 1;

      //Flip a coin
      var coinFlip = Math.random() >= 0.5;

      //Logic for Diabloical Genius, Nefarious Logic and Evil Certifications
      schemePointsHatched += this._player.schemes[0]['level'] < 6 ? this._player.schemes[0]['level'] : 5;
      if (this.minute) {
        schemePointsHatched += this._player.schemes[1]['level'] < 6 ? this._player.schemes[1]['level'] * 60 : 300;
      }
      if (coinFlip) {
        schemePointsHatched += this._player.schemes[2]['level'] < 6 ? this._player.schemes[2]['level'] * 2 : 10;
      }

      //Multipliers go here.

      //All Calculations done. Increment:
      this._player.schemes[this._player.currentScheme['ref']]['exp'] += schemePointsHatched;

      //Check and Level the Scheme
      if (this._player.currentSchemeJustLearned()) {
        this._player.levelCurrentScheme();
      }
    }
  }

  //currently only a single help wanted object is supported.
  hench() {
    if (this._player.helpWantedUnlocked) {
      if (this._player.helpWanted[0]['full']) {
        //Reset the full variable in case their capacity has changed.
        if (this._player.helpWantedCapacity != this._player.helpWanted[0]['currentStore']) {
          this._player.helpWanted[0]['full'] = false;
          this._player.helpWanted[0]['magicModulo'] = this.ticker % this._player.helpWantedRate == 0 ? this._player.helpWantedRate : (this.ticker % this._player.helpWantedRate) - 1;
          this._player.helpWantedRateLock = this._player.helpWantedRate;
        }
      }
      if (!this._player.helpWanted[0]['full']) {
        if (!(this._player.helpWanted[0]['magicModulo'] > -1)) {
          this._player.helpWanted[0]['magicModulo'] = this.ticker % this._player.helpWantedRate == 0 ? this._player.helpWantedRate : (this.ticker % this._player.helpWantedRate) - 1;
          this._player.helpWantedRateLock = this._player.helpWantedRate;
        } else {
          if (this._player.helpWanted[0]['magicModulo'] == this.ticker % this._player.helpWantedRateLock) {
            this._player.helpWanted[0]['currentStore']++;
            if (this._player.helpWantedCapacity == this._player.helpWanted[0]['currentStore']) {
              this._player.helpWanted[0]['full'] = true;
            }
          }
        }
        var sanityTickerNumber = this.ticker % this._player.helpWantedRateLock <= this._player.helpWanted[0]['magicModulo'] ? (this.ticker % this._player.helpWantedRateLock) + this._player.helpWantedRateLock : this.ticker % this._player.helpWantedRateLock;
        this._player.helpWanted[0]['percentage'] = Math.round(((sanityTickerNumber - this._player.helpWanted[0]['magicModulo']) / this._player.helpWantedRateLock) * 10000) / 100;

      }
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
            if (this._player.training[0]['capacity'] == this._player.training[0]['currentStore']) {
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
      this.ticker++;
      if (this.ticker % 60 == 0) {
        this.minute = true;
      }

      this.scheme();
      this.hench();
      this.train();

      this.minute = false;
    }, 1000);
  }
}