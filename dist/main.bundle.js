webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-panel\" noselect>\n    <h4 style=\"padding-bottom:.5rem;padding-top:.5rem;margin:0;text-align:center\">Training</h4>\n    <div class=\"left-side\">\n        <div style=\"height:1.2rem;width:40%;display:inline-block;\">\n            <p style=\"margin:0;width:100%;display:inline-block;\" class=\"training-display\">\n                <i style=\"padding-left:.5rem\" class=\"capacity-icon fa fa-archive\" aria-hidden=\"true\"></i>\n                {{_player.training[0]['currentStore']+_player.training[0]['queued']}}/{{_player.guardTrainingCapacity}}\n            </p>\n        </div>\n        <div style=\"height:1.2rem;width:40%;display:inline-block;\">\n            <p style=\"margin:0;width:100%;display:inline-block;\" class=\"training-display\">\n                <i style=\"padding-left:.5rem\" class=\"capacity-icon fa fa-clock-o\" aria-hidden=\"true\"></i>\n                5:00\n            </p>\n        </div>\n    </div>\n    <div class=\"add-column\">\n        <div class=\"add-block\">\n            <i class=\"add-to-queue-icon fa fa-plus\" *ngIf=\"_player.guardTrainingUnlocked\" aria-hidden=\"true\" (click)=\"trainAGuard()\"\n                [ngStyle]=\"{'visibility' : (_player.training[0]['queued'] + _player.training[0]['currentStore'] < _player.guardTrainingCapacity) && _player.currentHenchmen > 0 ? 'initial' : 'hidden', 'cursor':(_player.training[0]['queued'] + _player.training[0]['currentStore'] < _player.guardTrainingCapacity) && _player.currentHenchmen > 0 ? 'pointer' : 'default'}\"></i>\n        </div>\n    </div>\n    <div class=\"right-side noselect\">\n\n\n        <div class=\"guard-training-container noselect\" *ngIf=\"_player.guardTrainingUnlocked\" (click)=\"collectGuards()\" [ngStyle]=\"{'cursor': _player.training[0]['currentStore'] > 0 ? 'pointer' : 'default' }\">\n\n            <div class=\"guard-training-progress-bar\" [ngStyle]=\"{'width': 100*(_player.training[0]['percentage']/100) + '%'}\"></div>\n            <p class=\"guard-training-display noselect\">\n\n                <i class=\"guard-training-generation-icon fa fa-shield faa-slow faa-flash animated\" aria-hidden=\"true\" [ngStyle]=\"{'color': _player.training[0]['full'] ? '#ccddff' : 'black', 'visibility': _player.isGuardTrainingHappening ? 'initial' : 'hidden' }\"></i>\n                Guard\n                <i class=\"guard-training-collection-icon fa fa-shield faa-slow animated\" aria-hidden=\"true\" [ngStyle]=\"{'display': _player.training[0]['currentStore'] > 0 ? 'inline-block' : 'none' }\"\n                    [ngClass]=\"{'faa-tada': !_player.isGuardCapacityFull, 'faa-horizontal': _player.isGuardCapacityFull }\"></i>\n            </p>\n        </div>\n    </div>\n    <h4 style=\"padding-bottom:.5rem;padding-top:.5rem;margin:0;text-align:center\">Recruitment</h4>\n    <div class=\"left-side\">\n        <div style=\"height:1.2rem;width:40%;display:inline-block;\">\n            <p style=\"margin:0;width:100%;display:inline-block;\" class=\"training-display\">\n                <i style=\"padding-left:.5rem\" class=\"capacity-icon fa fa-archive\" aria-hidden=\"true\"></i>\n                {{_player.helpWanted[0]['currentStore']}}/{{_player.helpWantedCapacity}}\n            </p>\n        </div>\n        <div style=\"height:1.2rem;width:40%;display:inline-block;\">\n            <p style=\"margin:0;width:100%;display:inline-block;\" class=\"training-display\">\n                <i style=\"padding-left:.5rem\" class=\"capacity-icon fa fa-clock-o\" aria-hidden=\"true\"></i>\n                5:00\n            </p>\n        </div>\n    </div>\n    <div class=\"right-side noselect\">\n\n\n        <div class=\"help-wanted-container\" *ngIf=\"_player.helpWanted1Unlocked\" (click)=\"collectHelpWanted1()\" [ngStyle]=\"{'cursor': _player.helpWanted[0]['currentStore'] > 0 ? 'pointer' : 'default' }\">\n            <div class=\"help-wanted-progress-bar\" [ngStyle]=\"{'width': 100*(_player.helpWanted[0]['percentage']/100) + '%'}\"></div>\n            <p class=\"help-wanted-display noselect\">\n                <i class=\"help-wanted-generation-icon fa fa-user faa-slow faa-flash animated\" aria-hidden=\"true\" [ngStyle]=\"{'color': _player.helpWanted[0]['full'] ? '#ccddff' : 'black' }\"></i>\n                Help Wanted Ad\n                <i class=\"help-wanted-collection-icon fa fa-user faa-slow animated\" aria-hidden=\"true\" [ngStyle]=\"{'display': _player.helpWanted[0]['currentStore'] > 0 ? 'inline-block' : 'none' }\"\n                    [ngClass]=\"{'faa-tada': !_player.isHenchmenCapacityFull, 'faa-horizontal': _player.isHenchmenCapacityFull }\"></i>\n            </p>\n        </div>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".activity-panel {\n  display: inline-block;\n  width: 50%;\n  cursor: default; }\n  @media all and (max-width: 459px) {\n    .activity-panel {\n      width: 100%; } }\n  .activity-panel .left-side {\n    width: 45%;\n    display: inline-block;\n    cursor: default; }\n    .activity-panel .left-side .training-display {\n      height: 1.2rem; }\n  .activity-panel .add-column {\n    cursor: default;\n    width: 3%;\n    display: inline-block; }\n    .activity-panel .add-column .add-block {\n      height: 1.2rem; }\n    .activity-panel .add-column .add-to-queue-icon {\n      vertical-align: middle; }\n  .activity-panel .right-side {\n    width: 50%;\n    float: right;\n    display: block;\n    cursor: default; }\n    .activity-panel .right-side .guard-training-container {\n      width: 100%;\n      height: 1.2rem;\n      border: 1px solid #ccddff;\n      border-radius: 0px 15px 15px 0px;\n      display: inline-block;\n      position: relative; }\n      .activity-panel .right-side .guard-training-container .guard-training-progress-bar {\n        border-radius: 0px 15px 15px 0px;\n        position: absolute;\n        height: 1.2em;\n        background-color: #ccddff; }\n      @media all and (min-width: 640px) {\n        .activity-panel .right-side .guard-training-container .wide {\n          display: block; } }\n      @media all and (max-width: 639px) {\n        .activity-panel .right-side .guard-training-container .wide {\n          display: block; } }\n      @media all and (max-width: 459px) {\n        .activity-panel .right-side .guard-training-container .wide {\n          display: none; } }\n      @media all and (max-width: 399px) {\n        .activity-panel .right-side .guard-training-container .wide {\n          display: none; } }\n      @media all and (min-width: 640px) {\n        .activity-panel .right-side .guard-training-container .narrow {\n          display: none; } }\n      @media all and (max-width: 639px) {\n        .activity-panel .right-side .guard-training-container .narrow {\n          display: none; } }\n      @media all and (max-width: 459px) {\n        .activity-panel .right-side .guard-training-container .narrow {\n          display: block; } }\n      @media all and (max-width: 399px) {\n        .activity-panel .right-side .guard-training-container .narrow {\n          display: block; } }\n      .activity-panel .right-side .guard-training-container .guard-training-display {\n        font-size: .8em;\n        width: 100%;\n        margin: 0;\n        position: relative;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n        @media all and (max-width: 639px) {\n          .activity-panel .right-side .guard-training-container .guard-training-display {\n            font-size: .6em; } }\n        @media all and (max-width: 459px) {\n          .activity-panel .right-side .guard-training-container .guard-training-display {\n            font-size: .8em; } }\n        @media all and (max-width: 399px) {\n          .activity-panel .right-side .guard-training-container .guard-training-display {\n            font-size: .5em; } }\n        .activity-panel .right-side .guard-training-container .guard-training-display .guard-training-generation-icon {\n          min-width: 10px;\n          float: left;\n          margin-left: .5em;\n          margin-top: .3em;\n          margin-right: 1em; }\n          @media all and (max-width: 639px) {\n            .activity-panel .right-side .guard-training-container .guard-training-display .guard-training-generation-icon {\n              font-size: .9em;\n              margin-top: .25em;\n              margin-right: .8em; } }\n          @media all and (max-width: 459px) {\n            .activity-panel .right-side .guard-training-container .guard-training-display .guard-training-generation-icon {\n              margin-top: .25em; } }\n          @media all and (max-width: 399px) {\n            .activity-panel .right-side .guard-training-container .guard-training-display .guard-training-generation-icon {\n              font-size: .9em;\n              margin-top: .1em; } }\n        .activity-panel .right-side .guard-training-container .guard-training-display .guard-training-collection-icon {\n          float: right;\n          margin-right: .5em;\n          margin-top: .3em; }\n          @media all and (max-width: 639px) {\n            .activity-panel .right-side .guard-training-container .guard-training-display .guard-training-collection-icon {\n              font-size: .9em;\n              margin-top: .25em; } }\n          @media all and (max-width: 459px) {\n            .activity-panel .right-side .guard-training-container .guard-training-display .guard-training-collection-icon {\n              margin-top: .25em; } }\n          @media all and (max-width: 399px) {\n            .activity-panel .right-side .guard-training-container .guard-training-display .guard-training-collection-icon {\n              font-size: .9em;\n              margin-top: .1em; } }\n    .activity-panel .right-side .help-wanted-container {\n      margin-top: .1em;\n      width: 100%;\n      height: 1.2em;\n      border: 1px solid #ccddff;\n      border-radius: 0px 15px 15px 0px;\n      position: relative; }\n      .activity-panel .right-side .help-wanted-container .help-wanted-progress-bar {\n        border-radius: 0px 15px 15px 0px;\n        position: absolute;\n        height: 1.2em;\n        background-color: #ccddff; }\n      @media all and (min-width: 640px) {\n        .activity-panel .right-side .help-wanted-container .wide {\n          display: block; } }\n      @media all and (max-width: 639px) {\n        .activity-panel .right-side .help-wanted-container .wide {\n          display: block; } }\n      @media all and (max-width: 459px) {\n        .activity-panel .right-side .help-wanted-container .wide {\n          display: none; } }\n      @media all and (max-width: 399px) {\n        .activity-panel .right-side .help-wanted-container .wide {\n          display: none; } }\n      @media all and (min-width: 640px) {\n        .activity-panel .right-side .help-wanted-container .narrow {\n          display: none; } }\n      @media all and (max-width: 639px) {\n        .activity-panel .right-side .help-wanted-container .narrow {\n          display: none; } }\n      @media all and (max-width: 459px) {\n        .activity-panel .right-side .help-wanted-container .narrow {\n          display: block; } }\n      @media all and (max-width: 399px) {\n        .activity-panel .right-side .help-wanted-container .narrow {\n          display: block; } }\n      .activity-panel .right-side .help-wanted-container .help-wanted-display {\n        font-size: .8em;\n        width: 100%;\n        margin-top: .1em;\n        margin: 0;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        position: relative; }\n        @media all and (max-width: 639px) {\n          .activity-panel .right-side .help-wanted-container .help-wanted-display {\n            font-size: .6em;\n            margin-top: .2em; } }\n        @media all and (max-width: 459px) {\n          .activity-panel .right-side .help-wanted-container .help-wanted-display {\n            font-size: .8em;\n            margin-top: .1em; } }\n        @media all and (max-width: 399px) {\n          .activity-panel .right-side .help-wanted-container .help-wanted-display {\n            font-size: .5em;\n            margin-top: .4em; } }\n        .activity-panel .right-side .help-wanted-container .help-wanted-display .help-wanted-generation-icon {\n          min-width: 10px;\n          float: left;\n          margin-left: .5em;\n          margin-top: .3em;\n          margin-right: 1em; }\n          @media all and (max-width: 639px) {\n            .activity-panel .right-side .help-wanted-container .help-wanted-display .help-wanted-generation-icon {\n              font-size: .9em;\n              margin-top: .25em;\n              margin-right: .8em; } }\n          @media all and (max-width: 459px) {\n            .activity-panel .right-side .help-wanted-container .help-wanted-display .help-wanted-generation-icon {\n              margin-top: .25em; } }\n          @media all and (max-width: 399px) {\n            .activity-panel .right-side .help-wanted-container .help-wanted-display .help-wanted-generation-icon {\n              font-size: .9em;\n              margin-top: .1em; } }\n        .activity-panel .right-side .help-wanted-container .help-wanted-display .help-wanted-collection-icon {\n          float: right;\n          margin-right: .5em;\n          margin-top: .3em; }\n          @media all and (max-width: 639px) {\n            .activity-panel .right-side .help-wanted-container .help-wanted-display .help-wanted-collection-icon {\n              font-size: .9em;\n              margin-top: .25em; } }\n          @media all and (max-width: 459px) {\n            .activity-panel .right-side .help-wanted-container .help-wanted-display .help-wanted-collection-icon {\n              margin-top: .25em; } }\n          @media all and (max-width: 399px) {\n            .activity-panel .right-side .help-wanted-container .help-wanted-display .help-wanted-collection-icon {\n              font-size: .9em;\n              margin-top: .1em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityPanelComponent = (function () {
    function ActivityPanelComponent(_player) {
        this._player = _player;
        this.collectingHenchmen = false;
        this.queueingAGuard = false;
        this.collectingGuards = false;
    }
    ActivityPanelComponent.prototype.collectHelpWanted1 = function () {
        if (this._player.helpWanted[0]['currentStore'] > 0) {
            if (!this.collectingHenchmen) {
                this.collectingHenchmen = true;
                this._player.currentHenchmen += this._player.helpWanted[0]['currentStore'];
                if (this._player.currentHenchmen > this._player.henchmenCapacity) {
                    this._player.helpWanted[0]['currentStore'] = this._player.currentHenchmen - this._player.henchmenCapacity;
                    this._player.currentHenchmen = this._player.henchmenCapacity;
                    //This is currently busted.
                    if (this._player.helpWanted[0]['full']) {
                        this._player.helpWanted[0]['magicModulo'] = -1;
                    }
                    this._player.helpWanted[0]['full'] = this._player.helpWanted[0]['currentStore'] == this._player.helpWanted[0]['capacity'];
                }
                else {
                    this._player.helpWanted[0]['currentStore'] = 0;
                    if (this._player.helpWanted[0]['full']) {
                        this._player.helpWanted[0]['magicModulo'] = -1;
                    }
                    this._player.helpWanted[0]['full'] = false;
                    this._player.helpWanted[0]['percentage'] = 0;
                }
                this.collectingHenchmen = false;
            }
        }
    };
    ActivityPanelComponent.prototype.trainAGuard = function () {
        if (this._player.currentHenchmen > 0) {
            if (!this.queueingAGuard) {
                if (this._player.training[0]['queued'] + this._player.training[0]['currentStore'] < this._player.guardTrainingCapacity) {
                    this.queueingAGuard = true;
                    this._player.isGuardTrainingHappening = true;
                    this._player.currentHenchmen -= 1;
                    this._player.training[0]['queued'] += 1;
                    this.queueingAGuard = false;
                }
            }
        }
    };
    ActivityPanelComponent.prototype.collectGuards = function () {
        if (this._player.training[0]['currentStore'] > 0) {
            if (!this.collectingGuards) {
                this.collectingGuards = true;
                this._player.currentGuards += this._player.training[0]['currentStore'];
                if (this._player.currentGuards > this._player.guardCapacity) {
                    this._player.training[0]['currentStore'] = this._player.currentGuards - this._player.guardCapacity;
                    this._player.currentGuards = this._player.guardCapacity;
                    if (this._player.training[0]['full']) {
                        this._player.training[0]['magicModulo'] = -1;
                    }
                    this._player.training[0]['full'] = this._player.training[0]['currentStore'] == this._player.training[0]['capacity'];
                }
                else {
                    this._player.training[0]['currentStore'] = 0;
                    if (this._player.training[0]['full']) {
                        this._player.training[0]['magicModulo'] = -1;
                    }
                    this._player.training[0]['full'] = false;
                    this._player.training[0]['percentage'] = 0;
                }
                this.collectingGuards = false;
            }
        }
    };
    return ActivityPanelComponent;
}());
ActivityPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'activity-panel',
        template: __webpack_require__("../../../../../src/app/activity-panel/activity-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/activity-panel/activity-panel.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], ActivityPanelComponent);

var _a;
//# sourceMappingURL=activity-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-panel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPanelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_panel_component__ = __webpack_require__("../../../../../src/app/activity-panel/activity-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivityPanelModule = (function () {
    function ActivityPanelModule() {
    }
    return ActivityPanelModule;
}());
ActivityPanelModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__activity_panel_component__["a" /* ActivityPanelComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__activity_panel_component__["a" /* ActivityPanelComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: []
    })
], ActivityPanelModule);

//# sourceMappingURL=activity-panel.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header></header>\n<div class=\"skulls_pattern\">\n  <activity-panel></activity-panel>\n  <div style=\"float:right;width:50%;text-align:center;\">\n    \n    <h2 style=\"margin-top:0;\">Available Schemes:</h2>\n    <div style=\"display:inline-block;\" *ngFor=\"let scheme of schemes; let i = index\">\n      <button style=\"text-align: center; border: 1px solid green; display:inline; cursor: pointer;margin:.5em;\" [disabled]=\"scheme['lair_req'][this._player.schemes[i]['level']] > this._player.lairLevel\"\n        (click)=\"selectScheme(scheme, i)\">\n        <p>\n          <i class=\"fa {{scheme.fa}}\" aria-hidden=\"true\"></i>\n          <strong>{{scheme.name}}</strong> {{(_player.schemes[i]['level']*1) + 1}}\n          <br>\n          <span>{{_player.schemes[i]['exp']}}/{{scheme['exp'][_player.schemes[i]['level']*1]}}</span>\n        </p>\n\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skulls_pattern {\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  height: 80vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__ = __webpack_require__("../../../../../src/app/services/scheming.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_primary_loop_service__ = __webpack_require__("../../../../../src/app/services/primary-loop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Import the DataService

var AppComponent = (function () {
    function AppComponent(_player, _loop, _scheming, _dataService) {
        var _this = this;
        this._player = _player;
        this._loop = _loop;
        this._scheming = _scheming;
        this._dataService = _dataService;
        this.ticker = 0;
        this.betterTicker = 600;
        this.minute = false;
        this._dataService.getSchemes()
            .subscribe(function (res) { return _this.schemes = res; });
    }
    AppComponent.prototype.selectScheme = function (scheme, id) {
        if (this._scheming.schemeLearnable(scheme)) {
            this._scheming.currentScheme = scheme;
            this._scheming.setCurrentSchemeLevel();
            this._scheming.earningSchemePoints = true;
        }
    };
    //currently only a single help wanted object is supported.
    AppComponent.prototype.hench = function () {
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
                }
                else {
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
    };
    AppComponent.prototype.train = function () {
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
                }
                else {
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
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this._loop.action();
            _this.ticker++;
            if (_this.ticker % 60 == 0) {
                _this.minute = true;
            }
            _this.hench();
            _this.train();
            _this.minute = false;
        }, 100);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_primary_loop_service__["a" /* PrimaryLoopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_primary_loop_service__["a" /* PrimaryLoopService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_primary_loop_service__ = __webpack_require__("../../../../../src/app/services/primary-loop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_scheming_service__ = __webpack_require__("../../../../../src/app/services/scheming.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scheme_panel_scheme_panel_module__ = __webpack_require__("../../../../../src/app/scheme-panel/scheme-panel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activity_panel_activity_panel_module__ = __webpack_require__("../../../../../src/app/activity-panel/activity-panel.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_9__scheme_panel_scheme_panel_module__["a" /* SchemePanelModule */],
            __WEBPACK_IMPORTED_MODULE_10__activity_panel_activity_panel_module__["a" /* ActivityPanelModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__services_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_7__services_scheming_service__["a" /* SchemingService */],
            __WEBPACK_IMPORTED_MODULE_6__services_primary_loop_service__["a" /* PrimaryLoopService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getSchemes = function () {
        var _this = this;
        return this._http.get("/api/schemes")
            .map(function (result) { return _this.result = result.json().data; });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"resources\">\n        <i class=\"henchmen fa fa-users\" aria-hidden=\"true\"></i>\n        <p class=\"henchmen-readout\">{{_player.currentHenchmen}}/{{_player.henchmenCapacity}}</p>\n        <i class=\"guard fa fa-shield\" aria-hidden=\"true\"></i>\n        <p class=\"guard-readout\">{{_player.currentGuards}}/{{_player.guardCapacity}}</p>\n    </div>\n    <div>\n        <h1 class=\"title\">Bad Guy</h1>\n    </div>\n    <div class=\"scheme\" (mouseenter)=\"showSchemeFlyout = true;\" (mouseleave)=\"showSchemeFlyout = false;\">\n        <div *ngIf=\"_scheming.earningSchemePoints\">\n            <h5 class=\"status-text\">Scheming</h5>\n            <div class=\"scheme-bar-container\" [ngStyle]=\"{'border' : '1px solid ' + _scheming.currentScheme.color }\">\n                <div class=\"scheme-progress-bar\" [ngStyle]=\"{'width': _scheming.currentSchemePercentage + '%', 'background-color' : _scheming.currentScheme.color}\"></div>\n                <i class=\"scheme-icon fa {{_scheming.currentScheme.fa}}\" aria-hidden=\"true\"></i>\n            </div>\n        </div>\n        <div *ngIf=\"!_scheming.earningSchemePoints\">\n            <h5 class=\"status-text\">Not Scheming</h5>\n            <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw\"></i>\n        </div>\n    </div>\n</div>\n\n<div class=\"scheme-flyout\" *ngIf=\"_scheming.earningSchemePoints;\" [@popOverState]=\"stateName\" [ngStyle]=\"{'background-color' : _scheming.currentScheme.flyout_color}\">\n    <div class=\"inner-content\">\n        <i class=\"scheme-icon fa {{_scheming.currentScheme.fa}}\" aria-hidden=\"true\"></i>\n        <h4 class=\"scheme-name\">{{_scheming.currentScheme.name}} {{_scheming.currentSchemeLevel > 1 ? _scheming.currentSchemeLevel : ''}}</h4>\n        <h5 class=\"benefit-header\">Benefit: </h5>\n        <h6 class=\"benefit-text\">{{_scheming.currentScheme.description[_scheming.currentSchemeLevel-1]}} </h6>\n        <h6 class=\"flavor-text\">{{_scheming.currentScheme.flavor[_scheming.currentSchemeLevel-1]}}</h6>\n        <p class=\"scheme-exp\"> {{_scheming.currentSchemeEXP}}/{{_scheming.currentSchemeEXPTarget}}</p>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E\");\n  height: 4rem; }\n  .header .resources {\n    width: 35%; }\n    .header .resources .henchmen {\n      margin-top: .5rem;\n      margin-left: .5rem; }\n    .header .resources .henchmen-readout {\n      display: inline; }\n    .header .resources .guard {\n      margin-top: .5rem;\n      margin-left: .5rem; }\n    .header .resources .guard-readout {\n      display: inline; }\n  .header .title {\n    text-align: center;\n    position: absolute;\n    top: .5rem;\n    right: 40%;\n    left: 40%;\n    width: 20%;\n    margin: 0; }\n  .header .scheme {\n    position: absolute;\n    top: 0px;\n    right: .5rem;\n    height: 4rem;\n    width: 35%;\n    text-align: center;\n    border-radius: 5px;\n    cursor: pointer; }\n    .header .scheme .status-text {\n      margin-top: .1rem;\n      margin-bottom: .2rem; }\n    .header .scheme .scheme-bar-container {\n      margin-top: .25rem;\n      text-align: center;\n      display: inline-block;\n      width: 100%;\n      position: relative;\n      height: 2rem;\n      border-radius: 5px; }\n      .header .scheme .scheme-bar-container .scheme-progress-bar {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        height: 2rem; }\n      .header .scheme .scheme-bar-container .scheme-icon {\n        position: relative;\n        font-size: 1.5rem;\n        padding-top: .125rem; }\n\n.scheme-flyout {\n  text-align: center;\n  width: 25%;\n  background-color: pink;\n  position: absolute;\n  right: 0;\n  pointer-events: none; }\n  .scheme-flyout .inner-content {\n    margin: .5rem; }\n    .scheme-flyout .inner-content .scheme-icon {\n      position: relative; }\n    .scheme-flyout .inner-content .scheme-name {\n      margin: .1rem;\n      display: inline; }\n    .scheme-flyout .inner-content .benefit-header {\n      text-align: left;\n      margin: 0;\n      padding-top: 1rem; }\n    .scheme-flyout .inner-content .benefit-text {\n      text-align: left;\n      margin: 0; }\n    .scheme-flyout .inner-content .flavor-text {\n      text-align: left;\n      margin: .1rem;\n      padding-top: 1rem;\n      font-style: italic; }\n    .scheme-flyout .inner-content .scheme-exp {\n      margin-top: .25rem;\n      margin-bottom: 0; }\n\n@media all and (min-width: 640px) {\n  .title {\n    font-size: 2rem; } }\n\n@media all and (max-width: 639px) {\n  .title {\n    font-size: 1.5rem; } }\n\n@media all and (max-width: 459px) {\n  .title {\n    font-size: 1.25rem; } }\n\n@media all and (max-width: 399px) {\n  .title {\n    font-size: 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__ = __webpack_require__("../../../../../src/app/services/scheming.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(_player, _scheming) {
        this._player = _player;
        this._scheming = _scheming;
        this.showSchemeFlyout = false;
    }
    Object.defineProperty(HeaderComponent.prototype, "stateName", {
        get: function () {
            return this.showSchemeFlyout ? 'show' : 'hide';
        },
        enumerable: true,
        configurable: true
    });
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('popOverState', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    opacity: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('1200ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('2000ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: []
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/app/scheme-panel/scheme-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:pink;position:absolute;width:40%;height:100%;right:0;\">\n    <div style=\"width:10%;height:20%;background-color:grey;\">\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/scheme-panel/scheme-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scheme-panel/scheme-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchemePanelComponent = (function () {
    function SchemePanelComponent(_player) {
        this._player = _player;
    }
    return SchemePanelComponent;
}());
SchemePanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'scheme-panel',
        template: __webpack_require__("../../../../../src/app/scheme-panel/scheme-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/scheme-panel/scheme-panel.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], SchemePanelComponent);

var _a;
//# sourceMappingURL=scheme-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/scheme-panel/scheme-panel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemePanelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheme_panel_component__ = __webpack_require__("../../../../../src/app/scheme-panel/scheme-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SchemePanelModule = (function () {
    function SchemePanelModule() {
    }
    return SchemePanelModule;
}());
SchemePanelModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__scheme_panel_component__["a" /* SchemePanelComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__scheme_panel_component__["a" /* SchemePanelComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: []
    })
], SchemePanelModule);

//# sourceMappingURL=scheme-panel.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlayerService = (function () {
    function PlayerService() {
        //Not yet implemented, but used for scheme prereqs
        this.lairLevel = 0;
        //Primary scheme object. Stores level and accumulated exp toward next level by scheme ref.
        this.schemes = [
            { level: 0, exp: 0 },
            { level: 0, exp: 0 },
            { level: 20, exp: 0 },
            { level: 0, exp: 0 },
            { level: 0, exp: 0 },
            { level: 0, exp: 0 }
        ];
        //*****************************************************************************************
        //Henchmen
        this.currentHenchmen = 0;
        this.helpWanted = [
            { currentStore: 0,
                percentage: 0,
                magicModulo: -1,
                full: false,
                capacity: this.helpWantedCapacity,
                unlocked: this.helpWanted1Unlocked }
        ];
        this.isGuardTrainingHappening = false;
        this.currentGuards = 0;
        this.training = [
            { currentStore: 0,
                percentage: 0,
                magicModulo: -1,
                full: false,
                capacity: this.guardTrainingCapacity,
                unlocked: this.guardTrainingUnlocked,
                queued: 0 }
        ];
    }
    Object.defineProperty(PlayerService.prototype, "henchmenCapacity", {
        get: function () {
            //Base capacity is 10
            var capacity = 10;
            //Henchman Lodging
            var lodgingMod = 0;
            for (var i = 0; i < this.schemes[5]['level']; i++) {
                if (i < 2) {
                    lodgingMod += 5;
                }
                else if (i > 1 && i < 4) {
                    lodgingMod += 10;
                }
                else if (i == 4) {
                    lodgingMod += 20;
                }
                else if (i == 5) {
                    lodgingMod += 50;
                }
            }
            capacity += lodgingMod;
            return capacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "isHenchmenCapacityFull", {
        get: function () {
            return this.currentHenchmen == this.henchmenCapacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "helpWantedUnlocked", {
        //Recruitment Object - Help Wanted
        get: function () {
            return this.schemes[3]['level'] > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "helpWanted1Unlocked", {
        get: function () {
            return this.schemes[3]['level'] > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "helpWantedCapacity", {
        get: function () {
            var capacity = 1;
            if (this.schemes[3]['level'] >= 3) {
                capacity += 2;
            }
            if (this.schemes[3]['level'] >= 5) {
                capacity += 7;
            }
            return capacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "helpWantedRate", {
        get: function () {
            var rate = 60;
            if (this.schemes[3]['level'] >= 2) {
                rate -= 15;
            }
            if (this.schemes[3]['level'] >= 4) {
                rate -= 15;
            }
            return rate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "guardTrainingUnlocked", {
        get: function () {
            return this.schemes[4]['level'] >= 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "guardTrainingCapacity", {
        get: function () {
            var capacity = 1;
            if (this.schemes[4]['level'] >= 2) {
                capacity += 4;
            }
            return capacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "guardCapacity", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "guardTrainingRate", {
        get: function () {
            return 500;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerService.prototype, "isGuardCapacityFull", {
        get: function () {
            return this.currentGuards == this.guardCapacity;
        },
        enumerable: true,
        configurable: true
    });
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], PlayerService);

//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/primary-loop.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimaryLoopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheming_service__ = __webpack_require__("../../../../../src/app/services/scheming.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//All loop related activities. Called by app.component and nowhere else.
var PrimaryLoopService = (function () {
    function PrimaryLoopService(_player, _scheming) {
        this._player = _player;
        this._scheming = _scheming;
        //Flow logic is 1. Scheme 2. Recruit
        //Saved Variables
        //Ticker set at one minute (@100 ms/s) for now.
        this.ticker = 600;
        //Duplicate of above for replacement events.
        this.defaultTicker = 600;
    }
    //Events that occur every tick
    PrimaryLoopService.prototype.tick = function () {
        if (this._scheming.earningSchemePoints) {
            this._scheming.earnSchemePoints(this._scheming.schemePointsHatchedThisTick);
        }
    };
    //Events that occur every second
    PrimaryLoopService.prototype.second = function () {
        if (this._scheming.earningSchemePoints) {
            this._scheming.earnSchemePoints(this._scheming.schemePointsHatchedThisSecond);
        }
    };
    //Events that occur every minute
    PrimaryLoopService.prototype.minute = function () {
        if (this._scheming.earningSchemePoints) {
            this._scheming.earnSchemePoints(this._scheming.schemePointsHatchedThisMinute);
        }
    };
    //This event happens at every iteration of the main loop.
    PrimaryLoopService.prototype.action = function () {
        this.ticker--;
        if (this.ticker == 0) {
            this.ticker = this.defaultTicker;
        }
        this.tick();
        if (this.ticker % 10 == 0) {
            this.second();
        }
        if (this.ticker % 600 == 0) {
            this.minute();
        }
    };
    return PrimaryLoopService;
}());
PrimaryLoopService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__scheming_service__["a" /* SchemingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__scheming_service__["a" /* SchemingService */]) === "function" && _b || Object])
], PrimaryLoopService);

