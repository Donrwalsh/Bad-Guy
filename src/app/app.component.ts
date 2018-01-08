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

  hench() {
    if (this._player.helpWantedUnlocked) {
      if (!this._player.helpWanted[0]['full']) {
        if (!(this._player.helpWanted[0]['magicModulo'] > -1)) {
          this._player.helpWanted[0]['magicModulo'] = this.ticker % this._player.helpWantedRate == 0 ? this._player.helpWantedRate : (this.ticker % this._player.helpWantedRate) - 1;
          this._player.helpWantedRateLock = this._player.helpWantedRate;
        } else {
          if (this._player.helpWanted[0]['magicModulo'] == this.ticker % this._player.helpWantedRateLock) {
            this._player.helpWanted[0]['currentStore']++;
            if (this._player.helpWanted[0]['capacity'] == this._player.helpWanted[0]['currentStore']) {
              this._player.helpWanted[0]['full'] = true;
            }
            //The Help Wanted Ad just completed a cycle.

            //Check if there is another slot available, if there is, do another cycle and hold one henchman to be collected.

            //If there is not another slot available, hold at 100% until collected.
          }
        }
        var sanityTickerNumber = this.ticker % this._player.helpWantedRateLock <= this._player.helpWanted[0]['magicModulo'] ? (this.ticker % this._player.helpWantedRateLock) + this._player.helpWantedRateLock : this.ticker % this._player.helpWantedRateLock;
        this._player.helpWanted[0]['percentage'] = Math.round(((sanityTickerNumber - this._player.helpWanted[0]['magicModulo']) / this._player.helpWantedRateLock) * 10000) / 100;
        

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

      this.minute = false;
    }, 100);
  }
}