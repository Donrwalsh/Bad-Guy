import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ticker: number = 0;
  minute: boolean = false;

  //Storing player scheme progress can be done in an array of number pairs. ref index of this array gives values needed.
  playerSchemeNumbers: Array<Object> = [
    { level: 5, exp: 0 },
    { level: 1, exp: 0 },
    { level: 1, exp: 0 }
  ]

  playerLairLevel: number = 0;

  playerCurrentScheme: Object = {};
  playerCurrentSchemeLevel: number;



  schemes: Array<any>;

  //Player variables
  schemePoints: number;
  schemeTarget: number;
  schemeLevel: number;
  earningSchemePoints: boolean = false;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {

    this._dataService.getSchemes()
      .subscribe(res => this.schemes = res);
  }

  getFA(id) {
    return this.schemes[id]['fa'];
  }

  isSchemeAvailable(id) {
    if (this.schemes[id]['lair_req'][this.playerSchemeNumbers[id]['level']] > this.playerLairLevel) {
      return 'color: grey';
    }
  }

  startGame() {
    this.earningSchemePoints = true;
    this.selectScheme(0);
  }

  selectScheme(id) {
    if (this.playerLairLevel >= this.schemes[id]['lair_req'][this.playerSchemeNumbers[id]['level']]) {
      this.schemePoints = this.playerSchemeNumbers[id]['exp'];
      this.playerCurrentScheme = this.schemes.find(x => x.ref == id);
      this.playerCurrentSchemeLevel = (this.playerSchemeNumbers[id]['level'] * 1) + 1
      this.schemeLevel = this.playerSchemeNumbers[id]['level'];
      this.schemeTarget = this.playerCurrentScheme['exp'][this.schemeLevel];
      this.earningSchemePoints = true;
    }
  }

  scheme() {

    if (this.earningSchemePoints) {
      //Flip a coin
      var coinFlip = Math.random() >= 0.5;
      //Starting scheme points per second is 1
      var baseModifier: number = 1;
      //First 5 levels of Diabolical Genius provide +1
      baseModifier += this.playerSchemeNumbers[0]['level'] < 6 ? this.playerSchemeNumbers[0]['level'] : 5;
      if (this.minute) {
        baseModifier += this.playerSchemeNumbers[1]['level'] < 6 ? this.playerSchemeNumbers[1]['level'] * 60 : 300;
      }
      if (coinFlip) {
        baseModifier += this.playerSchemeNumbers[2]['level'] < 6 ? this.playerSchemeNumbers[2]['level'] * 2 : 10;
      }

      this.playerSchemeNumbers[this.playerCurrentScheme['ref']]['exp'] += baseModifier;
      //Done this way to add multipliers later.

      //Logic for when a scheme is completed.
      if (this.playerSchemeNumbers[this.playerCurrentScheme['ref']]['exp'] >= this.schemeTarget) {
        var unlockedScheme = this.playerCurrentScheme['ref'];
        this.playerSchemeNumbers[unlockedScheme]['level']++;
        this.playerSchemeNumbers[unlockedScheme]['exp'] = 0;
        this.playerSchemeNumbers[this.playerCurrentScheme['ref']]['exp'] = 0;
        this.playerCurrentScheme = {};
        this.earningSchemePoints = false;

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

      this.minute = false;
    }, 1000);
  }
}