var _a, _b;
//# sourceMappingURL=primary-loop.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/scheming.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchemingService = (function () {
    function SchemingService(_player) {
        this._player = _player;
        //*****************************************************************************************
        //Schemes
        this.currentScheme = {};
        this.currentSchemeLevel = 0;
        this.earningSchemePoints = false;
    }
    //Belongs elsewhere.
    SchemingService.prototype.coinFlip = function (times) {
        var successes = 0;
        for (var _i = 0; _i < times; _i++) {
            if (Math.random() >= 0.5) {
                successes++;
            }
        }
        return successes;
    };
    //Scheme calculation setters
    SchemingService.prototype.earnSchemePoints = function (num) {
        this._player.schemes[this.currentScheme['ref']]['exp'] += num;
        if (this._player.schemes[this.currentScheme['ref']]['exp'] >= this.currentScheme['exp'][this._player.schemes[this.currentScheme['ref']]['level']]) {
            this._player.schemes[this.currentScheme['ref']]['level']++;
            this._player.schemes[this.currentScheme['ref']]['exp'] = 0;
            this.currentScheme = {};
            this.earningSchemePoints = false;
        }
    };
    Object.defineProperty(SchemingService.prototype, "schemePointsHatchedThisTick", {
        //Scheme calculation getters
        get: function () {
            //Starting scheme points per tick is 0
            var hatched = 0;
            //Evil Research increases scheme points per tick by flipping coins
            var successes = this.coinFlip(6);
            for (var _i = 0; _i < this._player.schemes[2]['level']; _i++) {
                if (_i < 5) {
                    hatched += successes >= 5 ? 1 : 0;
                }
                if (_i > 4 && _i < 10) {
                    hatched += successes >= 5 ? 2 : 0;
                }
                if (_i > 9 && _i < 15) {
                    hatched += successes >= 5 ? 5 : 0;
                }
                if (_i > 14 && _i < 20) {
                    hatched += successes > -5 ? 10 : 0;
                }
            }
            return hatched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "schemePointsHatchedThisSecond", {
        get: function () {
            //Starting scheme points per second is 1
            var hatched = 1;
            //Diabolic Genius increases scheme points per second
            for (var _i = 0; _i < this._player.schemes[0]['level']; _i++) {
                if (_i < 5) {
                    hatched += 1;
                }
                if (_i > 4 && _i < 10) {
                    hatched += 2;
                }
                if (_i > 9 && _i < 15) {
                    hatched += 5;
                }
                if (_i > 14) {
                    hatched += 10;
                }
            }
            return hatched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "schemePointsHatchedThisMinute", {
        get: function () {
            //Starting scheme points per minute is 0
            var hatched = 0;
            //Nefarious Logic increases scheme points per minute
            for (var _i = 0; _i < this._player.schemes[1]['level']; _i++) {
                if (_i < 5) {
                    hatched += 60;
                }
                if (_i > 4 && _i < 10) {
                    hatched += 120;
                }
                if (_i > 9 && _i < 15) {
                    hatched += 300;
                }
                if (_i > 14) {
                    hatched += 600;
                }
            }
            return hatched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "currentSchemeEXP", {
        get: function () {
            return this._player.schemes[this.currentScheme['ref']]['exp'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "currentSchemeEXPTarget", {
        get: function () {
            return this.currentScheme['exp'][this._player.schemes[this.currentScheme['ref']]['level'] * 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "currentSchemePercentage", {
        get: function () {
            return Math.round((this.currentSchemeEXP / this.currentSchemeEXPTarget) * 100);
        },
        enumerable: true,
        configurable: true
    });
    SchemingService.prototype.schemeLearnable = function (scheme) {
        return this._player.lairLevel >= scheme['lair_req'][this._player.schemes[scheme['ref']]['level']];
    };
    SchemingService.prototype.setCurrentSchemeLevel = function () {
        this.currentSchemeLevel = (this._player.schemes[this.currentScheme['ref']]['level'] * 1) + 1;
    };
    return SchemingService;
}());
SchemingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], SchemingService);

var _a;
//# sourceMappingURL=scheming.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** Evergreen browsers require these. **/


/**
 * Required to support Web Animations `@angular/animation`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map