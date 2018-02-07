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
import { BaseNum } from './base-num';
import { BaseService } from './services/base.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// Import the DataService
import { DataService } from './data.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseNum implements OnInit {

  constructor(public cookieService: CookieService,
    public _base: BaseService,
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
            let newScheme = new Scheme(
              res[i].ref, res[i].name, res[i].description, res[i].flavor, res[i].tree,
              Number(exp), Number(level), this.schemeLairReq[i], this.schemeExp[i]
            );
            SchemeData.push(newScheme);
            level = "";
            exp = "";
          }
          Base.SCHEMES = SchemeData;
          console.log("Base.SCHEMES populated:");
          console.log(Base.SCHEMES);

          var currentScheme = "";
          while (true) {
            marker++;
            if (cookieService.get('save')[marker] != "z") {
              currentScheme = currentScheme + cookieService.get('save')[marker];
            } else {
              break
            }
          }
          if (currentScheme != "-1") {
            Base.CURRENT_SCHEME = Base.SCHEMES[Number(currentScheme)];
            this._scheming.switchToCurrentSchemePreview();
            console.log("Set Base.CURRENT_SCHEME and switched the Preview:");
            console.log(Base.CURRENT_SCHEME);
          } else {
            console.log("No Current Scheme to Set")
          }

          var currentHench = "";
          while (true) {
            marker++;
            if (cookieService.get('save')[marker] != "z") {
              currentHench = currentHench + cookieService.get('save')[marker];
            } else {
              break
            }
          }
          Base.CURRENT_HENCHMEN = Number(currentHench);
          console.log("Current henchmen set to " + currentHench + ".")

          Base.INITIAL_LOAD_SCHEMES = false;
        });








      //console.log(this.EARNING_SCHEME_POINTS);
    } else {
      console.log("Save Data Does Not Exist")
      //Construct Scheme data from MongoDB
      this._dataService.getSchemes()
        .subscribe((res) => {
          var SchemeData = new Array();
          for (var i = 0; i < res.length; i++) {
            let newScheme = new Scheme(
              res[i].ref, res[i].name, res[i].description, res[i].flavor, res[i].tree,
              0, 0, this.schemeLairReq[i], this.schemeExp[i]
            );
            SchemeData.push(newScheme);
          }
          Base.SCHEMES = SchemeData;
          console.log("Base.SCHEMES populated:");
          console.log(Base.SCHEMES);
          console.log("No Current Scheme to Set")
          Base.CURRENT_HENCHMEN = 0;
          console.log("Current henchmen set to 0.")


          Base.INITIAL_LOAD_SCHEMES = false;


        });
    }




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
    }, 100);
  }
}