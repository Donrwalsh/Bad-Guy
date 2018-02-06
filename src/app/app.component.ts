import { Component, OnInit } from '@angular/core';
import { PlayerService } from './services/core/player.service';
import { SchemingService } from './services/scheming.service';
import { PrimaryLoopService } from './services/primary-loop.service';
import { NumbersService } from './services/core/numbers.service';
import { InventoryService } from './services/inventory.service';
import { TrainingService } from './services/training.service';
import { RecruitingService } from './services/recruiting.service';
import { OperatingService } from './services/operating.service';
import { Scheme } from './models/scheme';
import { Recruit } from './models/recruit';
import { Train } from './models/train';
import { CookieService } from 'ngx-cookie-service';
import { Base } from './base';

// Import the DataService
import { DataService } from './data.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Base implements OnInit {

  constructor(public cookieService: CookieService,
    public _player: PlayerService,
    public _numbers: NumbersService,
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
      console.log("Save Data Exists")
      //console.log(cookieService.get('save'));

      Base.EARNING_SCHEME_POINTS = cookieService.get('save')[0] === "1";
      console.log("Base.EARNING_SCHEME_POINTS set to " + String(cookieService.get('save')[0] === "1"));

      var marker = 0;
      this._dataService.getSchemes()
        .subscribe((res) => {
          var SchemeData = new Array();
          var level: string = "";
          var exp: string = "";
          for (var i = 0; i < res.length; i++) {  
            while (true) {
              marker++
              if (cookieService.get('save')[marker] != "z") { 
                level = level + cookieService.get('save')[marker]
              } else {
                break
              }
            }
            while (true) {
              marker++
              if (cookieService.get('save')[marker] != "z") { 
                exp = exp + cookieService.get('save')[marker]
              } else {
                break
              }
            }
            let newScheme = new Scheme(res[i].ref, res[i].name, res[i].description, res[i].flavor, res[i].tree);
            SchemeData.push(newScheme);
            console.log(level, exp);
            level = "";
            exp = "";
          }
          Base.SCHEMES = SchemeData;
        })
      


      


      //console.log(this.EARNING_SCHEME_POINTS);
    } else {
      console.log("Save Data Does Not Exist")
    }
    
    //Construct Scheme data from MongoDB
    this._dataService.getSchemes()
      .subscribe((res) => {
        var SchemeData = new Array();
        for (var i = 0; i < res.length; i++) {
          let newScheme = new Scheme(res[i].ref, res[i].name, res[i].description, res[i].flavor, res[i].tree);
          newScheme._player = this._player;
          newScheme._numbers = this._numbers;
          SchemeData.push(newScheme);
        }
        this._scheming.schemes = SchemeData;
      });
    
    //Construct Recruit data from Angular logic
    var RecruitData = new Array();
    for (var i = 0; i < _player.recruiting.length; i++) {
      let newRecruit = new Recruit(i);
      newRecruit._player = this._player;
      newRecruit._numbers = this._numbers;
      RecruitData.push(newRecruit);
    }
    this._recruiting.recruits = RecruitData;

    //Construct Train data from Angular logic
    var TrainData = new Array();
    for (var i = 0; i < _player.training.length; i++) {
      let newTrain = new Train(i);
      newTrain._player = this._player;
      newTrain._numbers = this._numbers;
      TrainData.push(newTrain);
    }
    this._training.trains = TrainData;

    this._dataService.getOperations()
      .subscribe(res => this._operating.operations = res)
  }

  ngOnInit() {

    setInterval(() => {
      this._loop.action();
    }, 10);
  }
}