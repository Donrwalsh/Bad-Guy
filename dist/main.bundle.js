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

module.exports = "<div class=\"activity-panel\">\n    <div class=\"henchmen-column\">\n        <p class=\"title\" *ngIf=\"_training.areAnyUnlocked()\">Training</p>\n        <div *ngFor=\"let Training of _player.training; index as i\">\n            <div class=\"left-padding\" *ngIf=\"_training.isUnlockedById(i)\"></div>\n            <div class=\"add-column\" *ngIf=\"_training.isUnlockedById(i)\">\n                <div class=\"add-block\">\n                    <i class=\"add-to-queue-icon fa fa-plus\" aria-hidden=\"true\" (click)=\"_training.trainById(i)\" [ngStyle]=\"addToQueueIconStyle(i)\"></i>\n                </div>\n            </div>\n            <div *ngIf=\"_training.isUnlockedById(i)\" class=\"progress-column\">\n                <div [ngClass]=\"containerClass(i, 'training')\" (click)=\"_training.collectById(i)\" [ngStyle]=\"containerStyle(i, 'training')\">\n                    <div [ngClass]=\"progressBarClass(i, 'training')\" [ngStyle]=\"styleProgressBar(i, 'training')\"></div>\n                    <p [ngClass]=\"displayClass(i, 'training')\">\n                        <i class=\"generation-icon fa faa-slow faa-flash animated {{_training.getFaById(i)}}\" aria-hidden=\"true\" [ngStyle]=\"collectingIconStyle(i, 'training')\"></i>\n                        {{_training.getUpgradeNameById(i)}}\n                        <i class=\"collection-icon fa faa-slow animated {{_training.getFaById(i)}}\" aria-hidden=\"true\" [ngStyle]=\"collectionIconStyle(i, 'training')\"\n                            [ngClass]=\"collectionIcon(i, 'training')\"></i>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <p class=\"title\" *ngIf=\"_recruiting.areAnyUnlocked()\">Recruitment</p>\n        <div *ngFor=\"let Recruiting of _player.recruiting; index as i\">\n            <div class=\"left-padding\"></div>\n            <div *ngIf=\"_recruiting.isUnlockedById(i)\" class=\"progress-no-add-column\">\n                <div [ngClass]=\"containerClass(i, 'recruiting')\" (click)=\"_recruiting.collectById(i)\" [ngStyle]=\"containerStyle(i, 'recruiting')\">\n                    <div [ngClass]=\"progressBarClass(i, 'recruiting')\" [ngStyle]=\"styleProgressBar(i, 'recruiting')\"></div>\n                    <p [ngClass]=\"displayClass(i, 'recruiting')\" class=\"help-wanted-display\">\n                        <i class=\"generation-icon fa faa-slow faa-flash animated {{_recruiting.getFaById(i)}}\" aria-hidden=\"true\" [ngStyle]=\"collectingIconStyle(i, 'recruiting')\"></i>\n                        {{_recruiting.getRecruitmentNameById(i)}}\n                        <i class=\"collection-icon fa faa-slow animated {{_recruiting.getFaById(i)}}\" aria-hidden=\"true\" [ngStyle]=\"collectionIconStyle(i, 'recruiting')\"\n                            [ngClass]=\"collectionIcon(i, 'recruiting')\"></i>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--In progress: -->\n    <div class=\"operations-column\" *ngIf=\"_operating.areAnyUnlocked()\">\n        <div class=\"left-padding\"></div>\n        <div class=\"routine-tab\" [ngStyle]=\"{'visibility': _operating.areRoutineOpsUnlocked() ? 'initial' : 'hidden'}\">\n            <i class=\"fa fa-certificate tab-icon\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"campaign-tab\" [ngStyle]=\"{'visibility': _operating.areCampaignOpsUnlocked() ? 'initial' : 'hidden'}\">\n            <i class=\"fa fa-book tab-icon\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"ascension-tab\" [ngStyle]=\"{'visibility': _operating.areAscensionOpsUnlocked() ? 'initial' : 'hidden'}\">\n            <i class=\"fa fa-rocket tab-icon\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"divider-5\"></div>\n        <div class=\"divider-5\"></div>\n        <div class=\"heists-row\" *ngIf=\"_player.schemes[6]['level'] > 0\">\n            <div class=\"column\" (click)=\"_operating.operationPreview(0)\" [ngStyle]=\"{'cursor': _player.operating[0]['available'] ? 'pointer' : 'initial' }\">\n                <i class=\"fa fa-usd\" aria-hidden=\"true\" [ngClass]=\"{'faa-tada' : _player.operating[0]['available'], 'faa-slow' : _player.operating[0]['available'], 'animated' : _player.operating[0]['available'] }\"\n                    [ngStyle]=\"{'color': _operating.getFaColorById(0)}\"></i>\n            </div>\n            <div class=\"column\">\n                <i class=\"fa fa-lock\" aria-hidden=\"true\" [ngStyle]=\"{'color': _operating.getFaColorById(1)}\"></i>\n            </div>\n            <div class=\"column\">\n                <i class=\"fa fa-lock\" aria-hidden=\"true\" [ngStyle]=\"{'color': _operating.getFaColorById(2)}\"></i>\n            </div>\n            <div class=\"column\">\n                <i class=\"fa fa-lock\" aria-hidden=\"true\" [ngStyle]=\"{'color': _operating.getFaColorById(3)}\"></i>\n            </div>\n            <div class=\"column\">\n                <i class=\"fa fa-lock\" aria-hidden=\"true\" [ngStyle]=\"{'color': _operating.getFaColorById(4)}\"></i>\n            </div>\n        </div>\n        <div class=\"divider-5\"></div>\n        <div *ngIf=\"_operating.showPreview\" class=\"operation-flyout\">\n            <div class=\"inner-content\" [ngStyle]=\"{'color': _operating.getFaColorByRarity(_operating.previewOperation['rarity'])}\">\n                <p class=\"operation-name\" style=\"width:95%\"><i class=\"operation-icon fa fa-usd\" aria-hidden=\"true\" style=\"margin-right:.2rem;\"></i>Steal Candy from Children. Sell Candy</p>\n                <div class=\"split\" style=\"margin-top:.5rem;display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:right;\">\n                        Requires:</p>\n                </div>\n                <div class=\"split\" style=\"display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:left;\">{{_operating.previewOperation['henchmen']}}\n                        <i class=\"flyout-icon fa fa-user\" aria-hidden=\"true\"></i>\n                    </p>\n                </div>\n                <div class=\"split\" style=\"display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:right;\">\n                        Risk:</p>\n                </div>\n                <div class=\"split\" style=\"display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:left;\">{{_operating.previewOperationRiskDisplay()}}%\n                    </p>\n                </div>\n                <div class=\"split\" style=\"display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:right;\">\n                        Rewards:</p>\n                </div>\n                <div class=\"split\" style=\"display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:left;\">{{_operating.previewOperation['reward']}}\n                        <i class=\"flyout-icon fa fa-money\" aria-hidden=\"true\"></i>\n                    </p>\n                </div>\n                <div class=\"split\" style=\"display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:right;\">\n                        Success:</p>\n                </div>\n                <div class=\"split\" style=\"display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:left;\">{{_operating.previewOperation['success']*100}}%\n                    </p>\n                </div>\n                <div class=\"split\" style=\"display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:right;\">\n                        Notoriety:</p>\n                </div>\n                <div class=\"split\" style=\"display:inline-block;width:48%\">\n                    <p class=\"flyout-text\" style=\"float:left;\">{{_operating.previewOperation['notoriety']}}\n                        <i class=\"flyout-icon fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n                    </p>\n                </div>\n                <p style=\"margin-left:7%;margin-right:2%;width:40%;margin:0 auto; margin-top: .5rem; border-radius: .5rem; border: 1px solid; display:inline-block;\">Operate</p>\n                <p style=\"margin-left:2%;margin-right:7%;width:40%;margin:0 auto; margin-top: .5rem; border-radius: .5rem; border: 1px solid; display:inline-block;\">Abandon</p>\n                <!--<p style=\"width:85%;margin:0 auto; margin-top: .5rem; border-radius: .5rem; border: 1px solid; display:inline-block;\">Upgrade</p>-->\n                \n                \n\n\n\n\n\n                \n                \n\n            </div>\n\n        </div>\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Henchmen Colors */\n/*Scheme Tree Colors */\n.activity-panel {\n  display: inline-block;\n  width: 50%;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  @media all and (max-width: 459px) {\n    .activity-panel {\n      width: 100%; } }\n  .activity-panel .henchmen-column {\n    width: 50%;\n    display: inline-block; }\n    .activity-panel .henchmen-column .title {\n      padding-bottom: .5rem;\n      padding-top: .5rem;\n      margin: 0;\n      text-align: center; }\n    .activity-panel .henchmen-column .left-padding {\n      width: 5%;\n      display: inline-block; }\n    .activity-panel .henchmen-column .add-column {\n      width: 5%;\n      vertical-align: middle;\n      display: inline-block; }\n      .activity-panel .henchmen-column .add-column .add-block {\n        height: 1.2rem; }\n    .activity-panel .henchmen-column .progress-column {\n      width: 75%;\n      display: inline-block; }\n      .activity-panel .henchmen-column .progress-column .training-container {\n        width: 100%;\n        height: 1.2rem;\n        border-radius: 0px 1rem 1rem 0px;\n        display: inline-block;\n        position: relative; }\n        .activity-panel .henchmen-column .progress-column .training-container .progress-bar {\n          border-radius: 0px 1rem 1rem 0px;\n          position: absolute;\n          height: 1.2em; }\n        .activity-panel .henchmen-column .progress-column .training-container .training-display {\n          font-size: .8em;\n          width: 100%;\n          margin: 0;\n          position: relative;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none;\n          height: 1.2rem; }\n          .activity-panel .henchmen-column .progress-column .training-container .training-display .generation-icon {\n            min-width: 10px;\n            float: left;\n            margin-left: .5em;\n            margin-top: .3em;\n            margin-right: 1em; }\n          .activity-panel .henchmen-column .progress-column .training-container .training-display .collection-icon {\n            float: right;\n            margin-right: .5em;\n            margin-top: .3em; }\n      .activity-panel .henchmen-column .progress-column .guard-training-container {\n        border: 1px solid #ccccff; }\n        .activity-panel .henchmen-column .progress-column .guard-training-container .guard-progress-bar {\n          background-color: #ccccff; }\n        .activity-panel .henchmen-column .progress-column .guard-training-container .guard-training-display {\n          color: #000099; }\n    .activity-panel .henchmen-column .progress-no-add-column {\n      width: 82%;\n      display: inline-block; }\n      .activity-panel .henchmen-column .progress-no-add-column .recruitment-container {\n        margin-top: .5em;\n        width: 100%;\n        height: 1.2em;\n        border-radius: 0px 15px 15px 0px;\n        position: relative; }\n        .activity-panel .henchmen-column .progress-no-add-column .recruitment-container .progress-bar {\n          border-radius: 0px 1rem 1rem 0px;\n          position: absolute;\n          height: 1.2em; }\n        .activity-panel .henchmen-column .progress-no-add-column .recruitment-container .recruitment-display {\n          font-size: .8em;\n          width: 100%;\n          margin-top: .1em;\n          margin: 0;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none;\n          position: relative; }\n          .activity-panel .henchmen-column .progress-no-add-column .recruitment-container .recruitment-display .generation-icon {\n            min-width: 10px;\n            float: left;\n            margin-left: .5em;\n            margin-top: .3em;\n            margin-right: 1em; }\n          .activity-panel .henchmen-column .progress-no-add-column .recruitment-container .recruitment-display .collection-icon {\n            float: right;\n            margin-right: .5em;\n            margin-top: .3em; }\n      .activity-panel .henchmen-column .progress-no-add-column .help-wanted-container {\n        border: 1px solid #ccddff; }\n        .activity-panel .henchmen-column .progress-no-add-column .help-wanted-container .help-wanted-progress-bar {\n          background-color: #ccddff; }\n        .activity-panel .henchmen-column .progress-no-add-column .help-wanted-container .help-wanted-display {\n          color: #003399; }\n  .activity-panel .operations-column {\n    width: 50%;\n    height: 300px;\n    float: right; }\n    .activity-panel .operations-column .left-padding {\n      width: 5%;\n      height: 2rem;\n      float: left; }\n    .activity-panel .operations-column .routine-tab {\n      text-align: center;\n      border-radius: 2rem 2rem 0 0;\n      width: 30%;\n      height: 2rem;\n      float: left;\n      background-color: #e6e6e6; }\n    .activity-panel .operations-column .campaign-tab {\n      text-align: center;\n      border-radius: 2rem 2rem 0 0;\n      width: 30%;\n      height: 2rem;\n      float: left;\n      background-color: #cceaff; }\n    .activity-panel .operations-column .ascension-tab {\n      text-align: center;\n      border-radius: 2rem 2rem 0 0;\n      width: 30%;\n      height: 2rem;\n      float: left;\n      background-color: #fffecc; }\n    .activity-panel .operations-column .divider-5 {\n      width: 5%;\n      height: 2rem;\n      float: left; }\n    .activity-panel .operations-column .heists-row {\n      width: 90%;\n      height: 3rem;\n      float: left;\n      background-color: #e6e6e6; }\n      .activity-panel .operations-column .heists-row .column {\n        text-align: center;\n        border-radius: .5rem;\n        border: 1px solid;\n        margin-left: 3%;\n        margin-top: .5rem;\n        float: left;\n        height: 2rem;\n        width: 15%; }\n        .activity-panel .operations-column .heists-row .column .fa {\n          font-size: 1.25rem;\n          margin-top: .375rem; }\n    .activity-panel .operations-column .operation-flyout {\n      text-align: center;\n      float: right;\n      margin-right: 5%;\n      width: 90%;\n      border-radius: 0 0 3rem 3rem;\n      cursor: default;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      background-color: #e6e6e6; }\n      .activity-panel .operations-column .operation-flyout .inner-content {\n        min-height: 9rem;\n        margin: 0 0 1rem 0; }\n        .activity-panel .operations-column .operation-flyout .inner-content .operation-name {\n          margin: .1rem;\n          font-size: 1rem;\n          display: block; }\n          .activity-panel .operations-column .operation-flyout .inner-content .operation-name .operation-icon {\n            position: relative;\n            font-size: 1rem; }\n        .activity-panel .operations-column .operation-flyout .inner-content .flyout-text {\n          margin: 0;\n          font-size: .8rem; }\n          .activity-panel .operations-column .operation-flyout .inner-content .flyout-text .flyout-icon {\n            position: relative;\n            font-size: .8rem;\n            margin-top: .3rem; }\n        .activity-panel .operations-column .operation-flyout .inner-content .secondary {\n          margin-top: .1rem; }\n\n.tab-icon {\n  margin-top: .5rem; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_recruiting_service__ = __webpack_require__("../../../../../src/app/services/recruiting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_training_service__ = __webpack_require__("../../../../../src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_operating_service__ = __webpack_require__("../../../../../src/app/services/operating.service.ts");
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
    function ActivityPanelComponent(_player, _recruiting, _inventory, _operating, _training) {
        this._player = _player;
        this._recruiting = _recruiting;
        this._inventory = _inventory;
        this._operating = _operating;
        this._training = _training;
    }
    ActivityPanelComponent.prototype.containerClass = function (id, type) {
        return {
            'recruitment-container': type == "recruiting",
            'training-container': type == "training",
            'help-wanted-container': type == "recruiting" && (id == 0 || id == 1),
            'guard-training-container': type == "training" && id == 0
        };
    };
    ActivityPanelComponent.prototype.progressBarClass = function (id, type) {
        return {
            'progress-bar': true,
            'help-wanted-progress-bar': type == "recruiting" && (id == 0 || id == 1),
            'guard-progress-bar': type == "training" && id == 0
        };
    };
    //This will break if more than 2 types are used.
    ActivityPanelComponent.prototype.styleProgressBar = function (id, type) {
        return {
            'width': type == 'recruiting' ? this._recruiting.getPercentageById(id) + '%' : this._training.getPercentageById(id) + '%'
        };
    };
    ActivityPanelComponent.prototype.displayClass = function (id, type) {
        return {
            'recruitment-display': type == "recruiting",
            'training-display': type == "training",
            'help-wanted-display': type == "recruiting" && (id == 0 || id == 1),
            'guard-training-display': type == "training" && id == 0
        };
    };
    ActivityPanelComponent.prototype.addToQueueIconStyle = function (id) {
        return {
            'visibility': this._training.canTrainById(id) ? 'initial' : 'hidden',
            'cursor': this._training.canTrainById(id) ? 'pointer' : 'default'
        };
    };
    ActivityPanelComponent.prototype.collectingIconStyle = function (id, type) {
        if (type == "training") {
            return { 'visibility': this._training.isTrainingById(0) ? 'initial' : 'hidden' };
        }
        else {
            return { 'visibility': this._recruiting.isRecruitingById(0) ? 'initial' : 'hidden' };
        }
    };
    ActivityPanelComponent.prototype.containerStyle = function (id, type) {
        if (type == "training") {
            return { 'cursor': this._player.training[id]['currentStore'] > 0 ? 'pointer' : 'default' };
        }
        else {
            return { 'cursor': this._player.recruiting[id]['currentStore'] > 0 ? 'pointer' : 'default' };
        }
    };
    ActivityPanelComponent.prototype.collectionIcon = function (id, type) {
        if (type == "training") {
            return {
                'faa-tada': !this._inventory.isHenchmenUpgradeFullById(id),
                'faa-horizontal': this._inventory.isHenchmenUpgradeFullById(id)
            };
        }
        else {
            return {
                'faa-tada': !this._inventory.isHenchmenCapacityFull,
                'faa-horizontal': this._inventory.isHenchmenCapacityFull,
            };
        }
    };
    ActivityPanelComponent.prototype.collectionIconStyle = function (id, type) {
        if (type == "training") {
            return {
                'display': this._player.training[id]['currentStore'] > 0 ? 'inline-block' : 'none'
            };
        }
        else {
            return {
                'display': this._player.recruiting[id]['currentStore'] > 0 ? 'inline-block' : 'none'
            };
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_recruiting_service__["a" /* RecruitingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_recruiting_service__["a" /* RecruitingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_inventory_service__["a" /* InventoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_operating_service__["a" /* OperatingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_operating_service__["a" /* OperatingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_training_service__["a" /* TrainingService */]) === "function" && _e || Object])
], ActivityPanelComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<header></header>\n<div class=\"skulls_pattern\">\n  <div class=\"resources-bar\" style=\"user-select:none;height:2rem;border-top:solid .75px\">\n    <div class=\"resource-tab\" style=\"margin-left:0.5rem;display:inline-block;border:1px solid #f2ccff;color:#bf00ff;border-radius:0 0 .5rem .5rem; padding-right: .2rem; padding-bottom: .2rem; padding-left: .2rem; border-top:none;\">\n      <i class=\"guard fa fa-home\" aria-hidden=\"true\"></i>\n      <p style=\"display:inline-block; margin:0;\" class=\"guard-readout\">Mom's Basement</p>\n    </div>\n    <div *ngIf=\"_recruiting.areAnyUnlocked()\" class=\"resource-tab\" style=\"margin-left:0.1rem;display:inline-block;border:1px solid #e6e6e6;border-radius:0 0 .5rem .5rem; padding-right: .2rem; padding-bottom: .2rem; padding-left: .2rem; border-top:none;\">\n      <i class=\"henchmen fa fa-users\" aria-hidden=\"true\"></i>\n      <p style=\"display:inline-block; margin:0;\" class=\"henchmen-readout\">{{_player.currentHenchmen}}/{{_inventory.henchmenCapacity}}</p>\n    </div>\n    <div *ngIf=\"_training.guardTrainingUnlocked\" class=\"resource-tab\" style=\"margin-left:0.1rem;display:inline-block;border:1px solid #ccddff;border-radius:0 0 .5rem .5rem; padding-right: .2rem; padding-bottom: .2rem; padding-left: .2rem; border-top:none;\">\n      <i class=\"guard fa fa-shield\" aria-hidden=\"true\"></i>\n      <p style=\"display:inline-block; margin:0;\" class=\"guard-readout\">{{_player.currentGuards}}/{{_inventory.guardCapacity}}</p>\n    </div>\n\n\n  </div>\n  <activity-panel></activity-panel>\n  <scheme-panel></scheme-panel>\n\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_training_service__ = __webpack_require__("../../../../../src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_recruiting_service__ = __webpack_require__("../../../../../src/app/services/recruiting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
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
    function AppComponent(_player, _loop, _scheming, _inventory, _training, _recruiting, _dataService) {
        var _this = this;
        this._player = _player;
        this._loop = _loop;
        this._scheming = _scheming;
        this._inventory = _inventory;
        this._training = _training;
        this._recruiting = _recruiting;
        this._dataService = _dataService;
        this.ticker = 0;
        this.betterTicker = 600;
        this.minute = false;
        this._dataService.getSchemes()
            .subscribe(function (res) { return _this._scheming.schemes = res; });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this._loop.action();
        }, 10);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_primary_loop_service__["a" /* PrimaryLoopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_primary_loop_service__["a" /* PrimaryLoopService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_inventory_service__["a" /* InventoryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_training_service__["a" /* TrainingService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_recruiting_service__["a" /* RecruitingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_recruiting_service__["a" /* RecruitingService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_training_service__ = __webpack_require__("../../../../../src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_recruiting_service__ = __webpack_require__("../../../../../src/app/services/recruiting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_operating_service__ = __webpack_require__("../../../../../src/app/services/operating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__scheme_panel_scheme_panel_module__ = __webpack_require__("../../../../../src/app/scheme-panel/scheme-panel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__activity_panel_activity_panel_module__ = __webpack_require__("../../../../../src/app/activity-panel/activity-panel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_core_numbers_service__ = __webpack_require__("../../../../../src/app/services/core/numbers.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_12__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_13__scheme_panel_scheme_panel_module__["a" /* SchemePanelModule */],
            __WEBPACK_IMPORTED_MODULE_14__activity_panel_activity_panel_module__["a" /* ActivityPanelModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__services_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_7__services_scheming_service__["a" /* SchemingService */],
            __WEBPACK_IMPORTED_MODULE_11__services_operating_service__["a" /* OperatingService */],
            __WEBPACK_IMPORTED_MODULE_10__services_recruiting_service__["a" /* RecruitingService */],
            __WEBPACK_IMPORTED_MODULE_9__services_training_service__["a" /* TrainingService */],
            __WEBPACK_IMPORTED_MODULE_8__services_inventory_service__["a" /* InventoryService */],
            __WEBPACK_IMPORTED_MODULE_6__services_primary_loop_service__["a" /* PrimaryLoopService */],
            __WEBPACK_IMPORTED_MODULE_15__services_core_numbers_service__["a" /* NumbersService */]
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

module.exports = "<div class=\"header\">\n    <div class=\"notoriety\"></div>\n    <div>\n        <p class=\"title\">Bad Guy</p>\n    </div>\n    <div class=\"scheme\" [ngStyle]=\"schemeStyle()\" (click)=\"_scheming.switchToCurrentSchemePreview()\">\n        <div *ngIf=\"_scheming.earningSchemePoints\">\n            <p class=\"status-text\">Scheming</p>\n            <div class=\"scheme-bar-container\" [ngClass]=\"schemeTreeClass()\">\n                <i class=\"scheme-icon fa {{_player.currentScheme.fa}}\" aria-hidden=\"true\"></i>\n                <div class=\"scheme-progress-bar\" [ngStyle]=\"schemeProgressBarStyle()\" [ngClass]=\"schemeTreeClass()\"></div>\n            </div>\n        </div>\n        <div *ngIf=\"!_scheming.earningSchemePoints\">\n            <p class=\"status-text\">Not Scheming</p>\n            <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw\"></i>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Henchmen Colors */\n/*Scheme Tree Colors */\n/* SVG Image Backgrounds */\n.header {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E\");\n  height: 4rem; }\n  .header .notoriety {\n    width: 35%; }\n  .header .title {\n    text-align: center;\n    position: absolute;\n    top: .5rem;\n    right: 40%;\n    left: 40%;\n    width: 20%;\n    margin: 0;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .header .scheme {\n    position: absolute;\n    top: 0px;\n    right: .5rem;\n    height: 4rem;\n    width: 35%;\n    text-align: center;\n    border-radius: 5px; }\n    .header .scheme .status-text {\n      font-size: .8rem;\n      margin-top: .1rem;\n      margin-bottom: .2rem;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n    .header .scheme .scheme-bar-container {\n      margin-top: .25rem;\n      text-align: center;\n      display: inline-block;\n      width: 100%;\n      position: relative;\n      height: 2rem;\n      border-radius: 0 .5rem .5rem 0; }\n      .header .scheme .scheme-bar-container .scheme-progress-bar {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        height: 1.9rem;\n        border-radius: 0 .5rem .5rem 0; }\n      .header .scheme .scheme-bar-container .scheming {\n        background-color: #40ff00; }\n      .header .scheme .scheme-bar-container .henchmen {\n        background-color: #6699ff; }\n      .header .scheme .scheme-bar-container .operations {\n        background-color: #ffb366; }\n      .header .scheme .scheme-bar-container .lairs {\n        background-color: #bf00ff; }\n      .header .scheme .scheme-bar-container .scheme-icon {\n        font-size: 1.9rem;\n        padding-top: 1px;\n        z-index: 100;\n        position: relative; }\n    .header .scheme .scheming {\n      border: 1px solid #40ff00; }\n    .header .scheme .henchmen {\n      border: 1px solid #6699ff; }\n    .header .scheme .operations {\n      border: 1px solid #ffb366; }\n    .header .scheme .lairs {\n      border: 1px solid #bf00ff; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
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
    function HeaderComponent(_player, _scheming, _inventory) {
        this._player = _player;
        this._scheming = _scheming;
        this._inventory = _inventory;
    }
    HeaderComponent.prototype.schemeStyle = function () {
        return { 'cursor': this._scheming.earningSchemePoints ? 'pointer' : 'default' };
    };
    HeaderComponent.prototype.schemeTreeClass = function () {
        return this._scheming.getTreeById(this._player.currentScheme['ref']);
    };
    HeaderComponent.prototype.schemeProgressBarStyle = function () {
        return { 'width': this._scheming.currentSchemePercentage + '%' };
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_inventory_service__["a" /* InventoryService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
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

module.exports = "<div *ngIf=\"_scheming.schemes\" class=\"scheme-panel\">\n    <div style=\"width:2.5%;height:50vh;float:left;\"></div>\n    <div class=\"select-bar\">\n        <div class=\"schemes select\" (click)=\"_scheming.selected = 'scheming'; _scheming.showPreview = false;\">\n            <i class=\"fa fa-lightbulb-o\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"hench select\" (click)=\"_scheming.selected = 'henchmen'; _scheming.showPreview = false;\">\n            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"operate select\" (click)=\"_scheming.selected = 'operations'; _scheming.showPreview = false;\">\n            <i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"lair select\" (click)=\"_scheming.selected = 'lairs'; _scheming.showPreview = false;\">\n            <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n        </div>\n    </div>\n    <div class=\"scheme-area\" *ngIf=\"_scheming.selected == 'scheming'\">\n        <div class=\"column\">\n            <p class=\"node\" (click)=\"_scheming.schemePreview(0)\">\n                <i class=\"fa {{_scheming.schemes[0].fa}}\" aria-hidden=\"true\" [ngStyle]=\"{'color' : _scheming.canSchemeBeLearned(0) ? 'default' : 'grey' } \" ></i>\n            </p>\n            <!--<p class=\"level\">{{_scheming.getSchemeCurrentLevel(0)+1}}</p>-->\n            <p class=\"node\" (click)=\"_scheming.schemePreview(1)\">\n                <i class=\"fa {{_scheming.schemes[1].fa}}\" aria-hidden=\"true\"></i>\n            </p>\n            <!--<p class=\"level\">{{_scheming.getSchemeCurrentLevel(1)+1}}</p>-->\n            <p class=\"node\" (click)=\"_scheming.schemePreview(2)\">\n                <i class=\"fa {{_scheming.schemes[2].fa}}\" aria-hidden=\"true\"></i>\n            </p>\n            <!--<p class=\"level\">{{_scheming.getSchemeCurrentLevel(2)+1}}</p>-->\n        </div>\n        <div class=\"column\"></div>\n        <div class=\"column\"></div>\n        <div class=\"column\"></div>\n        <div class=\"column\"></div>\n    </div>\n    <div class=\"hench-area\" *ngIf=\"_scheming.selected == 'henchmen'\">\n        <div class=\"column\">\n            <p class=\"node\" (click)=\"_scheming.schemePreview(3)\">\n                <i class=\"fa {{_scheming.schemes[3].fa}}\" aria-hidden=\"true\"></i>\n            </p>\n            <!--<p class=\"level\">{{_scheming.getSchemeCurrentLevel(0)+1}}</p> -->\n            <p class=\"node\" (click)=\"_scheming.schemePreview(4)\">\n                <i class=\"fa {{_scheming.schemes[4].fa}}\" aria-hidden=\"true\"></i>\n            </p>\n            <!--<p class=\"level\">{{_scheming.getSchemeCurrentLevel(1)+1}}</p> -->\n            <p class=\"node\" (click)=\"_scheming.schemePreview(5)\">\n                <i class=\"fa {{_scheming.schemes[5].fa}}\" aria-hidden=\"true\"></i>\n            </p>\n            <!--<p class=\"level\">{{_scheming.getSchemeCurrentLevel(2)+1}}</p> -->\n        </div>\n        <div class=\"column\"></div>\n        <div class=\"column\"></div>\n        <div class=\"column\"></div>\n        <div class=\"column\"></div>\n    </div>\n    <div class=\"operate-area\" *ngIf=\"_scheming.selected == 'operations'\">\n        <div class=\"column\">\n            <p class=\"node\" (click)=\"_scheming.schemePreview(6)\">\n                <i class=\"fa {{_scheming.schemes[6].fa}}\" aria-hidden=\"true\"></i>\n            </p>\n            <p class=\"node\" (click)=\"_scheming.schemePreview(7)\">\n                <i class=\"fa {{_scheming.schemes[7].fa}}\" aria-hidden=\"true\"></i>\n            </p>\n            <p class=\"node\" (click)=\"_scheming.schemePreview(8)\">\n                <i class=\"fa {{_scheming.schemes[8].fa}}\" aria-hidden=\"true\"></i>\n            </p>\n        </div>\n        <div class=\"column\"></div>\n        <div class=\"column\"></div>\n        <div class=\"column\"></div>\n        <div class=\"column\"></div>\n    </div>\n    <div class=\"lair-area\" *ngIf=\"_scheming.selected == 'lairs'\"></div>\n    <div *ngIf=\"_scheming.showPreview\" class=\"scheme-flyout\" [ngStyle]=\"{'background-color' : _scheming.previewScheme['flyout_color']}\">\n        <div class=\"inner-content\">\n            <i class=\"scheme-icon fa {{_scheming.previewScheme.fa}}\" aria-hidden=\"true\"></i>\n            <p class=\"scheme-name\">{{_scheming.previewScheme.name}} {{_scheming.previewSchemeLevel > 1 ? _scheming.previewSchemeLevel : ''}}</p>\n                <p class=\"benefit-text\">{{_scheming.previewSchemeDescription}} </p>\n            <p *ngIf=\"_scheming.canSchemeBeLearned(_scheming.previewScheme['ref'])\" class=\"flavor-text\">{{_scheming.previewSchemeFlavor}}</p>\n            <p *ngIf=\"!_scheming.canSchemeBeLearned(_scheming.previewScheme['ref'])\" style=\"color:red\" class=\"flavor-text\">Lair Level 1 required.</p>\n            <p class=\"scheme-exp\"> {{_scheming.previewSchemeExp}}/{{_scheming.previewSchemeExpTarget}}</p>\n            <p class=\"node\" style=\"width:90%;margin-top:.5rem;font-family:'Prociono';border-radius:.5rem;font-size:1rem;height:1.3rem;\" [ngStyle]=\"{'background-color' : _scheming.previewScheme['color']}\"\n                *ngIf=\"(_scheming.previewScheme['ref'] != _player.currentScheme['ref']) && _scheming.canSchemeBeLearned(_scheming.previewScheme['ref'])\" (click)=\"_scheming.startSchemingPreview()\">Scheme</p>\n        </div>\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/scheme-panel/scheme-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Henchmen Colors */\n/*Scheme Tree Colors */\n/* SVG Image Backgrounds */\n.scheme-panel {\n  float: right;\n  width: 50%;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 25em; }\n  .scheme-panel .select-bar {\n    width: 5%;\n    height: 15em;\n    padding: 0;\n    margin: 0;\n    float: left;\n    text-align: center; }\n    .scheme-panel .select-bar .schemes {\n      background-color: #d9ffcc; }\n    .scheme-panel .select-bar .hench {\n      background-color: #ccddff; }\n    .scheme-panel .select-bar .operate {\n      background-color: #ffe6cc; }\n    .scheme-panel .select-bar .lair {\n      background-color: #f2ccff; }\n    .scheme-panel .select-bar .select {\n      cursor: pointer;\n      border-radius: 1rem 0 0 1rem;\n      height: 3rem; }\n    .scheme-panel .select-bar .fa {\n      padding-top: 1rem; }\n  .scheme-panel .scheme-area {\n    background-color: #d9ffcc;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23e8a50c' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E\");\n    border-radius: 0 3rem;\n    width: 90%;\n    height: 15em;\n    padding: 0;\n    margin: 0;\n    float: left; }\n    .scheme-panel .scheme-area .node {\n      background-color: #9fff80; }\n  .scheme-panel .hench-area {\n    background-color: #ccddff;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23900ce8' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n    border-radius: 0 3rem;\n    width: 90%;\n    height: 15em;\n    padding: 0;\n    margin: 0;\n    float: left; }\n    .scheme-panel .hench-area .node {\n      background-color: #80aaff; }\n  .scheme-panel .operate-area {\n    background-color: #ffe6cc;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Cpath fill='%23e8440c' fill-opacity='0.4' d='M600 325.1v-1.17c-6.5 3.83-13.06 7.64-14.68 8.64-10.6 6.56-18.57 12.56-24.68 19.09-5.58 5.95-12.44 10.06-22.42 14.15-1.45.6-2.96 1.2-4.83 1.9l-4.75 1.82c-9.78 3.75-14.8 6.27-18.98 10.1-4.23 3.88-9.65 6.6-16.77 8.84-1.95.6-3.99 1.17-6.47 1.8l-6.14 1.53c-5.29 1.35-8.3 2.37-10.54 3.78-3.08 1.92-6.63 3.26-12.74 5.03a384.1 384.1 0 0 1-4.82 1.36c-2.04.58-3.6 1.04-5.17 1.52a110.03 110.03 0 0 0-11.2 4.05c-2.7 1.15-5.5 3.93-8.78 8.4a157.68 157.68 0 0 0-6.15 9.2c-5.75 9.07-7.58 11.74-10.24 14.51a50.97 50.97 0 0 1-4.6 4.22c-2.33 1.9-10.39 7.54-11.81 8.74a14.68 14.68 0 0 0-3.67 4.15c-1.24 2.3-1.9 4.57-2.78 8.87-2.17 10.61-3.52 14.81-8.2 22.1-4.07 6.33-6.8 9.88-9.83 12.99-.47.48-.95.96-1.5 1.48l-3.75 3.56c-1.67 1.6-3.18 3.12-4.86 4.9a42.44 42.44 0 0 0-9.89 16.94c-2.5 8.13-2.72 15.47-1.76 27.22.47 5.82.51 6.36.51 8.18 0 10.51.12 17.53.63 25.78.24 4.05.56 7.8.97 11.22h.9c-1.13-9.58-1.5-21.83-1.5-37 0-1.86-.04-2.4-.52-8.26-.94-11.63-.72-18.87 1.73-26.85a41.44 41.44 0 0 1 9.65-16.55c1.67-1.76 3.18-3.27 4.83-4.85.63-.6 3.13-2.96 3.75-3.57a71.6 71.6 0 0 0 1.52-1.5c3.09-3.16 5.86-6.76 9.96-13.15 4.77-7.42 6.15-11.71 8.34-22.44.86-4.21 1.5-6.4 2.68-8.6.68-1.25 1.79-2.48 3.43-3.86 1.38-1.15 9.43-6.8 11.8-8.72 1.71-1.4 3.26-2.81 4.7-4.3 2.72-2.85 4.56-5.54 10.36-14.67a156.9 156.9 0 0 1 6.1-9.15c3.2-4.33 5.9-7.01 8.37-8.07 3.5-1.5 7.06-2.77 11.1-4.02a233.84 233.84 0 0 1 7.6-2.2l2.38-.67c6.19-1.79 9.81-3.16 12.98-5.15 2.14-1.33 5.08-2.33 10.27-3.65l6.14-1.53c2.5-.63 4.55-1.2 6.52-1.82 7.24-2.27 12.79-5.06 17.15-9.05 4.05-3.72 9-6.2 18.66-9.9l4.75-1.82c1.87-.72 3.39-1.31 4.85-1.91 10.1-4.15 17.07-8.32 22.76-14.4 6.05-6.45 13.95-12.4 24.49-18.92 1.56-.96 7.82-4.6 14.15-8.33v-64.58c-4 8.15-8.52 14.85-12.7 17.9-2.51 1.82-5.38 4.02-9.04 6.92a1063.87 1063.87 0 0 0-6.23 4.98l-1.27 1.02a2309.25 2309.25 0 0 1-4.87 3.9c-7.55 6-12.9 10.05-17.61 13.19-3.1 2.06-3.86 2.78-8.06 7.13-5.84 6.07-11.72 8.62-29.15 10.95-11.3 1.5-20.04 4.91-30.75 11.07-1.65.94-7.27 4.27-6.97 4.1-2.7 1.58-4.69 2.69-6.64 3.66-5.63 2.8-10.47 4.17-15.71 4.17-17.13 0-41.44 11.51-51.63 22.83-12.05 13.4-31.42 27.7-45.25 31.16-7.4 1.85-11.85 7.05-14.04 14.69-1.26 4.4-1.58 8.28-1.58 13.82 0 .82.01.98.24 3.63.45 5.18.35 8.72-.77 13.26-1.53 6.2-4.89 12.6-10.59 19.43-13.87 16.65-22.88 46.58-22.88 71.68 0 2.39.02 4.26.06 8.75.12 10.8.1 15.8-.22 21.95-.56 11.18-2.09 20.73-5 29.3h-1.05c2.94-8.56 4.49-18.12 5.05-29.35.31-6.13.34-11.1.22-21.9-.04-4.48-.06-6.36-.06-8.75 0-25.32 9.07-55.47 23.12-72.32 5.6-6.72 8.88-12.99 10.38-19.03 1.09-4.4 1.18-7.85.74-12.93-.23-2.7-.24-2.86-.24-3.72 0-5.62.32-9.57 1.62-14.1 2.28-7.95 6.97-13.44 14.76-15.39 13.6-3.4 32.82-17.59 44.75-30.84C409 360.14 433.58 348.5 451 348.5c5.07 0 9.77-1.33 15.26-4.07 1.93-.96 3.9-2.05 6.58-3.62-.3.18 5.33-3.16 6.98-4.11 10.82-6.21 19.66-9.67 31.11-11.2 17.23-2.3 22.9-4.75 28.57-10.64 4.25-4.41 5.04-5.16 8.22-7.28 4.68-3.11 10.01-7.14 17.55-13.14a1113.33 1113.33 0 0 0 4.86-3.89l1.28-1.02a4668.54 4668.54 0 0 1 6.23-4.98c3.67-2.9 6.55-5.12 9.07-6.95 4.37-3.19 9.16-10.56 13.29-19.4v66.9zm0-116.23c-.62.01-1.27.06-1.95.13-6.13.63-13.83 3.45-21.83 7.45-3.64 1.82-8.46 2.67-14.17 2.71-4.7.04-9.72-.47-14.73-1.33-1.7-.3-3.26-.61-4.67-.93a31.55 31.55 0 0 0-3.55-.57 273.4 273.4 0 0 0-16.66-.88c-10.42-.16-17.2.74-17.97 2.73-.38.97.6 2.55 3.03 4.87 1.01.97 2.22 2.03 4.04 3.55a1746.07 1746.07 0 0 0 4.79 4.02c1.39 1.2 3.1 1.92 5.5 2.5.7.16.86.2 2.64.54 3.53.7 5.03 1.25 6.15 2.63 1.41 1.76 1.4 4.54-.15 8.88-2.44 6.83-5.72 10.05-10.19 10.33-3.63.23-7.6-1.29-14.52-5.06-4.53-2.47-6.82-7.3-8.32-15.26-.17-.87-.32-1.78-.5-2.86l-.43-2.76c-1.05-6.58-1.9-9.2-3.73-10.11-.81-.4-1.59-.74-2.36-1-2.27-.77-4.6-1.02-8.1-.92-2.29.07-14.7 1-13.77.93-20.55 1.37-28.8 5.05-37.09 14.99a133.07 133.07 0 0 0-4.25 5.44l-2.3 3.09-2.51 3.32c-4.1 5.36-7.06 8.48-10.39 11.12-.65.52-1.33 1.04-2.13 1.62l-4.11 2.94a106.8 106.8 0 0 0-5.16 3.99c-4.55 3.74-9.74 8.6-16.25 15.38-8.25 8.58-11.78 13.54-11.7 15.95.07 1.65 1.64 2.11 6.79 2.38 1.61.09 2.15.12 2.98.2 2.95.24 5.09.73 6.81 1.68 7.48 4.15 11.63 7.26 13.95 11.58 3.3 6.15.8 12.88-8.89 20.26-8.28 6.3-11.1 10.37-11.31 14.96-.06 1.17 0 1.93.26 4.43.69 6.47.25 10.65-2.8 17.42a44.23 44.23 0 0 1-4.16 7.53c-2.82 3.97-5.47 5.74-10.6 7.69-.43.16-3.34 1.23-4.27 1.59-1.8.68-3.38 1.36-5.01 2.14-4.18 2-8.4 4.6-13.1 8.24-8.44 6.51-13.23 14.56-15.98 25.06-1.1 4.2-1.55 6.81-2.8 15.21-1.26 8.6-2.17 12.64-4.08 16.55-2.1 4.28-11.93 26.59-12.97 28.88a382.7 382.7 0 0 1-6.37 13.41c-4.07 8.11-7.61 14.07-10.73 17.81-5.38 6.46-8.98 14.37-13.77 28.42a810.14 810.14 0 0 0-1.89 5.6c-1.8 5.35-2.96 8.6-4.26 11.85-6.13 15.32-25.43 26.31-46.46 26.31-11.2 0-20.58-2.74-31.02-8.55-5.6-3.13-4.55-2.42-22.26-14.54-14.33-9.8-17.7-10.73-20.47-6.9-.37.5-1.81 2.74-1.83 2.77a52.24 52.24 0 0 1-4.94 5.9c-.73.79-5.52 5.87-6.97 7.45-2.38 2.6-4.3 4.81-5.98 6.93a45.6 45.6 0 0 0-5.08 7.66c-1.29 2.57-1.9 5.25-2.66 10.6a997.6 997.6 0 0 1-.46 3.18h-1l.47-3.32c.77-5.45 1.4-8.2 2.75-10.9a46.54 46.54 0 0 1 5.2-7.84c1.7-2.14 3.63-4.38 6.03-6.98 1.45-1.59 6.24-6.68 6.96-7.46a51.58 51.58 0 0 0 4.84-5.78s1.47-2.26 1.86-2.8c3.25-4.5 7.08-3.44 21.84 6.67 17.67 12.08 16.62 11.38 22.19 14.48 10.3 5.73 19.5 8.43 30.53 8.43 20.65 0 39.57-10.77 45.54-25.69a219.7 219.7 0 0 0 4.24-11.8 6752.32 6752.32 0 0 0 1.88-5.6c4.83-14.16 8.47-22.14 13.96-28.73 3.05-3.66 6.56-9.57 10.6-17.61 1.97-3.93 4.04-8.31 6.35-13.38 1.03-2.28 10.88-24.61 12.98-28.91 1.85-3.79 2.75-7.76 4-16.25 1.24-8.44 1.7-11.07 2.81-15.32 2.8-10.7 7.71-18.94 16.33-25.6a73.18 73.18 0 0 1 13.29-8.35c1.66-.8 3.27-1.48 5.08-2.18.94-.36 3.86-1.43 4.28-1.59 4.95-1.88 7.44-3.55 10.14-7.33 1.35-1.9 2.68-4.3 4.06-7.37 2.97-6.58 3.39-10.59 2.72-16.9a27.13 27.13 0 0 1-.27-4.58c.22-4.94 3.21-9.24 11.7-15.7 9.33-7.11 11.66-13.34 8.62-19-2.2-4.09-6.25-7.12-13.55-11.17-1.57-.88-3.6-1.33-6.42-1.57-.8-.07-1.34-.1-2.95-.19-5.77-.3-7.63-.85-7.72-3.34-.1-2.81 3.5-7.87 11.97-16.69 6.53-6.8 11.75-11.69 16.33-15.45 1.79-1.47 3.42-2.72 5.2-4.03l4.12-2.94c.79-.58 1.46-1.08 2.1-1.59 3.26-2.6 6.16-5.65 10.21-10.94a383.2 383.2 0 0 0 2.5-3.32l2.31-3.09c1.8-2.39 3.04-4 4.29-5.48 8.47-10.17 16.98-13.96 37.27-15.3-.44.02 12-.9 14.32-.98 3.62-.1 6.05.16 8.46.98.8.27 1.62.62 2.47 1.04 2.27 1.14 3.17 3.87 4.27 10.85l.44 2.76c.17 1.07.33 1.97.5 2.83 1.44 7.69 3.62 12.29 7.8 14.57 6.76 3.68 10.6 5.15 13.99 4.94 4-.25 6.99-3.17 9.3-9.67 1.45-4.04 1.46-6.49.32-7.92-.9-1.12-2.28-1.62-5.57-2.27a55.8 55.8 0 0 1-2.67-.55c-2.54-.6-4.39-1.4-5.93-2.71a252.63 252.63 0 0 0-4.78-4.01 84.35 84.35 0 0 1-4.08-3.6c-2.73-2.6-3.86-4.43-3.28-5.95 1.02-2.64 7.82-3.54 18.93-3.37a230.56 230.56 0 0 1 16.73.88c2.76.39 3.2.49 3.68.6 1.4.3 2.95.62 4.62.91a82.9 82.9 0 0 0 14.56 1.32c5.56-.04 10.24-.86 13.73-2.6 8.1-4.05 15.89-6.9 22.17-7.56.7-.07 1.4-.11 2.05-.13v1zm0-100.94v1.5c-8.62 16.05-17.27 29.55-23.65 35.92-3.19 3.2-7.62 4.9-13.54 5.56-4.45.48-8.28.4-19.18-.2-9.91-.55-15.32-.44-20.52.78a84.05 84.05 0 0 1-15 2.11l-2.25.14c-12.49.75-19.37 1.78-32.72 5.74-4.5 1.33-9.27 2.49-14.3 3.48a246.27 246.27 0 0 1-32.6 3.97c-7.56.45-13.21.57-20.24.57-5.4 0-11.9 1.61-18 5.18-8.3 4.87-15.06 12.87-19.53 24.5a68.57 68.57 0 0 1-4.56 9.8c-3.6 6.2-6.92 8.99-13.38 12.18l-4.03 1.96a64.48 64.48 0 0 0-15.16 10.25c-8.2 7.33-13.72 16.63-22.54 35.6l-2.08 4.49c-7.3 15.7-11.5 23.3-17.35 29.87-7.7 8.66-20.25 14.42-40.31 20.08-4.37 1.23-19.04 5.08-19.24 5.13-6.92 1.87-11.68 3.34-15.63 4.92-10.55 4.22-18.71 10.52-36.38 26.52l-1.7 1.54c-8.58 7.76-13.41 11.9-18.81 15.88-3.95 2.9-8 5.67-12.97 8.91-2.06 1.34-10.3 6.6-12.33 7.94-11.52 7.5-18.53 13.04-24.62 20.08a62.01 62.01 0 0 0-6.44 8.85c-4.13 6.91-6.27 13.15-9.2 25.11l-1.54 6.26c-.6 2.45-1.15 4.54-1.72 6.58-2.97 10.7-6.9 17.36-14.78 26.91L69.6 491a148.51 148.51 0 0 0-4.19 5.3 23.9 23.9 0 0 0-3.44 6.28c-1.16 3.23-1.52 5.9-1.87 11.94-.58 10.05-1.42 15.04-4.63 22.67-1.57 3.72-5.66 14.02-6.41 15.8a73.46 73.46 0 0 1-3.57 7.4c-2.88 5.14-6.71 10.12-13.12 16.95-5.96 6.36-8.87 10.9-10.61 16a56.88 56.88 0 0 0-1.38 4.82l-.46 1.84h-1.03l.52-2.08c.52-2.09.92-3.49 1.4-4.9 1.8-5.25 4.78-9.9 10.84-16.36 6.35-6.78 10.13-11.7 12.97-16.77a72.5 72.5 0 0 0 3.52-7.29c.75-1.76 4.84-12.06 6.4-15.8 3.17-7.5 3.99-12.4 4.56-22.33.35-6.14.72-8.88 1.93-12.23a24.9 24.9 0 0 1 3.58-6.54c1.27-1.7 2.6-3.37 4.22-5.34l4.11-4.95c7.8-9.46 11.66-16 14.59-26.54.56-2.04 1.1-4.12 1.71-6.56l1.53-6.26c2.96-12.04 5.13-18.36 9.32-25.39 1.84-3.08 4-6.05 6.54-8.99 6.17-7.12 13.24-12.7 24.83-20.26 2.05-1.33 10.28-6.6 12.33-7.94 4.96-3.22 9-5.98 12.92-8.87 5.37-3.95 10.19-8.08 18.74-15.82l1.7-1.54c17.76-16.09 25.98-22.43 36.67-26.7 4-1.6 8.8-3.09 15.75-4.96.21-.06 14.87-3.9 19.22-5.13 19.9-5.61 32.32-11.31 39.85-19.78 5.76-6.48 9.93-14.02 17.18-29.64l2.09-4.5c8.87-19.07 14.44-28.46 22.77-35.9a65.48 65.48 0 0 1 15.38-10.4l4.04-1.97c6.3-3.1 9.47-5.77 12.96-11.77a67.6 67.6 0 0 0 4.48-9.67c4.56-11.84 11.47-20.02 19.97-25 6.25-3.66 12.93-5.32 18.5-5.32 7.01 0 12.65-.12 20.17-.57a245.3 245.3 0 0 0 32.47-3.96c5-.98 9.75-2.13 14.22-3.45 13.43-3.98 20.38-5.02 32.94-5.78l2.24-.14c5.76-.37 9.8-.9 14.85-2.09 5.31-1.25 10.79-1.35 22.6-.7 9.04.5 12.84.58 17.21.1 5.71-.62 9.94-2.26 12.95-5.26 6.44-6.45 15.3-20.37 24.35-36.72zm0 450.21c-1.28-4.6-2.2-10.55-3.33-20.25l-.24-2.04-.23-2.03c-1.82-15.7-3.07-21.98-5.55-24.47-2.46-2.46-3.04-5.03-2.52-8.64.1-.6.18-1.1.39-2.15.69-3.54.77-5.04.08-6.84-.91-2.38-3.31-4.41-7.79-6.26-5.08-2.09-6.52-4.84-4.89-8.44.66-1.45 1.79-3.02 3.52-5.01 1.04-1.2 5.48-5.96 5.08-5.53 6.15-6.7 8.98-11.34 8.98-16.48a15.2 15.2 0 0 1 6.5-12.89v1.26a14.17 14.17 0 0 0-5.5 11.63c0 5.47-2.93 10.29-9.24 17.16.38-.42-4.04 4.33-5.07 5.5-1.67 1.93-2.75 3.43-3.36 4.77-1.37 3.04-.23 5.22 4.36 7.1 4.71 1.95 7.32 4.16 8.34 6.83.78 2.04.7 3.67-.03 7.4-.2 1.03-.3 1.51-.38 2.09-.48 3.33.03 5.59 2.23 7.8 2.74 2.74 3.98 8.96 5.84 25.06l.24 2.03.23 2.04c.82 7.01 1.53 12.06 2.34 16.03v4.33zm0-62.16c-1.4-3.13-4.43-9.9-4.95-11.17-1.02-2.53-1.25-3.8-.91-5.18.2-.84 2.05-4.68 2.32-5.33a70.79 70.79 0 0 0 3.54-11.2v3.99a62.82 62.82 0 0 1-2.62 7.6c-.31.75-2.09 4.46-2.27 5.18-.28 1.12-.08 2.22.87 4.57.41 1.02 2.5 5.7 4.02 9.09v2.45zm0-85.09c-1.65 1.66-3.66 2.9-6.4 4.13-.25.1-13.97 5.47-20.4 8.43-9.35 4.32-16.7 5.9-23.03 5.25-5.08-.53-9.02-2.25-14.77-5.92l-3.2-2.07a77.4 77.4 0 0 0-5.44-3.27c-4.05-2.18-3.25-5.8 1.47-10.47 3.71-3.68 9.6-7.93 18.73-13.8l4.46-2.82c17.95-11.33 18.22-11.5 22.27-14.74 11.25-9 19.69-14.02 26.31-15.1v1.02c-6.37 1.1-14.62 6-25.69 14.86-4.1 3.28-4.34 3.44-22.36 14.8a652.4 652.4 0 0 0-4.45 2.83c-9.07 5.83-14.92 10.05-18.57 13.66-4.31 4.28-4.95 7.13-1.7 8.88 1.7.91 3.29 1.88 5.5 3.3l3.2 2.08c5.64 3.59 9.45 5.25 14.34 5.76 6.13.64 13.32-.9 22.52-5.15 6.46-2.98 20.18-8.35 20.4-8.44 3.04-1.37 5.1-2.71 6.81-4.69v1.47zm0-41.37v1c-6.56.26-12.11 3.13-19.71 9.08l-4.63 3.68a51.87 51.87 0 0 1-4.4 3.14c-.82.52-5.51 3.33-6.22 3.76-3.31 2-6.15 3.8-8.87 5.6a112.61 112.61 0 0 0-8.16 5.92c-4.61 3.72-7.4 6.9-7.97 9.35-.63 2.67 1.48 4.53 7.05 5.46 10.7 1.78 20.92-.05 30.45-4.65a61.96 61.96 0 0 0 17.1-12.2 41.8 41.8 0 0 0 5.36-7.42v1.92a38.94 38.94 0 0 1-4.64 6.19 62.95 62.95 0 0 1-17.39 12.41c-9.7 4.68-20.13 6.55-31.05 4.73-6.06-1-8.65-3.29-7.85-6.67.64-2.74 3.53-6.05 8.31-9.9 2.35-1.9 5.1-3.88 8.24-5.97 2.73-1.82 5.58-3.61 8.9-5.62.72-.44 5.4-3.24 6.22-3.75 1.26-.8 2.6-1.76 4.3-3.09.8-.62 3.9-3.1 4.63-3.67 7.77-6.1 13.49-9.04 20.33-9.3zm0-154.6v1c-1.75-.24-4.3.23-7.82 1.55-10.01 3.75-13.8 5.07-19.15 6.76-1.78.56-2.63.83-3.87 1.24-1.48.5-3.16.76-6.74 1.16a1550.34 1550.34 0 0 0-2.64.3c-7.8.94-11.28 2.47-11.28 6.07 0 4.45 2.89 13.18 7.96 25.81a57.34 57.34 0 0 1 2.33 7.6 258.32 258.32 0 0 1 .84 3.46c1.86 7.62 3.17 10.71 5.56 11.67 2.21.88 4.7.6 7.47-.72 3.48-1.69 7.22-4.94 11.2-9.47 1.52-1.7 2.97-3.49 4.59-5.57l3.16-4.1c2.59-3.23 6.07-12.21 8.39-20.23v3.45c-2.29 7.2-5.27 14.5-7.61 17.41-.44.55-2.67 3.46-3.15 4.09-1.63 2.1-3.1 3.9-4.62 5.62-4.08 4.61-7.9 7.94-11.53 9.7-2.99 1.44-5.77 1.75-8.28.74-2.84-1.13-4.2-4.34-6.15-12.35a2097.48 2097.48 0 0 1-.84-3.46c-.8-3.2-1.47-5.45-2.28-7.46-5.14-12.8-8.04-21.55-8.04-26.19 0-4.37 3.84-6.06 12.16-7.07a160.9 160.9 0 0 1 2.65-.3c3.5-.39 5.15-.64 6.53-1.1 1.26-.42 2.1-.7 3.88-1.26 5.34-1.68 9.11-3 19.1-6.74 3.53-1.32 6.22-1.84 8.18-1.61zM0 292c10.13-11.31 18.13-23.2 23.07-35.39 3.3-8.14 6.09-16.12 10.81-30.55l1.59-4.84c6.53-19.94 10.11-29.82 14.77-39.56 6.07-12.72 12.55-21.18 20.27-25.54 6.66-3.76 10.2-7.86 12.22-13.15a46.6 46.6 0 0 0 1.86-6.58c1.23-5.2 2.05-7.59 3.93-10.36 2.45-3.62 6.27-6.53 12.1-8.96 15.78-6.58 16.73-7.04 18.05-9.01.65-.98.83-2.15.74-4.51-.03-.73-.23-3.82-.24-4A93.8 93.8 0 0 1 119 94c0-10.04.18-11.37 2.37-13.15.52-.42 1.13-.8 2.07-1.3.27-.14 2.18-1.12 2.84-1.48a68.4 68.4 0 0 0 9.12-5.87c2.06-1.54 2.64-2.14 8.01-7.93 3.78-4.09 6.21-6.36 8.96-8.12 3.64-2.33 7.2-3.12 10.9-2.11 4.4 1.2 10.81 2 18.78 2.46 6.9.4 12.9.5 21.95.5 4.87 0 8.97.47 15.4 1.57 7.77 1.33 9.3 1.54 12.38 1.54 4.05 0 7.43-.88 10.68-2.95 5.06-3.22 8.11-4.67 11.2-5.2 3.62-.64 4.77-.46 16.55 2.06 17.26 3.7 30.85 1.36 41.06-9.7 5.1-5.53 5.48-8.9 3.48-14.8-.83-2.42-1.03-3.1-1.17-4.3-.29-2.52.5-4.71 2.71-6.93 2.65-2.65 4.72-9.17 6.22-18.29h2.03c-1.56 9.71-3.77 16.65-6.83 19.7-1.79 1.8-2.36 3.39-2.14 5.28.11 1 .3 1.63 1.07 3.9 2.22 6.53 1.76 10.66-3.9 16.8-10.77 11.66-25.07 14.13-42.95 10.3-11.42-2.45-12.55-2.62-15.78-2.06-2.77.48-5.62 1.84-10.47 4.92a20.93 20.93 0 0 1-11.76 3.27c-3.25 0-4.81-.22-12.73-1.57C212.74 59.46 208.73 59 204 59c-9.1 0-15.11-.1-22.07-.5-8.09-.47-14.62-1.29-19.2-2.54-5.62-1.53-10.17 1.38-17.85 9.66-5.5 5.94-6.08 6.53-8.28 8.18a70.38 70.38 0 0 1-9.38 6.03c-.68.37-2.58 1.35-2.84 1.49-.84.44-1.35.76-1.75 1.08C121.16 83.6 121 84.8 121 94c0 1.85.06 3.54.17 5.44 0 .17.2 3.28.24 4.03.1 2.75-.13 4.29-1.08 5.71-1.67 2.5-2.27 2.8-18.95 9.74-5.48 2.29-8.99 4.96-11.2 8.24-1.71 2.51-2.47 4.73-3.64 9.7-.83 3.5-1.21 4.92-1.94 6.83-2.18 5.73-6.05 10.19-13.1 14.18-7.3 4.12-13.55 12.28-19.46 24.66-4.6 9.64-8.17 19.46-14.67 39.32l-1.58 4.84c-4.75 14.47-7.54 22.48-10.86 30.69-5.28 13.01-13.95 25.65-24.93 37.6v-2.97zm0 78v-.5l1-.01c6.32 0 7.47 5.2 4.6 13.36a60.36 60.36 0 0 1-5.6 11.3v-1.92a57.76 57.76 0 0 0 4.65-9.72c2.69-7.6 1.71-12.02-3.65-12.02-.34 0-.67 0-1 .02v-46.59a340.96 340.96 0 0 0 13.71-8.34c13.66-9.46 29.79-37.6 29.79-53.59 0-18.1 21.57-72.64 32.23-79.42 12.71-8.09 32.24-27.96 35.8-37.75 1.93-5.3 5.5-7.27 14.42-9.37 6.15-1.44 8.64-2.42 10.67-4.79 1.5-1.74 2.72-4.79 4.33-10.3.23-.78 1.9-6.68 2.43-8.46 3.62-12.08 7.3-18.49 13.47-20.39 2.5-.76 3.03-.98 9.74-3.7 7.49-3.03 11.97-4.43 17.12-4.92 6.75-.65 13.13.75 19.55 4.67 5.43 3.32 12.19 4.72 20.17 4.56 6.03-.12 12.2-1.07 19.83-2.8 1.82-.4 7.38-1.74 8.26-1.94 2.69-.6 4.34-.89 5.48-.89 4.97 0 8.93-.05 14.2-.27 7.9-.32 15.56-.92 22.75-1.88 8.5-1.14 15.9-2.73 21.88-4.82 18.9-6.62 32.64-18.3 33.67-27.59.29-2.56.4-2.96 2.79-11.11 2.33-7.95 3.21-12.93 2.72-18.23-.2-2.24-.69-4.38-1.48-6.42-1.5-3.92-2.63-9.4-3.43-16.18h.9c.77 6.47 1.89 11.72 3.47 15.82a24.93 24.93 0 0 1 1.54 6.69c.5 5.46-.4 10.54-2.77 18.6-2.36 8.06-2.47 8.47-2.74 10.95-1.09 9.75-15.1 21.68-34.33 28.41-6.06 2.12-13.52 3.72-22.09 4.87-7.22.96-14.92 1.57-22.83 1.89-5.3.21-9.27.27-14.25.27-1.04 0-2.64.27-5.26.87-.87.2-6.43 1.53-8.26 1.94-7.68 1.73-13.92 2.7-20.03 2.82-8.15.17-15.1-1.27-20.71-4.7-6.23-3.81-12.4-5.16-18.93-4.54-5.04.48-9.44 1.86-16.84 4.86-6.75 2.74-7.29 2.95-9.82 3.73-5.73 1.76-9.28 7.96-12.81 19.72-.53 1.77-2.2 7.66-2.43 8.46-1.66 5.65-2.91 8.78-4.53 10.67-2.22 2.58-4.84 3.62-12.01 5.3-7.8 1.83-11.13 3.66-12.9 8.54-3.65 10.04-23.32 30.06-36.2 38.25C65.94 190 44.5 244.2 44.5 262c0 16.34-16.3 44.78-30.22 54.41-2.14 1.48-8.24 5.12-14.28 8.68v-1.16 46.09zm0-173.7v-1.11c7.42-3.82 14.55-10.23 21.84-18.98 3.8-4.56 14.21-18.78 15.79-20.55 1.8-2.04 4.06-3.96 7.42-6.45 1.08-.8 4.92-3.57 5.49-3.99 9.36-6.85 14-11.96 15.98-19.36.8-2.98 1.54-6.78 2.46-12.3.23-1.44 2-12.46 2.56-15.79 2.87-16.77 5.73-26.79 10.07-32.1C92.46 52.43 101.5 38.13 101.5 33c0-2.54.34-3.35 6.05-15.71.68-1.49 1.25-2.74 1.77-3.93 2.5-5.75 3.9-10.04 4.14-13.36h1c-.23 3.48-1.66 7.87-4.23 13.76-.52 1.2-1.09 2.45-1.78 3.95-5.54 12.01-5.95 12.99-5.95 15.29 0 5.47-9.09 19.84-20.11 33.31-4.2 5.12-7.03 15.06-9.86 31.64-.57 3.33-2.33 14.33-2.57 15.78-.92 5.56-1.67 9.38-2.48 12.4-2.05 7.68-6.82 12.93-16.35 19.91l-5.49 3.98c-3.3 2.45-5.51 4.34-7.27 6.31-1.53 1.73-11.94 15.93-15.76 20.53-7.52 9.02-14.88 15.6-22.61 19.46zm0 361.83v-4.33c.48 2.36 1 4.35 1.6 6.15 2 6.03 4.6 8.26 8.19 6.59C28.76 557.69 43.5 542.4 43.5 527c0-16.2 6.37-31.99 17.1-46.3 1.88-2.5 3.66-4.4 5.53-6 .73-.62 1.45-1.18 2.3-1.8l2-1.43c3.68-2.68 5.32-5.28 7.08-12.59.75-3.07 1.38-5.02 4.2-13.26l.63-1.88c3.24-9.58 4.56-14.97 4.17-18.65-.48-4.43-3.8-5.23-11.3-1.64a81.12 81.12 0 0 1-9.15 3.7c-13.89 4.67-26.96 5.8-42.66 5.42l-1.95-.05-1.45-.02a39.8 39.8 0 0 0-15.05 2.96A21.81 21.81 0 0 0 0 438.37v-1.26a23.55 23.55 0 0 1 4.55-2.57 40.77 40.77 0 0 1 16.92-3.02l1.95.05c15.6.38 28.57-.75 42.32-5.37a80.12 80.12 0 0 0 9.04-3.65c8.04-3.84 12.16-2.85 12.72 2.43.42 3.89-.92 9.34-4.21 19.08l-.64 1.88c-2.8 8.2-3.43 10.15-4.16 13.18-1.82 7.52-3.59 10.34-7.47 13.16l-2 1.43c-.84.6-1.54 1.15-2.25 1.75a35.45 35.45 0 0 0-5.37 5.84c-10.61 14.15-16.9 29.74-16.9 45.7 0 15.88-15 31.45-34.29 40.45-4.3 2.01-7.39-.66-9.56-7.18-.23-.68-.44-1.39-.65-2.13zm0-62.16v-2.45l1.46 3.27c2.1 4.8 3.46 10.33 4.26 16.77.66 5.3.84 9.3 1.04 18.5.2 9.32.5 12.75 1.63 15.05 1.28 2.6 3.67 2.35 8.29-1.5 17.14-14.3 21.82-22.9 21.82-38.62 0-7.17 1.1-12.39 3.7-17.68 2.27-4.67 3.65-6.62 13.4-19.62a69.8 69.8 0 0 1 7.6-8.79 44.76 44.76 0 0 1 3.54-3.06c.38-.3.64-.52.89-.74a10.47 10.47 0 0 0 2.63-3.32 35.78 35.78 0 0 0 2.26-5.94l.37-1.2.36-1.15c.29-.91.48-1.55.66-2.16.45-1.53.74-2.68.91-3.66.38-2.2.12-3.49-.85-4.15-2.35-1.61-9.28-.24-23.8 4.94-9.54 3.4-16.12 4.17-27.85 4.26-7.71.06-10.43.4-13.25 2.12-3.48 2.12-5.84 6.4-7.58 14.26-.5 2.2-.99 4.19-1.49 5.98v-3.98l.51-2.22c1.8-8.1 4.28-12.6 8.04-14.9 3.04-1.85 5.86-2.2 13.77-2.26 11.61-.09 18.1-.84 27.51-4.2 14.93-5.32 21.95-6.71 24.7-4.83 1.38.94 1.71 2.6 1.28 5.15a33.69 33.69 0 0 1-.94 3.78l-.66 2.17-.36 1.15-.37 1.2a36.64 36.64 0 0 1-2.33 6.1c-.8 1.53-1.61 2.52-2.86 3.61l-.92.77-1.02.83c-.9.74-1.65 1.4-2.47 2.18a68.84 68.84 0 0 0-7.48 8.66c-9.7 12.93-11.07 14.87-13.31 19.46-2.52 5.15-3.59 10.22-3.59 17.24 0 16.04-4.82 24.91-22.18 39.38-5.04 4.2-8.18 4.55-9.83 1.18-1.22-2.5-1.52-5.94-1.73-15.47-.2-9.16-.38-13.15-1.03-18.4-.79-6.34-2.12-11.8-4.19-16.49L0 495.98zM379.27 0h1.04l1.5 5.26c3.28 11.56 4.89 19.33 5.26 27.8.49 11.01-1.52 21.26-6.63 31.17-7.8 15.13-20.47 26.5-36.22 34.1-12.38 5.96-26.12 9.17-36.22 9.17-6.84 0-17.24 1.38-37.27 4.62l-2.27.37c-24.5 3.99-31.65 5-37.46 5-3.49 0-4.08-.08-19.54-2.8-3.56-.64-6.32-1.1-9-1.5-20.23-2.96-31-1.2-31.96 7.86-.1.85-.18 1.72-.29 2.81l-.27 2.73c-1.1 10.9-2.02 15.73-4.31 19.96-2.9 5.34-7.77 7.95-15.63 7.95-10.2 0-12.92.6-15.5 3.17.52-.51-5.03 5.85-8.16 8.7-2.75 2.5-14.32 12.55-15.77 13.83a341.27 341.27 0 0 0-6.54 5.92c-6.97 6.49-11.81 11.76-14.6 16.15-5.92 9.3-10.48 18.04-11.69 24.08-1.66 8.3 3.67 9.54 19.02 1.21a626.23 626.23 0 0 1 44.54-21.9c3.5-1.56 14.04-6.2 15.68-6.95 5.05-2.25 8.3-3.8 10.78-5.15l1.95-1.07 2.18-1.18c1.76-.94 3.38-1.76 5-2.55 18.1-8.72 34.48-10.46 50.33-1.2 22.89 13.34 38.28 37.02 38.28 56.44 0 19.12-.73 25.13-5.18 33.2a45.32 45.32 0 0 1-4.94 7.12c-6.47 7.77-11.81 16.2-12.76 21.27-1.2 6.34 4.69 7.03 20.17-.05 13.31-6.08 22.4-14.95 28.5-26.32a80.51 80.51 0 0 0 6.1-15.13c.9-2.98 3.17-11.65 3.41-12.48a29.02 29.02 0 0 1 1.75-4.83c7.47-14.93 21.09-30.5 36.25-37.24 7.61-3.38 13-9.65 19.4-20.79.84-1.48 4.26-7.64 5.14-9.17 3.52-6.1 6.22-9.7 9.37-11.98 10.15-7.4 28.7-11.1 50.29-11.1 7.52 0 16.54-1.24 27.51-3.58a420.1 420.1 0 0 0 14.96-3.52c-1.3.33 15.54-3.98 19.42-4.89 14.15-3.33 41.07-5.01 64.11-5.01 17.36 0 27.82-9.23 38.53-38.67 6.62-18.21 6.62-26.37 2.69-34.35l-1.18-2.37A13.36 13.36 0 0 1 587.5 58c0-4.03 0-4.01 2.5-24.56.46-3.73.8-6.74 1.12-9.64.9-8.45 1.38-15.2 1.38-20.8 0-.94-.02-1.94-.04-3h1c.03 1.06.04 2.06.04 3 0 5.65-.48 12.43-1.39 20.9-.3 2.91-.66 5.93-1.11 9.66-2.5 20.45-2.5 20.47-2.5 24.44 0 1.97.45 3.57 1.45 5.68.24.51 1.16 2.35 1.17 2.36 4.06 8.24 4.06 16.68-2.65 35.13-10.84 29.8-21.63 39.33-39.47 39.33-22.96 0-49.83 1.68-63.89 4.99-3.86.9-20.69 5.2-19.4 4.88a421.05 421.05 0 0 1-14.99 3.53c-11.04 2.35-20.11 3.6-27.72 3.6-21.4 0-39.76 3.67-49.7 10.9-3 2.19-5.64 5.7-9.1 11.68-.87 1.52-4.29 7.68-5.14 9.17-6.49 11.3-12 17.71-19.86 21.2-14.9 6.63-28.38 22.03-35.75 36.77a28.17 28.17 0 0 0-1.69 4.67c-.23.8-2.5 9.49-3.4 12.5a81.48 81.48 0 0 1-6.19 15.3c-6.2 11.56-15.44 20.58-28.96 26.76-16.1 7.36-23 6.55-21.58-1.04 1-5.29 6.4-13.83 12.99-21.73a44.33 44.33 0 0 0 4.82-6.96c4.35-7.88 5.06-13.77 5.06-32.72 0-19.04-15.19-42.4-37.72-55.55-15.57-9.08-31.62-7.38-49.45 1.21a132.9 132.9 0 0 0-7.14 3.71l-1.95 1.07a158.83 158.83 0 0 1-10.85 5.19c-1.65.74-12.18 5.38-15.69 6.95a625.25 625.25 0 0 0-44.46 21.86c-15.95 8.66-22.37 7.16-20.48-2.29 1.24-6.2 5.83-15.02 11.82-24.42 2.85-4.48 7.74-9.8 14.77-16.34 1.98-1.85 4.12-3.79 6.56-5.94 1.46-1.29 13.02-11.33 15.75-13.82 3.09-2.8 8.6-9.14 8.14-8.67 2.82-2.82 5.75-3.46 16.2-3.46 7.5 0 12.04-2.43 14.75-7.42 2.2-4.07 3.11-8.84 4.2-19.59l.26-2.73.3-2.81c.56-5.42 4.47-8.5 11.23-9.6 5.44-.88 12.51-.51 21.86.86 2.7.4 5.47.86 9.04 1.49 15.33 2.7 15.96 2.8 19.36 2.8 5.73 0 12.9-1.03 37.3-5l2.27-.36c20.1-3.26 30.52-4.64 37.43-4.64 9.95 0 23.54-3.18 35.78-9.08 15.57-7.5 28.09-18.73 35.78-33.65 5.02-9.75 7-19.82 6.51-30.67-.37-8.37-1.96-16.08-5.23-27.57L379.27 0zm13.68 0h1.02c.78 3.9 1.92 8.7 3.51 14.88 3.63 14.05 3.06 27.03-.75 38.77a61 61 0 0 1-11.35 20.68 138.36 138.36 0 0 1-19.32 18.77c-11.32 9.02-23.36 15.49-35.95 18.39a258.63 258.63 0 0 1-22.57 4.07c-3.17.44-6.36.85-10.3 1.32l-9.39 1.12c-11.53 1.41-17.45 2.55-21.64 4.46-9.28 4.21-28.35 6.04-49.21 6.04-1.37 0-2.8-.12-4.3-.35-2.62-.41-5-1.03-9.14-2.29-7.34-2.21-9.63-2.75-12.63-2.56-3.9.23-6.63 2.29-8.47 6.89-1.86 4.66-2.42 7.53-3.34 14.98-1.1 8.98-2.87 12.12-9.97 14.3a40.12 40.12 0 0 0-6.8 2.66c-.63.33-1.16.64-1.76 1.02l-1.34.86c-1.9 1.14-3.86 1.49-9.25 1.49-3.2 0-8.83-.55-9.51-.39-1.22.28-.75-.14-7.14 6.24-1.5 1.5-3.49 3.18-6.32 5.37-1.52 1.18-7.16 5.43-7.94 6.03-4.96 3.78-8.33 6.6-11.06 9.38-4.88 4.98-6.85 9.15-5.56 12.7 1.34 3.67 4.07 4.42 8.9 2.82a55.72 55.72 0 0 0 7.77-3.48c1.5-.77 7.78-4.13 9.37-4.96a116.8 116.8 0 0 1 12.31-5.68 162.2 162.2 0 0 0 11.04-4.84c2.04-.97 10.74-5.16 13-6.22 4.41-2.1 8.1-3.78 11.65-5.29 17.14-7.3 29.32-9.9 37.67-6.65l5.43 2.1c2.3.88 4.17 1.62 6.02 2.38a150.9 150.9 0 0 1 13.07 6c18.34 9.63 30.35 22.13 34.79 39.87 6.96 27.85 3.6 45.53-8.08 62.4-3.97 5.75-3.52 9.2.06 8.97 4.14-.28 10.21-4.95 15.11-12.52 3.1-4.8 5.1-10.45 8.05-21.53l1.69-6.35c.66-2.47 1.24-4.52 1.83-6.5 4.93-16.56 11-27.28 21.56-34.76 7.15-5.06 23.73-15.5 25.48-16.75 6.74-4.81 10.53-9.44 14.34-18 7.74-17.44 21.09-24.34 44.47-24.34 9.36 0 17.91-1.13 29.53-3.49a624.86 624.86 0 0 0 6.2-1.28c2.4-.5 4.07-.84 5.66-1.13 4.03-.74 7.04-1.1 9.61-1.1 4.44 0 9.39-1 31.39-5.99l2.95-.66c16.34-3.67 25.64-5.35 31.66-5.35 1.54 0 2.4.01 6.4.1 7.8.15 12.27.13 17.33-.2 16.41-1.06 26.73-5.36 29.8-14.56a87.1 87.1 0 0 1 3.55-8.83c-.15.31 2.29-4.96 2.9-6.38 5.38-12.3 5.57-21.92-1.44-39.44a86.4 86.4 0 0 1-5.26-20.72c-1.61-11.98-1.38-23.14.1-40.35l.2-2.12h1l-.2 2.2c-1.48 17.15-1.7 28.24-.11 40.14a85.4 85.4 0 0 0 5.2 20.47c7.1 17.78 6.91 27.67 1.43 40.22-.62 1.43-3.06 6.72-2.91 6.4a86.17 86.17 0 0 0-3.52 8.73c-3.23 9.72-13.9 14.15-30.68 15.24-5.1.33-9.58.35-17.42.2-3.98-.09-4.84-.1-6.37-.1-5.91 0-15.18 1.67-31.44 5.32l-2.95.67c-22.16 5.02-27.05 6.01-31.61 6.01-2.5 0-5.45.36-9.43 1.09-1.58.29-3.25.62-5.64 1.11a4894.21 4894.21 0 0 0-6.2 1.29c-11.68 2.37-20.3 3.51-29.73 3.51-23.02 0-36 6.71-43.53 23.66-3.9 8.8-7.82 13.58-14.7 18.5-1.78 1.27-18.36 11.7-25.48 16.75-10.34 7.32-16.3 17.87-21.19 34.23-.58 1.96-1.15 4-1.82 6.47l-1.69 6.35c-2.98 11.18-5 16.9-8.17 21.81-5.05 7.81-11.37 12.68-15.89 12.98-4.7.31-5.3-4.23-.94-10.53 11.52-16.64 14.82-34.03 7.92-61.6-4.35-17.42-16.16-29.72-34.27-39.22-4-2.1-8.2-4-12.99-5.97-1.84-.75-3.7-1.49-6-2.38l-5.43-2.08c-8.03-3.12-20.02-.58-36.92 6.63-3.52 1.5-7.21 3.19-11.61 5.27l-13 6.22c-4.71 2.22-8.16 3.75-11.11 4.88a115.87 115.87 0 0 0-12.21 5.63c-1.58.83-7.86 4.18-9.37 4.96a56.55 56.55 0 0 1-7.9 3.54c-5.3 1.75-8.62.85-10.17-3.43-1.46-4.02.66-8.5 5.8-13.74 2.75-2.82 6.16-5.66 11.15-9.48.79-.6 6.43-4.85 7.94-6.02a66.96 66.96 0 0 0 6.23-5.28c6.74-6.74 6.1-6.16 7.61-6.51.87-.2 6.69.36 9.74.36 5.22 0 7.03-.32 8.74-1.35l1.31-.84c.62-.4 1.18-.72 1.84-1.07a41.07 41.07 0 0 1 6.96-2.72c6.64-2.04 8.22-4.84 9.28-13.47.93-7.53 1.5-10.47 3.4-15.24 1.99-4.95 5.04-7.26 9.34-7.51 3.17-.2 5.5.35 12.97 2.6a63.54 63.54 0 0 0 9.02 2.26c1.45.22 2.83.34 4.14.34 20.71 0 39.7-1.82 48.8-5.96 4.32-1.96 10.29-3.1 21.93-4.53l9.4-1.12c3.92-.48 7.11-.88 10.27-1.32 8.16-1.14 15.4-2.43 22.49-4.06 12.42-2.86 24.33-9.26 35.55-18.2a137.4 137.4 0 0 0 19.18-18.64 60.02 60.02 0 0 0 11.15-20.32c3.76-11.57 4.32-24.36.75-38.23A284.86 284.86 0 0 1 392.95 0zM506.7 0h1.26c-.5.66-.9 1.18-1.17 1.51-3.95 4.96-6.9 7.92-9.82 9.57A10.02 10.02 0 0 1 492 12.5c-2.38 0-4.24.67-6.71 2.21l-2.65 1.71c-4.38 2.8-8.01 4.08-13.64 4.08-5.6 0-9.99-1.26-16.08-4.05a202.63 202.63 0 0 1-2.3-1.06l-2.18-.98c-1.6-.7-2.92-1.17-4.17-1.48a13.42 13.42 0 0 0-3.27-.43c-2.3 0-4.3-.68-11-3.37l-1.56-.62c-5-1.97-8.1-2.82-10.52-2.66-2.93.2-4.42 2.03-4.42 6.15 0 20.76-5.21 50.42-12.15 57.35-7.58 7.59-26.55 23.7-34.06 29.06-13.16 9.4-31.17 20.2-44.11 25.06a106.87 106.87 0 0 1-13.32 4.03c-3.28.78-6.6 1.43-11.25 2.24-.53.1-8.8 1.5-11.5 1.99-4.86.87-9.3 1.74-14 2.76-20.62 4.48-25.07 5.01-38.11 5.01-2.49 0-2.9-.07-14.05-2-2.42-.42-4.31-.73-6.15-1-8.11-1.19-13.83-1.36-17.64-.2-4.54 1.4-5.93 4.65-3.7 10.52 2.02 5.28 4.84 8.61 8.84 10.74 3.26 1.74 6.75 2.6 13.82 3.71 9.42 1.48 10.94 1.75 15.5 2.92a78.2 78.2 0 0 1 18.62 7.37c8.3 4.58 14.58 11.5 19.98 20.89 2.73 4.73 9.46 19.33 10.54 21.19 3.4 5.85 6.26 6.63 10.89 2 4.95-4.94 10.35-8.37 21.13-14.06.47-.25 2.06-1.1 2.12-1.12 7.98-4.21 11.92-6.51 15.87-9.54 5.11-3.9 8.66-8.1 10.77-13.11 8.52-20.24 20.75-33.31 32.46-33.31l5.5.03c10.53.08 17.35.02 24.9-.31 13.66-.62 23.78-2.09 29.39-4.67 5.85-2.7 13.42-5.49 24.18-9.02 3.46-1.14 6.29-2.05 12.7-4.1 7.7-2.45 11.08-3.54 15.17-4.9a1059.43 1059.43 0 0 1 11.33-3.72c3.67-1.2 5.96-2 8.03-2.78a59.88 59.88 0 0 0 6.66-2.94c1.87-.98 3.76-2.1 5.86-3.5 3.48-2.33 6.15-3.13 12.04-4.13l1.15-.2c5.71-1.01 9-2.3 12.76-5.63 7.82-6.96 8.58-23.18 3.84-44.52-1.7-7.67-2.1-19.28-1.57-35.47A837.22 837.22 0 0 1 546.76 0h1l-.15 3.06c-.32 6.42-.53 11.02-.68 15.62-.51 16.1-.12 27.65 1.56 35.21 4.82 21.68 4.04 38.2-4.16 45.48-3.91 3.48-7.37 4.84-13.24 5.87l-1.16.2c-5.76.99-8.32 1.75-11.65 3.98a63.73 63.73 0 0 1-5.96 3.56 60.86 60.86 0 0 1-6.77 2.99c-2.09.79-4.39 1.58-8.07 2.79a5398.31 5398.31 0 0 1-11.32 3.71c-4.1 1.37-7.48 2.46-15.18 4.92-6.42 2.04-9.24 2.95-12.7 4.08-10.73 3.53-18.27 6.3-24.07 8.98-5.76 2.66-15.97 4.14-29.77 4.77-7.56.33-14.4.39-24.95.31l-5.49-.03c-11.19 0-23.16 12.79-31.54 32.7-2.19 5.19-5.84 9.52-11.08 13.52-4.02 3.07-7.99 5.39-16.01 9.62l-2.12 1.12c-10.7 5.65-16.04 9.04-20.9 13.9-5.14 5.14-8.75 4.15-12.45-2.22-1.12-1.92-7.85-16.5-10.54-21.2-5.33-9.24-11.48-16.02-19.6-20.5a77.2 77.2 0 0 0-18.4-7.28c-4.5-1.17-6.02-1.43-15.4-2.9-7.17-1.12-10.74-2-14.13-3.81-4.22-2.25-7.2-5.77-9.3-11.27-2.43-6.39-.78-10.26 4.34-11.83 4-1.22 9.82-1.05 18.08.17 1.84.27 3.74.58 6.17 1 11.02 1.9 11.48 1.98 13.88 1.98 12.96 0 17.35-.52 37.9-4.99 4.71-1.02 9.16-1.9 14.03-2.77 2.71-.48 10.98-1.9 11.5-1.98 4.64-.81 7.95-1.46 11.2-2.23 4.55-1.07 8.76-2.34 13.2-4 12.83-4.81 30.79-15.59 43.88-24.94 7.47-5.33 26.4-21.4 33.94-28.94C407.3 61.98 412.5 32.49 412.5 12c0-4.61 1.86-6.9 5.35-7.15 2.63-.18 5.8.7 10.96 2.73l1.56.62c6.53 2.62 8.53 3.3 10.63 3.3 1.14 0 2.3.16 3.5.46 1.32.33 2.68.82 4.34 1.53a90.97 90.97 0 0 1 3.34 1.52l1.15.54c5.98 2.73 10.23 3.95 15.67 3.95 5.41 0 8.87-1.21 13.1-3.92.2-.13 2.1-1.38 2.66-1.72 2.62-1.63 4.64-2.36 7.24-2.36 1.47 0 2.94-.43 4.47-1.3 2.78-1.56 5.67-4.45 9.54-9.31l.7-.89zM324.54 600h-2.03c.49-2.96.91-6.2 1.28-9.66.44-4.1.76-8.25.98-12.21.08-1.39.14-2.65-.35-7.29-.47-1.94-.93-4.14-1.36-6.54-2.01-11.26-2.66-22.9-1.14-33.78a60.76 60.76 0 0 1 5.18-17.95 70.78 70.78 0 0 1 12.6-18.22c3.38-3.6 5.53-5.5 11.83-10.79 4.5-3.78 6.35-5.56 7.52-7.5.64-1.07.95-2.06.95-3.06 0-1.75 0-1.74-.75-9.23-.36-3.7-.57-6.3-.68-8.96-.5-12.1 1.62-19.6 8.11-21.76 15.9-5.3 25.89-12.1 33.45-25.54C409.6 390.65 425.85 376 436 376c12.36 0 20-1.96 29.41-8.8 6.76-4.92 9.5-6.6 12.47-7.46 2.22-.64 3.8-.74 9.12-.74 1.86 0 3.53-.83 5.57-2.62 1.08-.96 5.11-5.12 5.6-5.6 6.04-5.85 11.98-8.78 20.83-8.78 2.45 0 4.54.04 7.32.12 7.51.23 8.87.17 11.27-.7 3.03-1.1 5.53-3.03 14.75-11.17 8-7.06 10.72-8.92 22.87-16.47 1.44-.9 2.59-1.63 3.69-2.37a69.45 69.45 0 0 0 9.46-7.5c4.12-3.88 8.02-7.85 11.64-11.9v2.98a201.58 201.58 0 0 1-10.27 10.38c-3.18 3-6.2 5.35-9.72 7.7-1.12.76-2.28 1.5-3.75 2.4-12.05 7.5-14.71 9.32-22.6 16.28-9.46 8.35-12.01 10.32-15.39 11.55-2.74 1-4.19 1.06-12.01.82-2.76-.08-4.83-.12-7.26-.12-8.27 0-13.75 2.7-19.43 8.22-.44.43-4.52 4.64-5.68 5.66-2.37 2.09-4.46 3.12-6.89 3.12-5.1 0-6.6.1-8.56.66-2.67.78-5.29 2.37-11.85 7.15-9.8 7.13-17.85 9.19-30.59 9.19-9.22 0-24.96 14.2-34.13 30.49-7.84 13.94-18.24 21.02-34.55 26.46-5.31 1.77-7.21 8.51-6.75 19.78.1 2.6.31 5.19.68 8.84.75 7.62.75 7.58.75 9.43 0 1.38-.42 2.73-1.24 4.09-1.33 2.2-3.26 4.07-7.94 8-6.25 5.24-8.36 7.12-11.67 10.63a68.8 68.8 0 0 0-12.25 17.71 58.8 58.8 0 0 0-5 17.36c-1.49 10.66-.85 22.09 1.13 33.15.43 2.37.88 4.53 1.33 6.44.16.66.3 1.25.6 4.06a249.3 249.3 0 0 1-1.17 16.12c-.37 3.37-.78 6.53-1.25 9.44zm-13.4 0h-1.05l.12-.28c3.07-7.16 4.29-11.83 4.29-18.72 0-3.57-.07-4.93-.76-15.65-.77-12.04-1-19.64-.55-28.3.58-11.5 2.4-22.1 5.81-32.16 1.3-3.8 2.8-7.5 4.55-11.1 3.46-7.14 6.83-12.39 10.42-16.6a59.02 59.02 0 0 1 4.35-4.56c.43-.4 3-2.8 3.67-3.45 5.72-5.6 7.51-11.52 7.51-29.18 0-18.84 2.9-23.77 15.82-28.24 1.09-.37 1.92-.67 2.77-.98a51.3 51.3 0 0 0 6.1-2.7c4.95-2.6 9.64-6.22 14.44-11.42 25.5-27.63 37.15-35.16 56.37-35.16 8.28 0 14.54-1.95 22-6.3 1.78-1.03 13.82-8.82 18.16-11.27 2.83-1.59 5.66-3.03 8.63-4.39 7.92-3.6 13.97-4.45 26.6-4.8 7.53-.2 10.7-.49 14.26-1.58 4.55-1.4 8.06-4 10.93-8.43 2.2-3.41 6.85-7.08 14.66-12.06 1.61-1.03 3.27-2.05 5.65-3.5 9.53-5.85 11.56-7.13 14.81-9.57 5.34-4 9.3-8.37 13.68-14.77a204.2 204.2 0 0 0 5.62-8.75v1.9c-1.97 3.17-3.4 5.38-4.8 7.42-4.42 6.48-8.46 10.92-13.9 15-3.29 2.46-5.32 3.75-14.89 9.61a375.06 375.06 0 0 0-5.63 3.5c-7.7 4.9-12.26 8.52-14.36 11.76-3 4.63-6.7 7.39-11.48 8.85-3.68 1.12-6.9 1.42-14.53 1.63-12.5.34-18.44 1.18-26.2 4.7a111.08 111.08 0 0 0-8.56 4.35c-4.3 2.43-16.34 10.22-18.15 11.27-7.6 4.43-14.03 6.43-22.5 6.43-18.87 0-30.3 7.4-55.63 34.84-4.88 5.28-9.67 8.97-14.7 11.62-2 1.05-4 1.92-6.23 2.75-.86.32-1.7.62-5.37 1.87-5.08 1.76-7.44 3.25-9.28 6.37-2.23 3.78-3.29 9.94-3.29 20.05 0 17.9-1.87 24.07-7.8 29.89-.69.67-3.27 3.06-3.69 3.46a58.04 58.04 0 0 0-4.28 4.49c-3.53 4.14-6.86 9.32-10.28 16.38a95.19 95.19 0 0 0-4.5 10.99c-3.38 9.97-5.18 20.48-5.76 31.9-.44 8.6-.22 16.17.55 28.17.69 10.76.76 12.12.76 15.72 0 6.35-1.02 10.87-4.35 19zm25.08 0h-1c-.04-4.73.06-9.39.28-15.02.26-6.41-.4-11.79-2.53-24.37l-.31-1.86c-2.12-12.55-2.76-19.35-1.97-26.47 1.03-9.25 4.75-16.68 12-22.67 22.04-18.2 29.81-30.18 29.81-44.61 0-2.6-.3-4.81-.98-8.17-.97-4.79-1.1-5.68-.97-7.57.2-2.56 1.27-4.7 3.56-6.72 2.67-2.35 7.05-4.6 13.72-7.01 9.72-3.5 15.52-9.18 24.3-21.57l1.78-2.5c4.48-6.33 7.1-9.63 10.43-12.78 4.31-4.07 8.98-6.77 14.54-8.17 13.3-3.32 20.37-5.47 25.34-7.64a49.5 49.5 0 0 0 5.28-2.7c1.1-.65 1.75-1.04 4.24-2.6 2.7-1.68 5.22-2.08 11.38-2.28 5.44-.18 7.9-.43 10.97-1.41a21.47 21.47 0 0 0 9.54-6.22c4.87-5.3 10.03-7.61 17.79-8.9 1.07-.18 1.88-.3 3.86-.58 6.9-.97 9.94-1.69 13.48-3.62 4.5-2.45 6.79-4.44 23.46-19.68l3.14-2.85c9.65-8.71 16.12-13.83 21.42-16.48 4.25-2.12 7.6-4.69 11.22-8.6v1.45c-3.42 3.57-6.69 6-10.78 8.05-5.18 2.59-11.61 7.67-21.2 16.32l-3.12 2.85c-16.8 15.35-19.05 17.3-23.66 19.82-3.68 2-6.8 2.75-13.82 3.73-1.97.28-2.78.4-3.84.57-7.56 1.26-12.52 3.48-17.21 8.6a22.47 22.47 0 0 1-9.97 6.5c-3.2 1-5.72 1.27-11.25 1.45-5.98.2-8.39.57-10.89 2.13a144 144 0 0 1-4.25 2.61 50.48 50.48 0 0 1-5.39 2.75c-5.04 2.2-12.15 4.37-25.5 7.7-9.74 2.44-15.26 7.65-24.4 20.56l-1.77 2.5c-8.9 12.54-14.82 18.34-24.78 21.93-6.57 2.36-10.85 4.57-13.4 6.82-2.1 1.86-3.05 3.74-3.22 6.04-.13 1.76 0 2.63.95 7.3.7 3.42 1 5.7 1 8.37 0 14.79-7.93 27-30.18 45.39-7.03 5.8-10.64 13-11.64 22-.78 7-.14 13.73 1.96 26.2l.32 1.85c2.15 12.65 2.8 18.07 2.54 24.58-.22 5.57-.32 10.2-.28 14.98zM95.9 600h-2.04c.68-3.82 1.14-8.8 1.61-15.98.2-3.11.27-4.06.39-5.6 1.3-17.54 4.04-27.14 11.5-33.2 4.65-3.77 7.22-8.92 8.67-16 .51-2.52.7-3.87 1.33-9.17.66-5.5 1.16-8.06 2.24-10.36 1.45-3.09 3.82-4.69 7.39-4.69 14.28 0 38.48 9.12 53.6 20.2 8.66 6.35 21.26 13.32 31.74 17.11 13.03 4.71 21.89 4.41 24.75-1.73 1.7-3.64 1.92-4.11 2.65-5.77 2.93-6.67 4.69-12.2 5.25-17.5.23-2.17.24-4.23.02-6.2-.32-2.75-1.42-4.55-4.08-7.35l-1.32-1.37a30.59 30.59 0 0 1-2.41-2.79 30.37 30.37 0 0 1-2.5-4.07l-1.13-2.14c-1.62-3.1-2.68-4.6-4.12-5.56-5.26-3.5-14.8-5.5-28.55-6.83a272.42 272.42 0 0 0-9.04-.71l-2.18-.17c-9.57-.73-15.12-1.56-19.06-3.2C156.57 471.07 136 450.5 136 440c0-5.34 1.74-9.53 5.47-14.13 1.98-2.44 11.12-11.71 12.79-13.54 4.52-4.97 10.16-9.54 17.68-14.66 2.8-1.9 14.78-9.6 17.49-11.49a50.54 50.54 0 0 0 6.34-5.43c1.53-1.5 6.96-7.13 7.12-7.3 7.18-7.3 12.7-11.56 19.74-14.38 3.36-1.34 8.13-2.79 17.45-5.38a9577.18 9577.18 0 0 1 11.78-3.28 602.6 602.6 0 0 0 12.67-3.7c20.4-6.24 34-12.08 40.79-18.44 8.74-8.2 11.78-13.84 15.73-26.02 2.02-6.22 3.09-9.04 5.07-12.72 9.54-17.71 28.71-39.37 43.5-45.45C383.77 238.25 389 232.34 389 226c0-2.89 2.73-8.4 6.83-13.73 4.76-6.2 10.65-11.36 16.75-14.18 12.5-5.77 33.5-10.09 47.42-10.09 5.32 0 9.83-1.5 16.42-4.89 9.2-4.71 10.1-5.11 13.58-5.11 10.42 0 32.06-2.55 45.76-5.97l3.88-.98 3.47-.89c2.6-.66 4.33-1.08 5.93-1.43 3.9-.86 6.76-1.23 9.58-1.17 2.74.06 5.47.52 8.67 1.48 4.56 1.37 13.71-.9 22.87-5.68a68.07 68.07 0 0 0 9.84-6.2v2.4c-11.09 8.14-25.76 13.66-33.29 11.4a29.72 29.72 0 0 0-8.13-1.4c-2.63-.05-5.36.3-9.11 1.12a238 238 0 0 0-9.33 2.3l-3.9.99C522.38 177.43 500.58 180 490 180c-2.99 0-3.91.4-12.67 4.89-6.85 3.51-11.61 5.11-17.33 5.11-13.65 0-34.35 4.26-46.58 9.9-5.78 2.67-11.42 7.62-16 13.58-3.85 5.02-6.42 10.2-6.42 12.52 0 7.27-5.8 13.82-20.62 19.92-14.27 5.88-33.16 27.21-42.5 44.55-1.9 3.55-2.95 6.28-4.93 12.4-4.05 12.47-7.23 18.39-16.27 26.86-7.08 6.64-20.87 12.57-41.57 18.89a604.52 604.52 0 0 1-12.7 3.71 1495.1 1495.1 0 0 1-11.8 3.28c-9.24 2.58-13.97 4.01-17.24 5.32-6.73 2.69-12.05 6.8-19.05 13.92-.15.15-5.6 5.8-7.15 7.32a52.4 52.4 0 0 1-6.6 5.65c-2.74 1.92-14.75 9.63-17.5 11.5-7.4 5.04-12.94 9.52-17.33 14.35-1.72 1.9-10.8 11.11-12.71 13.46-3.47 4.26-5.03 8.03-5.03 12.87 0 9.5 20 29.5 33.38 35.08 3.67 1.53 9.1 2.34 18.45 3.05a586.23 586.23 0 0 0 4.34.32c3.24.23 5.07.37 6.93.55 14.08 1.37 23.82 3.4 29.45 7.17 1.82 1.2 3.02 2.91 4.8 6.29l1.11 2.13a28.55 28.55 0 0 0 2.34 3.81c.62.83 1.3 1.6 2.26 2.61.23.24 1.1 1.16 1.32 1.37 2.93 3.09 4.24 5.23 4.61 8.5.24 2.12.23 4.33-.01 6.64-.59 5.55-2.4 11.25-5.41 18.1-.74 1.67-.96 2.15-2.66 5.8-3.49 7.47-13.33 7.8-27.25 2.77-10.67-3.86-23.43-10.92-32.25-17.38C164.62 515.96 140.82 507 127 507c-5 0-6.4 3.02-7.64 13.29a99.03 99.03 0 0 1-1.36 9.33c-1.53 7.5-4.3 13.04-9.37 17.16-6.87 5.58-9.5 14.78-10.77 31.8-.11 1.52-.18 2.47-.38 5.57-.46 7.01-.91 11.99-1.57 15.85zm8.05 0h-1.02c.29-1.41.58-2.94.9-4.59l1.05-5.62c2.5-13.3 4.2-19.92 6.68-24.05 1.7-2.84 3.68-5.5 8.05-11.03 8.21-10.36 10.88-14.55 10.88-18.71l-.02-1.69c-.02-1.78-.02-2.7.02-3.77.21-5.05 1.47-8.2 4.64-9.4 3.92-1.5 10.39.44 20.12 6.43 9.56 5.88 17.53 10.7 25.91 15.66 1.31.78 14.27 8.41 17.67 10.45a714.21 714.21 0 0 1 6.42 3.9c13.82 8.5 38.94 5.05 46.3-7.83 3.6-6.28 4.54-8.52 7.78-17.32a82.3 82.3 0 0 1 1.18-3.07 42.27 42.27 0 0 1 4.06-7.64c9.33-13.98 14.92-26.1 14.92-36.72 0-3.66.75-6.62 3.36-14.85.52-1.64.83-2.66 1.15-3.73 3.64-12.23 3.04-19.12-4.29-24a23.1 23.1 0 0 0-9.98-3.78c-7.2-.93-14.49 1.17-23.91 5.88-1.55.78-6.64 3.44-7.6 3.93a62.6 62.6 0 0 0-4.14 2.3l-4.4 2.66c-11.62 6.92-20.4 9.18-32.81 6.08-3.32-.84-6.24-1.4-13.1-2.64-13.25-2.39-18.7-3.75-23.33-6.46-6.23-3.67-7.46-9.02-2.88-16.65A93.1 93.1 0 0 1 172 415.42a157 157 0 0 1 8.32-7.66c-.07.05 6.16-5.3 7.82-6.77a85.12 85.12 0 0 0 6.5-6.33c7.7-8.46 12.78-13.36 20.08-18.57 9.94-7.1 21.4-12.36 35.18-15.58 37.03-8.64 51-12.7 58.83-17.93 8.6-5.73 21.3-24.77 36.84-54.81 5.22-10.1 12.27-18.4 21.13-25.71 5.13-4.24 9.56-7.25 17.55-12.23 7.42-4.62 9.62-6.14 11.38-8.16a21.15 21.15 0 0 0 2.95-4.87c.61-1.3 2.87-6.47 3-6.77 1.36-3 2.56-5.4 3.95-7.73 6.53-10.97 16.03-18 31.4-20.8 12.73-2.3 19.85-2.7 29.68-2.3 3.25.13 4.13.16 5.6.14 5.15-.07 9.71-1.04 16.61-3.8 20.74-8.3 38.75-12.04 59.19-12.04 3.05 0 6.03.15 10.48.48l2.09.16c12.45.96 18.08.96 25.34-.63a49.65 49.65 0 0 0 14.09-5.45v1.15a50.52 50.52 0 0 1-13.88 5.28c-7.38 1.61-13.08 1.61-25.63.65l-2.08-.16c-4.43-.33-7.39-.48-10.41-.48-20.3 0-38.2 3.72-58.81 11.96-7.01 2.8-11.7 3.8-16.97 3.88-1.5.02-2.39-.01-5.66-.14-9.76-.4-16.8-.01-29.47 2.3-15.06 2.73-24.32 9.58-30.71 20.31a72.8 72.8 0 0 0-3.9 7.63c-.12.28-2.39 5.47-3.01 6.79a22 22 0 0 1-3.1 5.1c-1.86 2.13-4.07 3.66-11.6 8.35-7.95 4.96-12.35 7.95-17.44 12.15-8.76 7.23-15.73 15.43-20.89 25.4-15.61 30.2-28.36 49.32-37.16 55.19-7.98 5.32-21.97 9.39-59.17 18.07-13.65 3.18-24.98 8.39-34.82 15.42-7.22 5.16-12.27 10.01-19.92 18.43a86.07 86.07 0 0 1-6.57 6.4c-1.67 1.48-7.91 6.83-7.84 6.77-3.27 2.84-5.8 5.16-8.26 7.62a92.1 92.1 0 0 0-14.27 18.13c-4.3 7.16-3.22 11.89 2.53 15.26 4.47 2.63 9.88 3.99 23.24 6.39a185.7 185.7 0 0 1 12.92 2.6c12.11 3.03 20.64.84 32.06-5.96l4.4-2.65c1.66-1 2.96-1.73 4.2-2.35.95-.48 6.04-3.14 7.6-3.92 9.59-4.8 17.04-6.94 24.49-5.98a24.1 24.1 0 0 1 10.4 3.93c7.82 5.21 8.45 12.52 4.7 25.13-.32 1.07-.64 2.1-1.16 3.74-2.57 8.12-3.31 11.04-3.31 14.55 0 10.88-5.66 23.14-15.08 37.28a41.28 41.28 0 0 0-3.97 7.46c-.37.9-.73 1.82-1.18 3.04-3.25 8.85-4.21 11.13-7.84 17.47-7.67 13.42-33.43 16.95-47.7 8.18a578.4 578.4 0 0 0-6.4-3.89c-3.4-2.04-16.36-9.67-17.67-10.45-8.38-4.97-16.36-9.78-25.92-15.66-9.5-5.85-15.7-7.7-19.24-6.36-2.68 1.02-3.8 3.82-4 8.51a61.12 61.12 0 0 0-.02 3.72l.02 1.7c0 4.5-2.69 8.73-11.52 19.87-3.92 4.95-5.87 7.59-7.55 10.39-2.39 3.97-4.08 10.56-6.56 23.72l-1.05 5.62-.86 4.4zm10.5 0h-1c.03-.34.04-.68.04-1 0-12.39 8.48-33.57 19.16-43.37a26.18 26.18 0 0 0 3.67-4.17 35.8 35.8 0 0 0 2.88-4.9c.36-.72 1.75-3.66 2.1-4.36 3.22-6.29 6.84-6.54 16.97.39 1.34.9 6.07 4.16 6.4 4.38 2.62 1.8 4.67 3.2 6.7 4.56 5.03 3.39 9.37 6.2 13.51 8.7 14.33 8.67 25.49 13.27 34.11 13.27 16.86 0 32.71-5.95 39.6-14.8 1.59-2.04 3.2-5.17 5.06-9.63.8-1.92 1.64-4.06 2.67-6.8l2.74-7.33c4.66-12.44 7.76-19.06 11.56-23.27 7.9-8.79 14.87-36 14.87-52.67 0-1.9.17-3.11 1.02-8.27.37-2.2.58-3.6.74-5.07.63-5.51.21-9.46-1.68-12.39-4.6-7.1-19.7-9.23-38.46-4.78a100.57 100.57 0 0 0-18.94 6.3c-5.17 2.37-17.11 9.74-16.5 9.4-6.72 3.64-12.97 4.15-24.8 1.3-29.55-7.14-30.43-8.62-15.26-26.81 17.44-20.93 47.12-46.18 56.38-46.18 9.92 0 53.84-11.98 65.78-17.95 9.46-4.73 24.32-21.18 36.82-37.85.71-.95 13.5-21.6 19.2-29.6 9.35-13.13 18.22-22.55 26.95-27.53 7.29-4.17 13.16-10.28 18.8-18.73 1.93-2.9 10.52-17.65 12.73-20.41 1.54-1.93 3-3.21 4.52-3.89 14.07-6.25 24.22-9.04 39.2-9.04h29c4.05 0 7.36-.4 22.93-2.5l4.3-.57c9.92-1.3 16.57-1.93 21.77-1.93 1.66 0 2.95.01 6.03.04 18.61.19 28.55-.48 44.86-4.03 3.1-.67 6.13-1.78 9.11-3.31v1.12a37.96 37.96 0 0 1-8.9 3.17c-16.4 3.56-26.4 4.24-45.08 4.05-3.08-.03-4.36-.04-6.02-.04-5.15 0-11.76.63-21.64 1.92l-4.3.58c-15.64 2.11-18.94 2.5-23.06 2.5h-29c-14.81 0-24.84 2.75-38.8 8.96-1.34.6-2.69 1.78-4.14 3.6-2.16 2.68-10.72 17.39-12.68 20.33-5.72 8.57-11.7 14.8-19.13 19.04-8.57 4.9-17.36 14.23-26.63 27.24-5.68 7.97-18.47 28.64-19.22 29.63-12.6 16.8-27.52 33.32-37.18 38.15-12.06 6.03-56.14 18.05-66.22 18.05-8.82 0-38.39 25.15-55.62 45.82-14.6 17.52-14.19 18.21 14.74 25.2 11.6 2.8 17.6 2.3 24.09-1.2-.67.35 11.31-7.03 16.56-9.44 5.41-2.48 11.6-4.59 19.11-6.37 19.13-4.53 34.65-2.35 39.54 5.22 2.05 3.17 2.48 7.32 1.84 13.04a96.34 96.34 0 0 1-.75 5.13c-.84 5.08-1.01 6.29-1.01 8.1 0 16.9-7.03 44.33-15.13 53.33-3.68 4.09-6.76 10.65-11.37 22.96-.35.93-2.2 5.94-2.73 7.33-1.04 2.76-1.88 4.9-2.68 6.84-1.9 4.53-3.55 7.73-5.2 9.85-7.1 9.13-23.25 15.19-40.39 15.19-8.86 0-20.15-4.65-34.63-13.42-4.15-2.51-8.5-5.32-13.55-8.72a861.54 861.54 0 0 1-6.71-4.56l-6.4-4.39c-9.68-6.63-12.61-6.42-15.5-.75-.35.68-1.74 3.62-2.1 4.35a36.77 36.77 0 0 1-2.96 5.03c-1.12 1.57-2.37 3-3.81 4.33-10.47 9.6-18.84 30.51-18.84 42.63l-.03 1zm-29.65 0h-1.1c1.17-2.52 1.79-5.2 1.79-8 0-20 4.83-42.04 12.15-49.35 5.17-5.18 7.77-8.38 9.9-12.74 2.64-5.41 3.95-12 3.95-20.91 0-6.82 1.14-11.59 3.37-15.07 1.74-2.7 3.6-4.21 8.91-7.52a31.64 31.64 0 0 0 3.9-2.79c4.61-3.96 6.58-6.2 7.72-9.41 1.43-4.02.93-9.04-1.86-16.02a68.98 68.98 0 0 0-3.99-8.07l-.93-1.7a75.47 75.47 0 0 1-2.64-5c-5.16-10.71-3.77-18.9 7.68-29.78a204 204 0 0 1 26.81-21.55c3.96-2.69 16.8-10.8 19.24-12.5 1.99-1.4 4.33-3.3 7.77-6.3-.02 0 7.23-6.39 9.47-8.3 4.97-4.26 9.09-7.5 13.05-10.15 4.72-3.15 8.97-5.28 12.87-6.32 12.78-3.41 15.6-4.18 21.77-5.97 12.55-3.64 21.96-6.9 28.14-10a45.47 45.47 0 0 1 7.47-2.79c8.66-2.66 12.02-4.1 16.97-8.1 6.78-5.46 13.07-14.25 19.33-27.87 15.97-34.77 19.08-39.39 32.15-49.19 3.14-2.36 6.37-4.1 11.43-6.4l2.33-1.04c11.93-5.35 16.87-8.93 21.1-17.38 1.88-3.77 2.48-6.29 3.37-12.27.78-5.19 1.48-7.56 3.53-10.25 2.57-3.4 7.03-6.27 14.36-9.01 3.37-1.26 7.36-2.5 12.05-3.73 16.33-4.3 25.28-5.36 39.6-5.81 6.9-.22 9.5-.56 12.66-2 1.19-.54 2.36-1.23 3.58-2.11 3.7-2.7 8.14-4.54 13.24-5.67 5.71-1.27 10.69-1.54 18.7-1.45l2.35.02c2.82 0 6.8-1 19.7-4.69 10.83-3.08 15.95-4.31 19.3-4.31.82 0 1.9.13 3.55.41l5.01.9c9.82 1.68 17.44 1.89 25.15-.21 7.98-2.18 14.8-6.77 20.29-14.24V147c-5.47 7.04-12.21 11.42-20.03 13.55-7.88 2.15-15.63 1.94-25.58.23l-5-.9c-1.6-.26-2.64-.39-3.39-.39-3.2 0-8.32 1.22-19.74 4.48-12.35 3.53-16.3 4.52-19.26 4.52l-2.36-.02c-7.94-.1-12.85.17-18.47 1.42-4.97 1.11-9.3 2.9-12.88 5.5a21.4 21.4 0 0 1-3.75 2.22c-3.32 1.5-6 1.87-13.04 2.09-14.25.44-23.13 1.5-39.37 5.77a125.56 125.56 0 0 0-11.95 3.7c-7.17 2.7-11.49 5.46-13.93 8.68-1.9 2.52-2.58 4.76-3.33 9.8-.9 6.08-1.53 8.68-3.47 12.56a30.6 30.6 0 0 1-9.66 11.45c-3.12 2.26-5.95 3.73-11.93 6.4l-2.31 1.04c-5.01 2.27-8.18 3.99-11.25 6.29-12.9 9.68-15.93 14.17-31.85 48.8-6.31 13.76-12.7 22.68-19.6 28.25-5.08 4.1-8.53 5.57-17.3 8.27a44.64 44.64 0 0 0-7.33 2.73c-6.24 3.12-15.7 6.4-28.3 10.06a867.4 867.4 0 0 1-21.8 5.97c-3.77 1.01-7.93 3.1-12.56 6.19a137.35 137.35 0 0 0-12.95 10.07c-2.24 1.92-9.48 8.3-9.48 8.3a98.2 98.2 0 0 1-7.84 6.37c-2.46 1.72-15.32 9.83-19.26 12.5a203 203 0 0 0-26.69 21.45c-11.13 10.58-12.43 18.3-7.47 28.63a74.52 74.52 0 0 0 2.62 4.95l.94 1.7a69.84 69.84 0 0 1 4.03 8.17c2.88 7.2 3.4 12.46 1.89 16.73-1.22 3.43-3.28 5.77-8.02 9.84-1.14.97-2.32 1.8-5.3 3.67-3.92 2.45-5.69 3.89-7.31 6.42-2.13 3.3-3.22 7.89-3.22 14.53 0 9.05-1.34 15.79-4.05 21.34-2.19 4.49-4.85 7.77-10.1 13.01-7.07 7.07-11.85 28.9-11.85 48.65 0 2.8-.58 5.48-1.7 8zm282.54 0h-1.01l-1.1-5.8c-3.08-16.26-4.05-26.2-2.74-37.26.7-5.8.77-9.68.55-15.3-.18-4.45-.17-5.68.19-7.63.78-4.3 3.44-8.53 10.39-16.34 9.07-10.2 12.26-15.41 19.8-30.15 1.35-2.64 2.33-4.47 3.38-6.3.9-1.58 1.82-3.06 2.77-4.5 3.14-4.7 7.03-8.42 16.84-16.81 11.22-9.6 15.5-13.86 18.13-19.13.7-1.4 1.3-2.8 1.93-4.4a206 206 0 0 0 1.49-4.05c3.63-9.94 8.01-13.93 22.9-17.81 4.99-1.3 20.55-5.13 21.38-5.34 16.19-4.1 25.33-7.36 33.48-12.6 5.86-3.77 5.84-3.76 27.66-16.53l2.6-1.52c10.23-6 17.1-10.2 22.73-13.95a149.3 149.3 0 0 0 8.8-6.3 723.7 723.7 0 0 0 6.37-5.08A87.74 87.74 0 0 1 600 342.95v1.12a85.76 85.76 0 0 0-15.49 9.9c.18-.14-4.76 3.84-6.38 5.1a150.3 150.3 0 0 1-8.85 6.35c-5.65 3.76-12.53 7.96-22.78 13.97l-2.6 1.53c-21.8 12.75-21.78 12.74-27.63 16.5-8.27 5.32-17.49 8.61-33.78 12.73-.83.21-16.39 4.04-21.36 5.33-8.03 2.1-13.15 4.5-16.45 7.5-2.66 2.42-4 4.86-5.77 9.7l-1.5 4.07a51.12 51.12 0 0 1-1.96 4.47c-2.72 5.45-7.04 9.75-18.38 19.45-9.73 8.32-13.6 12.02-16.65 16.6a77.18 77.18 0 0 0-2.74 4.45c-1.05 1.81-2.01 3.63-3.35 6.25-7.58 14.81-10.82 20.08-19.96 30.36-6.83 7.7-9.4 11.78-10.15 15.86-.34 1.85-.34 3.04-.17 7.4.22 5.68.14 9.6-.55 15.47-1.3 10.92-.34 20.79 2.73 36.95l1.12 5.99zm-76.59 0h-2.1l1.39-4.3c1.04-3.3 1.93-6.78 2.68-10.4 2.65-12.73 3.27-23.63 3.27-41.3 0-5.71-1.86-9.75-4.13-9.75-2.94 0-6.96 5.61-10.93 17.08C271.14 579.68 258.3 593 238 593c-22.42 0-29.26-1.35-48.42-10.09a87.69 87.69 0 0 1-9.42-5.04c-2.95-1.8-12.78-8.57-14.84-9.72-4.2-2.36-7-2.71-9.72-.99-.63.4-1.26.91-1.9 1.55a57.69 57.69 0 0 1-4.31 3.86 147.88 147.88 0 0 1-3.06 2.44l-1 .8C137.01 582.43 134 587.18 134 597c0 1.02-.02 2.01-.07 3h-2c.05-.99.07-1.98.07-3 0-10.52 3.33-15.78 12.09-22.76a265.61 265.61 0 0 1 2-1.6c.83-.64 1.43-1.13 2.03-1.61a55.76 55.76 0 0 0 4.17-3.74c.74-.73 1.48-1.34 2.24-1.82 3.47-2.2 7-1.75 11.77.93 2.15 1.21 12.03 8 14.9 9.76a85.7 85.7 0 0 0 9.22 4.93C209.29 589.7 215.85 591 238 591c19.25 0 31.49-12.7 41.06-40.33 4.24-12.25 8.66-18.42 12.81-18.42 3.8 0 6.13 5.06 6.13 11.75 0 17.8-.63 28.8-3.3 41.7-.77 3.7-1.68 7.23-2.75 10.6-.4 1.3-.8 2.53-1.19 3.7zm-149.25 0l.5-.94a160.1 160.1 0 0 0 6.53-13.26c2.73-6.29 5.78-9.64 9.24-10.52 3.74-.95 7.15.74 12.56 5.13 5.43 4.4 6.07 4.86 7.73 5.1 1.6.22 4.28 1.14 8.86 2.95 1.3.5 10.78 4.35 13.85 5.55 3.07 1.2 5.85 2.25 8.49 3.18 3.1 1.1 5.98 2.04 8.65 2.81h-3.45c-1.76-.56-3.6-1.18-5.54-1.87a281.2 281.2 0 0 1-8.51-3.19c-3.08-1.2-12.57-5.04-13.86-5.55-4.5-1.78-7.15-2.68-8.63-2.9-1.94-.27-2.53-.7-8.22-5.3-5.17-4.2-8.36-5.78-11.69-4.94-3.1.78-5.94 3.92-8.56 9.95a161 161 0 0 1-6.82 13.8h-1.13zm112.89 0a30.34 30.34 0 0 0 11.27-6.27c1.55-1.36 3.32-3.46 5.34-6.29 1.05-1.46 2.15-3.1 3.41-5.04a349.73 349.73 0 0 0 2.5-3.9l.47-.75.93-1.47a89.17 89.17 0 0 1 3.25-4.86c1.05-1.43 1.82-2.23 2.44-2.46 1.02-.37 1.49.48 1.49 2.04l.01 2.11c.05 6.91-.08 11.32-.7 16.33a48.4 48.4 0 0 1-2.38 10.56h-1.07a46.47 46.47 0 0 0 2.45-10.68c.62-4.96.75-9.33.7-16.2l-.01-2.12c0-.97-.08-1.12-.15-1.1-.36.14-1.05.85-1.97 2.1a88.44 88.44 0 0 0-3.22 4.82l-.92 1.46-.48.75a1268.1 1268.1 0 0 1-2.5 3.92c-1.26 1.95-2.38 3.6-3.44 5.08-2.06 2.88-3.87 5.04-5.5 6.45a30.87 30.87 0 0 1-8.94 5.52h-2.98zm-183.72 0H69.3c3.37-3.43 5.19-8.33 5.19-15 0-18.6-.04-17.35 1.02-20.77.6-1.93 1.5-3.74 3.27-6.63.42-.7 4.92-7.8 6.78-10.86 3.04-4.97 11.04-16.5 12.21-18.56 3.48-6.08 4.72-12.06 4.72-24.18 0-7.85 2.5-14.2 8.1-23.44l2.84-4.63a72.67 72.67 0 0 0 2.49-4.4c1.62-3.15 2.48-5.78 2.62-8.28.2-3.78-1.3-7.29-4.9-10.9-5.13-5.12-8.6-5.43-11.2-1.85-2.12 2.92-3.48 7.74-5.06 16.47-.2 1.03-.82 4.6-.82 4.57-.83 4.67-1.4 7.33-2.1 9.6-1.35 4.42-3.7 7.61-8.36 12.26l-3.26 3.2c-6.38 6.39-9.68 11.51-11.36 19.5l-1.16 5.52c-.87 4.1-1.56 7.04-2.33 9.94-3.67 13.74-9.65 25.97-22.59 44.72-7.68 11.14-11.05 18.87-10.92 23.72h-1c-.12-5.16 3.35-13.05 11.1-24.28 12.87-18.67 18.8-30.8 22.44-44.42.77-2.88 1.45-5.8 2.32-9.89l1.16-5.51c1.73-8.22 5.13-13.5 11.64-20 .63-.64 2.84-2.8 3.25-3.21 4.57-4.54 6.82-7.62 8.12-11.84a81.58 81.58 0 0 0 2.07-9.48l.81-4.57c1.62-8.9 3-13.8 5.24-16.89 3-4.15 7.2-3.78 12.71 1.74 3.8 3.8 5.42 7.58 5.2 11.66-.15 2.66-1.05 5.41-2.73 8.68a73.6 73.6 0 0 1-2.52 4.46l-2.84 4.63c-5.52 9.1-7.96 15.3-7.96 22.92 0 12.28-1.28 18.43-4.85 24.68-1.2 2.1-9.21 13.65-12.22 18.58-1.87 3.06-6.37 10.18-6.78 10.86-1.73 2.82-2.6 4.57-3.17 6.4-1.02 3.28-.98 2.1-.98 20.48 0 6.52-1.7 11.44-4.82 15zM310.09 0h1.06c-.37.9-.77 1.83-1.2 2.82-3.9 9.06-5.45 15.15-5.45 25.18 0 7.64-2.1 11.6-6.64 13.05-3.46 1.1-5.72.98-17.57-.43-11.55-1.36-19.17-1.58-28.16-.14-6.24 2.49-25.91 7.02-32.13 7.02-11.15 0-36.76-2.88-54.12-7.01a22.08 22.08 0 0 0-16.95 2.48c-4.05 2.33-7.09 5.03-13.9 11.97-6.28 6.39-9.53 9.23-13.8 11.5-7.09 3.79-11.22 7.65-13.4 12.27-1.82 3.85-2.33 7.84-2.33 15.29 0 4.4-2.65 6.69-9.45 9.74.1-.05-2.97 1.31-3.84 1.71-8.78 4.06-12.71 8.29-12.71 16.55 0 12.52-4.86 19.22-17.34 27.96l-4.56 3.14c-1.9 1.3-3.3 2.3-4.67 3.3-.92.68-1.79 1.34-2.62 2-7.16 5.62-11 14.54-15.56 33.28-.63 2.57-3.3 14-4.07 17.14a350.44 350.44 0 0 1-5.2 19.33c-1.37 4.5-4.5 15.07-4.96 16.53-1.05 3.4-1.64 4.94-2.46 6.32-.82 1.4-6.85 9.08-12.64 18.27L0 277.98v-1.9l4.58-7.35a270.8 270.8 0 0 1 12.61-18.23c-.3.5 1.35-2.8 2.38-6.12.45-1.44 3.58-12.01 4.95-16.53 1.83-6.03 3.44-12.09 5.19-19.27.76-3.13 3.44-14.56 4.06-17.14 4.62-18.95 8.52-28.02 15.92-33.83.84-.67 1.72-1.33 2.65-2.01 1.38-1.02 2.8-2.01 4.7-3.32l4.54-3.14C73.83 140.57 78.5 134.13 78.5 122c0-8.74 4.2-13.26 13.29-17.45.88-.41 3.96-1.77 3.85-1.73 6.46-2.9 8.86-4.97 8.86-8.82 0-7.6.53-11.7 2.42-15.71 2.29-4.84 6.57-8.85 13.84-12.73 4.15-2.21 7.35-5 14.15-11.93 6.28-6.4 9.36-9.13 13.52-11.53a23.07 23.07 0 0 1 17.69-2.59c17.27 4.12 42.8 6.99 53.88 6.99 6.1 0 25.73-4.53 31.92-7 9.12-1.46 16.83-1.25 28.49.13 11.63 1.38 13.9 1.5 17.15.47 4.06-1.3 5.94-4.85 5.94-12.1 0-10.1 1.56-16.3 6.6-28zm25.12 0h1c.05 5.62.26 11.48.65 19.4.47 9.7.64 14.57.64 21.6 0 9.81-4.68 17.46-13.1 23.16-6.53 4.43-14.94 7.46-24.33 9.33-3.74.54-9.42.56-22.68.23-6.74-.17-9.35-.22-12.39-.22-2.77 0-4.97.43-7.63 1.36-.88.3-4.55 1.74-5.58 2.11-6.55 2.35-13.59 3.53-24.79 3.53-8.1 0-13.58-1.38-22.46-4.9l-3.18-1.25c-12.55-4.87-21.27-5.15-37.18 1.12-11.15 4.39-18.13 9.2-22.28 14.81-3.15 4.26-4.33 7.8-5.94 15.8-1.22 6.09-1.93 8.74-3.5 12.13-1.65 3.53-3.97 5.81-7.07 7.22-2.33 1.07-4.35 1.5-9.32 2.19-9.04 1.27-12.77 3.09-15.61 9.58-3.71 8.48-7.72 13.87-14.22 19.76-2.4 2.18-13.14 11.02-15.91 13.42-8.2 7.1-13.85 17.37-18.7 31.97a258.81 258.81 0 0 0-3.27 10.7c-.01.05-2.26 7.97-2.88 10.1-8.49 28.85-17.88 52.95-26.13 61.2-2.8 2.8-5.06 5.64-10.4 12.96-3.4 4.68-6.23 8.25-8.95 11.1v-1.55c2.74-2.98 5.73-6.82 9.48-11.97 4.03-5.52 6.32-8.4 9.17-11.24 8.07-8.08 17.44-32.14 25.87-60.8.62-2.1 2.86-10.03 2.88-10.08 1.21-4.24 2.21-7.53 3.28-10.74 4.9-14.75 10.63-25.16 19-32.4 2.78-2.42 13.5-11.25 15.89-13.4 6.4-5.8 10.32-11.09 13.97-19.43 1.68-3.83 4.05-6.31 7.2-7.86 2.4-1.17 4.64-1.67 9.53-2.36 4.54-.63 6.5-1.05 8.7-2.06 2.89-1.31 5.03-3.42 6.58-6.73 1.53-3.3 2.23-5.9 3.43-11.9 1.64-8.14 2.85-11.79 6.11-16.2 4.28-5.79 11.41-10.7 22.73-15.16 16.15-6.36 25.13-6.07 37.9-1.11l3.19 1.26c8.77 3.47 14.13 4.82 22.09 4.82 11.09 0 18.02-1.16 24.46-3.47 1-.36 4.68-1.8 5.58-2.11A22.5 22.5 0 0 1 265 72.5c3.05 0 5.67.05 14.07.26 11.53.29 17.2.27 20.83-.25 9.25-1.85 17.54-4.83 23.94-9.17C332 57.8 336.5 50.46 336.5 41c0-7-.17-11.86-.7-22.7-.35-7.26-.55-12.83-.59-18.3zM93.87 0h2.04c-.7 4-1.61 6.82-3.03 9.47-2.33 4.38-2.85 5.75-5.26 13.03a40.46 40.46 0 0 1-1.94 5.03c-2.24 4.66-5.92 8.8-13.07 14.26-8.01 6.13-14.27 16.55-20.03 31.55-2.4 6.23-8.75 25.63-9.64 28.01-2.69 7.16-6.56 12.7-15.63 23.68l-2.68 3.24c-6.02 7.34-9.35 12.07-11.72 17.15-2.3 4.94-7.12 9.9-12.91 14.15v-2.4c5.14-3.94 9.1-8.3 11.1-12.6 2.46-5.27 5.87-10.1 11.98-17.56l2.68-3.26c8.94-10.8 12.72-16.22 15.3-23.1.88-2.33 7.24-21.74 9.65-28.03 5.89-15.31 12.3-26 20.68-32.41 6.92-5.3 10.4-9.2 12.48-13.55.65-1.35 1.16-2.7 1.85-4.79 2.45-7.4 3-8.83 5.4-13.34A27.68 27.68 0 0 0 93.87 0zm9.07 0h1.02c-1.66 8.3-2.91 12.67-4.54 15.26a59.14 59.14 0 0 0-4.1 8.21c-1.27 3-2.44 6.2-3.5 9.4-.38 1.12-.7 2.16-2.41 5.39a251.48 251.48 0 0 0-12.81 13.3c-3.48 3.96-5.95 7.27-7.15 9.66-.95 1.9-2.06 5.99-3.61 12.97-.64 2.9-3.65 17.15-4.51 21.07-3.63 16.45-6.63 26.69-9.9 32-7.66 12.45-10.64 15.71-37.08 41.1A69.78 69.78 0 0 1 0 179.21v-1.15a69.39 69.39 0 0 0 13.65-10.42c26.4-25.33 29.32-28.55 36.92-40.9 3.2-5.18 6.18-15.37 9.78-31.7.86-3.91 3.87-18.16 4.51-21.06 1.57-7.09 2.7-11.2 3.7-13.2 1.24-2.5 3.76-5.86 7.29-9.89.9-1.03 1.86-2.1 2.86-3.18 2.4-2.6 4.96-5.22 7.53-7.76.9-.88 1.73-1.7 3.37-3.4a129.02 129.02 0 0 1 4.78-13.46 60.07 60.07 0 0 1 4.19-8.35c1.52-2.44 2.74-6.71 4.36-14.74zM83.71 0h1.1c-2.09 4.74-6.03 8.92-11.42 12.3-7.2 4.52-16.5 7.2-24.39 7.2-8.9 0-11.8 7-11.74 21.52 0 1.7.04 3.17.12 5.99.1 3.3.12 4.45.12 5.99 0 5.73-.76 11.3-2.01 16.5a66.67 66.67 0 0 1-2.15 6.97 2597.76 2597.76 0 0 1-7 15.86A4270.8 4270.8 0 0 1 6.44 136.2 54.64 54.64 0 0 1 0 147v-1.65a54.87 54.87 0 0 0 5.55-9.57A4269.82 4269.82 0 0 0 30.7 79.97c.53-1.2.99-2.23 2.44-5.9A69.23 69.23 0 0 0 36.5 53c0-1.52-.03-2.66-.12-5.95-.08-2.83-.12-4.31-.12-6.01-.03-6.79.53-11.62 2.07-15.34 1.94-4.68 5.39-7.19 10.67-7.19 7.7 0 16.81-2.63 23.86-7.05C77.93 8.27 81.66 4.38 83.7 0zm282.63 0h1.01c1.86 10.02 2.18 12.67 2.32 18.3a123.43 123.43 0 0 1 .37 27.83c-.96 8.78-3.1 16.01-6.63 21.15-11.34 16.5-39.8 29.22-66.41 29.22-5.09 0-10.47.28-16.31.83a413.8 413.8 0 0 0-24.37 3.16c-21.56 3.26-27.66 4.01-36.32 4.01-6.92 0-12.2-1.05-21.69-3.9l-2.78-.83c-1.39-.41-2.54-.74-3.65-1.02-8-2.05-14.22-2.04-21.7.72a16.32 16.32 0 0 0-9.17 8.18c-1.6 3.05-2.5 6.06-4.02 12.83-1.5 6.64-2.34 9.52-3.99 12.64a16.16 16.16 0 0 1-9.85 8.36 104.8 104.8 0 0 0-9.5 3.42c-6.55 2.8-10.1 5.57-13.8 10.47-1.33 1.75-1.03 1.3-5.43 7.9-1.98 2.97-4.66 5.8-8.48 9.14-2.01 1.76-10.71 8.83-12.88 10.7-7.37 6.35-12.58 12.14-16.63 19.14-4.22 7.3-7.8 18.3-11.28 33.26-.87 3.73-1.72 7.64-2.64 12.14l-1.18 5.8-1.09 5.45c-1.8 8.96-2.77 13.28-3.77 16.26-6.8 20.44-17.26 42.16-27.13 51.2-5.11 4.7-8.1 7.07-11.1 8.86-.9.54-1.84 1.04-2.92 1.57-.44.22-9.6 4.4-14.1 6.66l-1.22.62v-1.13l.78-.39c4.52-2.26 13.67-6.44 14.1-6.65a41.19 41.19 0 0 0 2.84-1.54c2.94-1.75 5.88-4.09 10.94-8.73 9.71-8.9 20.1-30.51 26.87-50.79.97-2.92 1.94-7.22 3.73-16.13l1.1-5.46a490.5 490.5 0 0 1 3.82-17.96c3.5-15.06 7.1-26.14 11.39-33.54 4.11-7.11 9.4-12.98 16.83-19.4 2.19-1.88 10.88-8.95 12.88-10.7 3.77-3.28 6.39-6.05 8.3-8.93 4.43-6.64 4.12-6.18 5.47-7.96 3.8-5.03 7.5-7.91 14.21-10.78 2.61-1.12 5.74-2.24 9.59-3.46a15.17 15.17 0 0 0 9.27-7.86c1.59-3.02 2.42-5.85 4.03-12.99 1.41-6.27 2.32-9.33 3.98-12.48a17.31 17.31 0 0 1 9.7-8.66c7.7-2.83 14.1-2.84 22.3-.75 1.12.29 2.28.61 3.68 1.03l3.73 1.11c8.47 2.54 13.66 3.58 20.46 3.58 8.59 0 14.67-.75 36.18-4a414.64 414.64 0 0 1 24.41-3.17c5.88-.54 11.29-.83 16.41-.83 26.3 0 54.45-12.58 65.59-28.78 3.42-4.98 5.5-12.06 6.46-20.7.84-7.74.73-16.02.02-23.9a136.2 136.2 0 0 0-.57-5.12c0-4.47-.3-6.94-2.16-17zM18.88 0h1.03C18 7.57 17.15 10.18 14.46 16.2c-1.95 4.37-2.67 9.19-2.42 14.89.2 4.33.71 7.7 2.28 16.13 1.09 5.88 1.57 8.77 1.94 12.2.96 8.9.24 16.08-2.8 22.79A463.4 463.4 0 0 1 0 109.43v-2.12a465 465 0 0 0 12.54-25.52c2.97-6.52 3.67-13.53 2.72-22.27-.36-3.4-.84-6.26-1.93-12.12-1.57-8.47-2.1-11.88-2.29-16.27-.26-5.84.48-10.81 2.5-15.33 2.64-5.9 3.48-8.47 5.34-15.8zm280.47 0a70.78 70.78 0 0 1-4.91 11.24c-2.56 4.7-4.01 8.45-4.86 11.98l-.4 1.8-.28 1.45a5.28 5.28 0 0 1-.74 2.07c-.74 1.03-1.93 1.28-5.13 1.25.92 0-9.85-.29-15.03-.29-10.2 0-18.45.82-29.46 2.56-16.87 2.66-17.73 2.77-23.66 2.52a42.57 42.57 0 0 1-8-1.09c-17.7-4.16-46.18-5.86-54.72-3.01-2.72.9-5.88 2.8-9.52 5.59a112.37 112.37 0 0 0-6.54 5.48c-1.4 1.25-9.17 8.5-10.78 9.84-1.45 1.2-8.18 7.42-8.85 8.02a114.65 114.65 0 0 1-4.55 3.9c-4.99 4.03-8.9 6.2-11.92 6.2-3.52.05-4.32 0-5.14-.4-1.13-.56-1.5-1.72-1.13-3.57.74-3.63 4.47-10.84 12.84-24.8 5.69-9.48 9.42-18 11.78-26.2 1.45-5.04 1.94-7.4 2.97-14.54h1.01c-1.05 7.3-1.54 9.7-3.01 14.82-2.39 8.28-6.16 16.89-11.9 26.44-8.3 13.84-12 21.01-12.7 24.48-.3 1.45-.08 2.14.59 2.47.6.3 1.35.35 3.48.3 3.92 0 7.69-2.1 12.5-5.98 1.4-1.13 2.87-2.39 4.51-3.86.66-.59 7.41-6.83 8.88-8.05 1.59-1.33 9.34-8.55 10.75-9.82 2.4-2.15 4.55-3.96 6.6-5.53 3.72-2.85 6.97-4.8 9.81-5.74 8.76-2.92 37.41-1.22 55.27 2.99 2.57.6 5.14.95 7.81 1.06 5.84.25 6.7.14 23.47-2.51 11.05-1.75 19.36-2.57 29.6-2.57 5.2 0 15.99.3 15.05.29 2.87.03 3.84-.17 4.3-.83.23-.32.4-.8.58-1.7l.28-1.43.4-1.85c.88-3.6 2.36-7.44 4.96-12.22 1.87-3.43 3.44-7 4.73-10.76h1.06zm-8.59 0c-5.91 17.94-9.55 22-19.76 22-4.5 0-10.22.32-28.69 1.5l-1.53.1c-15.6.99-23.47 1.4-28.78 1.4-5.35 0-13.24-.96-28.86-3.28l-1.54-.23C163.18 18.75 157.47 18 153 18c-4.45 0-7.3 1.01-10.96 3.34-.1.06-1.8 1.17-2.3 1.47-2.43 1.5-4.32 2.19-6.74 2.19-2.8 0-4.11-1.46-4.11-4.22 0-1.04.16-2.29.5-4.1.16-.82.9-4.4 1.07-5.32.8-4.11 1.3-7.68 1.47-11.36h2c-.17 3.82-.68 7.5-1.5 11.75-.19.94-.92 4.5-1.07 5.31a21.04 21.04 0 0 0-.47 3.72c0 1.7.46 2.22 2.11 2.22 1.99 0 3.55-.57 5.7-1.9.47-.28 2.15-1.37 2.26-1.44C144.92 17.14 148.12 16 153 16c4.62 0 10.3.74 28.9 3.51l1.53.23C198.93 22.04 206.8 23 212 23c5.25 0 13.11-.41 28.65-1.4l1.54-.1C260.73 20.32 266.43 20 271 20c8.95 0 12.15-3.4 17.66-20h2.1zM141.51 0h1.13c-2.06 3.86-2.63 5.1-2.77 6.19-.15 1.12.42 1.64 2.32 1.96 1.8.3 3.85.35 10.81.35 6.02 0 13 .56 21.35 1.62 3.95.5 8.03 1.1 13.13 1.89 24 3.7 22.5 3.49 26.83 3.49 24.02 0 51.83-2.24 60.45-6.94 2.88-1.57 5.05-4.49 6.6-8.56h1.07c-1.64 4.47-3.98 7.69-7.2 9.44-8.83 4.82-36.67 7.06-60.92 7.06-4.41 0-2.84.22-26.98-3.5-5.1-.8-9.17-1.38-13.1-1.88-8.31-1.06-15.26-1.62-21.23-1.62-7.04 0-9.1-.05-10.97-.37-2.38-.4-3.38-1.32-3.15-3.07.16-1.22.69-2.41 2.63-6.06zm76.4 0c5.69 1.64 10.37 2.5 14.09 2.5 9.59 0 16.7-.71 22.4-2.5h2.98C251.12 2.53 243.2 3.5 232 3.5c-4.5 0-10.32-1.21-17.53-3.5h3.45zM70.69 0c-2.87 3.27-6.95 5.39-12.02 6.53-3.98.89-7.5 1.08-12.92 1A97.24 97.24 0 0 0 44 7.5c-5.37 0-8.86-1.24-10.1-4.97A8.6 8.6 0 0 1 33.5 0h.99c.02.82.14 1.56.36 2.22C35.91 5.39 39.02 6.5 44 6.5l1.76.02c5.35.09 8.8-.1 12.69-.97C62.95 4.54 66.63 2.74 69.3 0h1.37zM0 207.87c7.31-.16 11.5 3.33 11.5 11.13 0 11.41-5.05 28.35-11.5 41.5v-2.3c5.93-12.72 10.5-28.47 10.5-39.2 0-7.18-3.7-10.3-10.5-10.13v-1zm0 7.05c1.23.14 2.18.58 2.87 1.31 1.4 1.48 1.6 3.72 1.16 7.58l-.16 1.3A28.93 28.93 0 0 0 3.5 229c0 3.2-1.48 9.52-3.5 15.9v-3.45c1.49-5.13 2.5-9.87 2.5-12.45 0-.98.08-1.75.37-4.02l.16-1.29c.42-3.56.24-5.59-.88-6.77-.5-.53-1.21-.87-2.15-1v-1zM0 410.9v-1.47a21.67 21.67 0 0 0 2.97-4.7c1.32-2.7 2.68-6.28 4.56-11.89 7.85-23.55 7.83-26.6.25-30.4-2.25-1.12-4.8-1.43-7.78-.91v-1.02a13.1 13.1 0 0 1 8.22 1.04c8.24 4.12 8.26 7.6.25 31.6-1.88 5.66-3.25 9.27-4.6 12.02A20.82 20.82 0 0 1 0 410.9zM33.64 452c1.68 0 3.04-.23 8.34-1.31l2.38-.47c8.26-1.57 12.72-1.3 14.53 2.33 1.38 2.75-.47 5.86-4.75 9.68a75.6 75.6 0 0 1-5.08 4.07c-.94.7-4.89 3.59-5.79 4.27-1.86 1.4-2.97 2.37-3.47 3.03a19.08 19.08 0 0 0-2.89 5.5c.07-.2-4.02 13.65-6.96 22.22-2.7 7.85-5.56 10.72-8.82 8.59-2.11-1.4-3.66-4.24-6.6-11.03-1.98-4.62-2.5-5.76-3.4-7.4-4.55-8.18-3.9-23.9-.05-32.87a9.6 9.6 0 0 1 6.98-5.96c2.59-.66 4.86-.75 11.78-.67l3.8.02zm0 2c-1.13 0-2.09 0-3.82-.02-12.07-.13-14.83.57-16.9 5.41-3.63 8.47-4.26 23.55-.05 31.12.96 1.73 1.48 2.88 3.5 7.58 2.72 6.3 4.24 9.08 5.86 10.14 1.64 1.08 3.5-.8 5.82-7.55a682.9 682.9 0 0 0 6.97-22.24 21.03 21.03 0 0 1 3.18-6.04c.65-.87 1.85-1.9 3.86-3.43.92-.7 4.87-3.57 5.8-4.27 2.02-1.5 3.6-2.77 4.95-3.97 3.63-3.23 5.09-5.7 4.3-7.28-1.21-2.42-5.07-2.65-12.38-1.27l-2.35.47c-5.49 1.11-6.86 1.35-8.74 1.35zm345.63 146c-3.45-12.26-3.77-14.13-3.77-19 0-3.33-.13-6.27-.43-11.34-.63-10.33-.65-13.5.26-17.07 1.21-4.74 4.21-7.1 9.67-7.1h26c4.08 0 5.19 1.85 5.93 7.11.1.79.13.97.19 1.32.84 5.35 2.8 7.58 8.88 7.58 3.64 0 5.54.4 6.43 1.37.76.83.76 1.44.36 3.93-.85 5.26.5 8.85 7.5 13.8 6.32 4.45 11.63 5.36 16.55 3.37 3.8-1.54 6.73-4.16 11.92-10l1.1-1.23 1.09-1.23a75.6 75.6 0 0 1 2.7-2.86 35.81 35.81 0 0 1 9.57-6.73c1.52-.76 1.72-.86 5.66-2.63 6.1-2.73 9.01-4.5 11.74-7.62 2.63-3 4.67-4.85 6.7-6.04 3.18-1.85 5.46-2.13 13.68-2.13 5.98 0 10.56-4.32 18-14.99l2.82-4.03c1.06-1.5 1.94-2.7 2.79-3.79 7.87-10.12 19.38-10.4 30.74.96 5.54 5.53 10.17 19.43 13.64 38.51 2.5 13.75 4.18 29.46 4.47 39.84h-1c-.3-10.32-1.96-25.97-4.45-39.66-3.43-18.87-8.02-32.65-13.36-37.99-10.95-10.95-21.76-10.68-29.26-1.04-.83 1.07-1.7 2.26-2.75 3.75l-2.81 4.02c-7.65 10.95-12.38 15.42-18.83 15.42-8.04 0-10.21.26-13.17 2-1.92 1.12-3.9 2.9-6.45 5.83-2.86 3.26-5.87 5.09-12.09 7.88a103.35 103.35 0 0 0-5.62 2.6 34.84 34.84 0 0 0-9.32 6.54 74.67 74.67 0 0 0-3.75 4.05l-1.1 1.24c-5.28 5.95-8.29 8.64-12.28 10.25-5.26 2.13-10.92 1.17-17.5-3.48-7.33-5.17-8.82-9.15-7.92-14.77.34-2.12.34-2.6-.1-3.1-.64-.69-2.34-1.04-5.7-1.04-6.63 0-8.96-2.63-9.87-8.42l-.2-1.34c-.67-4.82-1.53-6.24-4.93-6.24h-26c-5 0-7.6 2.04-8.7 6.34-.88 3.43-.85 6.57-.23 16.76a177 177 0 0 1 .43 11.4c0 4.78.32 6.63 3.81 19h-1.04zm13.68 0c-1.31-6.58-1.61-10.71-1.36-14.84.04-.7.1-1.44.18-2.38l.23-2.56c.34-3.81.5-6.97.5-11.22 0-4.94 1.46-7.76 4.21-8.42 2.38-.58 5.56.54 9.2 3 6.64 4.52 13.99 13.07 16.55 19.23 4.77 11.44 14.12 15.69 33.54 15.69 8.6 0 14.32-2.35 20.67-7.88 1.45-1.26 15.06-15 21-20 7.21-6.07 11.77-7.59 20.62-8.32 5.52-.45 7.98-.9 11.44-2.36 4.58-1.95 9.36-5.48 14.9-11.29 7.43-7.76 13.25-8.92 17.47-4.3 3.32 3.63 5.46 10.58 6.82 20.24.73 5.17.94 7.74 1.58 17.38.25 3.75.17 5.32-.92 18.03h-1c1.09-12.7 1.17-14.28.92-17.97-.64-9.6-.85-12.16-1.57-17.3-1.33-9.47-3.43-16.27-6.56-19.7-3.76-4.11-8.93-3.08-16 4.32-5.65 5.9-10.54 9.5-15.25 11.5-3.58 1.53-6.13 1.99-11.6 2.44-8.8.72-13.17 2.18-20.2 8.1-5.9 4.96-19.5 18.7-21 19.99-6.52 5.68-12.47 8.12-21.32 8.12-19.78 0-29.5-4.42-34.46-16.3-2.49-5.97-9.71-14.38-16.2-18.79-3.42-2.32-6.36-3.35-8.4-2.86-2.2.53-3.44 2.92-3.44 7.45 0 4.28-.16 7.47-.5 11.31l-.23 2.56c-.09.93-.14 1.65-.19 2.35-.24 4.08.06 8.18 1.39 14.78h-1.02zm113.75 0c2.52-3.26 8.93-11.79 10.9-14.3 5.48-6.98 13.05-12.38 19.4-13.94 7.01-1.71 11.5 1.45 11.5 9.24 0 4.02-.04 5.16-.74 19h-1c.7-13.85.74-15 .74-19 0-7.12-3.86-9.83-10.26-8.26-6.11 1.5-13.5 6.77-18.85 13.57-1.86 2.36-7.65 10.07-10.43 13.69h-1.26zm-9.86-338.96c3.44 2.71 7 5.1 11.44 7.75 1.06.64 8.42 4.9 10.35 6.1 11.27 7 15 13.35 12.35 25.33-1.45 6.52-4.53 11.1-9.39 14.44-3.83 2.63-8.07 4.26-16.08 6.56-11.97 3.45-13.68 3.99-18.82 6.28a60.18 60.18 0 0 0-7.81 4.18c-11.11 7.07-19.1 7.7-27.96 3.28-3.56-1.77-17.2-11-17.2-11.01a101.77 101.77 0 0 0-5.2-3.07c-16.04-8.83-34.27-24.16-34.52-31.85-.11-3.46 1.99-6.57 6.28-10.26 1.03-.9 2.18-1.81 3.68-2.95.72-.55 3.38-2.56 3.94-3 4.47-3.4 7.18-5.79 9.32-8.45 11.12-13.82 26.55-28.68 34.36-32.28 12.06-5.54 19.84-5.77 27.37.12 3.25 2.54 5.65 6.54 8.58 13.35.29.65 2.3 5.45 2.88 6.74 1.62 3.65 2.9 5.8 4.24 6.94.72.6 1.45 1.2 2.2 1.8zm-3.49-.28c-1.63-1.39-3.03-3.74-4.77-7.65-.58-1.3-2.6-6.12-2.88-6.76-2.81-6.5-5.08-10.3-7.98-12.56-6.83-5.35-13.85-5.15-25.3.12-7.45 3.42-22.7 18.12-33.64 31.72-2.27 2.82-5.08 5.3-9.67 8.79l-3.94 2.98a79.98 79.98 0 0 0-3.59 2.88c-3.87 3.33-5.67 6-5.58 8.69.21 6.64 18.14 21.72 33.48 30.15 1.76.97 3.5 2 5.3 3.13.12.08 13.61 9.22 17.03 10.92 8.22 4.1 15.46 3.52 26-3.18a62.17 62.17 0 0 1 8.07-4.31c5.25-2.35 7-2.9 19.08-6.38 7.8-2.24 11.9-3.82 15.5-6.3 4.44-3.04 7.23-7.18 8.56-13.22 2.44-11.02-.83-16.6-11.45-23.2-1.9-1.18-9.23-5.42-10.32-6.08-4.5-2.69-8.13-5.12-11.64-7.9-.77-.6-1.52-1.21-2.26-1.84zM87.72 241.6c4.3-2.98 7.88-5 12.14-6.95.84-.4 1.73-.78 2.78-1.24l4.37-1.88a164.3 164.3 0 0 0 17.74-8.96 320.67 320.67 0 0 1 27.87-14.5c4.22-1.95 21.89-9.84 21.17-9.52 19.17-8.62 28.1-6.93 49.5 8.05 7.91 5.54 13.24 13.25 16.45 22.66 3.02 8.83 3.76 16.51 3.76 27.75 0 8.32-.66 12.95-3.68 18.97-4.18 8.36-12.3 16.14-25.58 23.47-24.45 13.49-38.83 27.55-52.83 47.84-8.83 12.8-47.76 44.21-65.16 54.15C75.04 413.55 48.89 423.5 31 423.5c-10.05 0-14.67-4.78-14.76-13.37-.07-6.32 2.06-13.73 6.3-24.32 2.95-7.37 2.02-12.9-2.16-22.29-3.19-7.17-3.88-9.14-3.88-12.52 0-3.35 1.87-6.9 5.52-11.07 2.61-3 3.5-3.83 11.9-11.5 5.09-4.66 8.08-7.6 10.7-10.75 9.46-11.36 12.62-19.47 17.9-44.78 3.12-15.05 6.63-20.28 15.12-25.25.8-.47 3.95-2.25 4.7-2.68a76.66 76.66 0 0 0 5.38-3.38zm.56.82a77.63 77.63 0 0 1-5.44 3.43l-4.7 2.67c-8.23 4.82-11.57 9.81-14.65 24.6-5.3 25.45-8.51 33.7-18.1 45.21-2.66 3.19-5.68 6.16-10.8 10.84-8.36 7.64-9.24 8.48-11.82 11.42-3.5 4.01-5.27 7.36-5.27 10.42 0 3.18.68 5.1 3.8 12.12 4.27 9.6 5.24 15.37 2.16 23.07-4.18 10.47-6.29 17.78-6.22 23.93.08 8.06 4.26 12.38 13.76 12.38 17.67 0 43.68-9.9 64.75-21.93 17.28-9.88 56.1-41.2 64.84-53.85 14.08-20.42 28.57-34.59 53.17-48.16 13.12-7.23 21.09-14.87 25.17-23.03 2.92-5.86 3.57-10.35 3.57-18.53 0-11.13-.74-18.73-3.7-27.43-3.15-9.22-8.36-16.75-16.09-22.16-21.13-14.8-29.7-16.42-48.5-7.95.7-.32-16.96 7.56-21.17 9.5-1.7.8-3.3 1.55-4.86 2.3a319.68 319.68 0 0 0-22.93 12.17 165.3 165.3 0 0 1-17.85 9.01l-4.37 1.88c-1.04.45-1.92.84-2.76 1.23a74.56 74.56 0 0 0-11.99 6.86zm-7.6 12.2c7.7-6.25 12.3-8.17 23.68-11.27 6.12-1.67 9.12-2.95 12.31-5.72 3.8-3.3 7.47-4.52 15.86-6.1 2.75-.52 3.67-.7 5.06-1.02 5.48-1.24 9.48-2.93 13.1-5.89 10.42-8.53 25.4-14.11 36.31-14.11 5.33 0 16.77 7.58 25.74 17.16 10.73 11.46 15.96 23.27 12.73 32.5-3.18 9.1-11.39 18.57-23.03 27.86-8.44 6.73-18.36 13-25.22 16.43-3.72 1.86-6.59 4.88-9.77 9.99-.69 1.1-11.1 20.25-16.03 27.83-5.62 8.65-15.4 17.36-30.23 27.96a552.58 552.58 0 0 1-9.2 6.42c-.13.09-6.81 4.65-8.6 5.89-6.47 4.46-10.35 7.35-13.05 9.83-11.64 10.67-37.14 15.54-43.7 8.98-1.96-1.96-2.2-4.06-1.95-10.52.37-9.42-.5-14.5-4.95-20.51a34.09 34.09 0 0 0-7.04-6.92c-3.93-2.95-6.07-6.11-6.56-9.49-.97-6.61 3.87-13.06 14.17-21.69 1.58-1.32 6.67-5.44 7.09-5.78a48.03 48.03 0 0 0 5.23-4.77c4.1-4.63 5.85-9.55 7.8-20.07a501.52 501.52 0 0 0 .8-4.37c.33-1.87.6-3.3.88-4.73.74-3.78 1.5-7.18 2.4-10.63 1-3.78 1.38-5.5 2.36-10.37.6-3.02.93-4.21 1.56-5.47 1.22-2.45 1.27-2.5 12.25-11.42zm.64.78c-10.77 8.74-10.88 8.84-12 11.08-.58 1.16-.88 2.3-1.47 5.22-.98 4.89-1.36 6.63-2.37 10.44-.9 3.43-1.65 6.8-2.39 10.56a339.79 339.79 0 0 0-1.29 6.95l-.39 2.15c-1.98 10.68-3.77 15.74-8.04 20.54a48.77 48.77 0 0 1-5.34 4.88c-.42.34-5.5 4.47-7.07 5.78-10.04 8.4-14.72 14.65-13.83 20.78.45 3.1 2.44 6.03 6.17 8.83 3 2.25 5.39 4.62 7.24 7.12 4.63 6.24 5.52 11.52 5.15 21.15-.25 6.14-.01 8.1 1.66 9.78 6.1 6.1 31.02 1.33 42.31-9.02 2.75-2.52 6.66-5.43 13.16-9.92l8.6-5.89c3.63-2.48 6.45-4.44 9.19-6.4 14.73-10.54 24.44-19.18 29.97-27.7 4.9-7.54 15.31-26.68 16.02-27.8 3.27-5.26 6.26-8.41 10.18-10.37 6.79-3.4 16.65-9.63 25.03-16.32 11.52-9.18 19.61-18.53 22.72-27.4 3.07-8.78-2.02-20.27-12.52-31.49-8.8-9.4-20.04-16.84-25.01-16.84-10.67 0-25.43 5.5-35.68 13.89-3.76 3.07-7.9 4.81-13.5 6.09-1.41.32-2.35.5-5.11 1.02-8.21 1.55-11.76 2.73-15.38 5.88-3.34 2.9-6.45 4.22-12.7 5.92-11.26 3.07-15.75 4.94-23.31 11.09zM212 251.85c0 7.56-.6 10.92-2.6 14.3-1.1 1.84-7.66 10.05-8.6 11.3-5.96 7.94-9.33 10.28-17.26 13.76-1.34.58-2.2 1-3.03 1.5-.55.33-1.2.66-2 1.02-.71.33-4.46 1.9-5.52 2.39-6.05 2.78-8.99 5.8-8.99 10.73 0 10.97-18.95 36.12-34.51 44.87-8.18 4.6-21.3 9.36-32.78 11.86-13.33 2.9-22.49 2.48-24.62-2.32-1.32-2.97-4.4-4.26-11.98-5.81l-.6-.12c-4.84-.99-6.94-1.55-9.03-2.64-2.92-1.5-4.48-3.7-4.48-6.84 0-2.74 1.08-5.77 3.25-9.67.85-1.53 1.82-3.13 3.23-5.35-.16.25 2.83-4.4 3.67-5.76 6.69-10.7 9.85-18.5 9.85-27.22 0-18.41 11.22-33.37 27.5-42.86 5.22-3.05 9.23-3.31 15.2-2.12 5.04 1 6.05.9 7.43-1.52 4.5-7.85 7.04-9.5 15.87-9.5 3.93 0 6.97-.98 10.47-3.16 1.56-.97 8.67-6.17 10.99-7.68 9.2-5.98 11.34-7 25.2-11.95 6.95-2.48 15.18 1.28 22.33 9.12 6.55 7.19 11.01 16.61 11.01 23.67zm-2 0c0-6.5-4.25-15.48-10.49-22.32-6.67-7.32-14.16-10.74-20.17-8.59-13.73 4.9-15.73 5.85-24.8 11.75-2.24 1.46-9.37 6.68-11.01 7.7-3.8 2.36-7.2 3.46-11.53 3.46-8.08 0-9.98 1.23-14.13 8.5-1.1 1.91-2.51 2.88-4.35 3.09-1.3.14-1.9.05-5.22-.61-5.53-1.1-9.07-.88-13.8 1.88-15.72 9.17-26.5 23.55-26.5 41.14 0 9.2-3.28 17.29-10.15 28.28l-3.68 5.77c-1.39 2.19-2.35 3.77-3.17 5.25-2.02 3.63-3 6.38-3 8.7 0 4.19 2.87 5.67 11.9 7.52l.61.12c8.27 1.7 11.7 3.13 13.4 6.95 3.17 7.14 36 0 54.6-10.46 14.98-8.43 33.49-32.99 33.49-43.13 0-5.9 3.47-9.48 10.16-12.55 1.1-.5 4.85-2.08 5.52-2.38.74-.34 1.32-.64 1.8-.93.92-.55 1.85-1 3.25-1.62 7.65-3.35 10.75-5.5 16.47-13.12 1.02-1.36 7.47-9.42 8.47-11.11 1.79-3.01 2.33-6.06 2.33-13.3zm-37.18-22.4c.15-.1 2.4-1.51 2.95-1.84.96-.57 1.7-.94 2.43-1.17 2.57-.83 5.06-.1 11.04 3.12 14.86 8 19.43 22.87 9.18 38.71-4.04 6.24-9.37 9-18.72 11.11-.85.2-1.2.27-3.13.68-6.04 1.29-8.78 2.08-11.6 3.65-3.63 2.02-6.09 4.98-7.5 9.44-7.87 24.93-19.72 43.34-36.28 50.31-16.45 6.93-21.13 8.53-27.98 8.89-4.94.25-9.8-.65-15.4-2.89a44.45 44.45 0 0 1-5.64-2.6c-4.02-2.33-5.14-4.74-4.5-9.31.3-2.13 3.77-15.53 4.84-20.65.63-3.05 1.19-6.14 1.75-9.69a464.04 464.04 0 0 0 1.35-8.9c1.42-9.41 2.5-14.27 4.49-18.65 2.46-5.43 6.13-9.03 11.72-11.13 6.59-2.47 10.54-3.1 18.03-3.53 4.75-.27 6.68-.64 9-2.05.61-.37 1.22-.81 1.82-1.33a30.61 30.61 0 0 0 3.37-3.4c.59-.69 2.38-2.9 2.63-3.19 3.36-4 6.3-5.53 12.33-5.53 3.94 0 5.9-.92 8.18-3.36-.17.18 2.75-3.14 3.85-4.22a30.95 30.95 0 0 1 6.79-5c1.5-.83 3.15-1.62 4.99-2.38a64.92 64.92 0 0 0 10.01-5.1zm-14.52 8.34a29.95 29.95 0 0 0-6.57 4.84 116.68 116.68 0 0 0-3.82 4.2c-2.46 2.63-4.68 3.67-8.91 3.67-5.72 0-8.39 1.39-11.57 5.17-.23.28-2.03 2.5-2.63 3.2a31.6 31.6 0 0 1-3.47 3.51c-.65.55-1.3 1.03-1.96 1.43-2.5 1.51-4.55 1.9-9.47 2.19-7.39.42-11.25 1.04-17.72 3.47-5.34 2-8.82 5.4-11.17 10.6-1.93 4.27-3 9.07-4.41 18.39l-.65 4.34-.7 4.57c-.57 3.56-1.12 6.67-1.76 9.73-1.08 5.18-4.54 18.53-4.83 20.59-.59 4.17.35 6.18 4.01 8.3 1.35.77 3.1 1.58 5.52 2.55 5.46 2.18 10.18 3.05 14.97 2.8 6.69-.34 11.32-1.93 27.65-8.8 16.21-6.83 27.92-25.01 35.71-49.7 1.49-4.7 4.12-7.86 7.97-10 2.93-1.63 5.74-2.45 11.87-3.76 1.92-.4 2.28-.49 3.12-.68 9.12-2.06 14.24-4.7 18.1-10.67 9.92-15.34 5.55-29.55-8.82-37.29-5.75-3.1-8.03-3.76-10.25-3.05-.65.2-1.33.54-2.23 1.08-.55.32-2.77 1.72-2.93 1.82a65.91 65.91 0 0 1-10.16 5.17c-1.8.75-3.42 1.52-4.89 2.33zm-42.39 32.72c16.15-2.87 26.36-.97 32.47 6.16 5.08 5.93 1.13 21.42-5.93 35.55-4.79 9.58-10.6 16.21-23.16 25.19-14.15 10.1-35.5 12.2-40.71 3.85-1.86-2.97-2.1-8.14-1.06-15.73.78-5.68 1.86-10.71 4.73-22.98l.12-.51c1.59-6.8 2.37-10.31 3.14-14.14 1.45-7.25 3.74-11.47 7.26-13.74 2.81-1.8 5.53-2.28 12.33-2.62 5.33-.27 7.56-.46 10.81-1.03zm.18.98c-3.3.59-5.56.78-10.94 1.05-6.62.33-9.23.78-11.84 2.46-3.25 2.1-5.42 6.09-6.82 13.1-.77 3.84-1.56 7.35-3.15 14.17l-.12.5c-2.86 12.24-3.93 17.26-4.7 22.9-1.03 7.36-.79 12.36.9 15.07 4.82 7.7 25.54 5.67 39.29-4.15 12.43-8.88 18.13-15.39 22.84-24.81 6.86-13.72 10.75-29 6.07-34.45-5.84-6.81-15.7-8.65-31.53-5.84zM132 276.5c7.12 0 10.66 3.08 11.25 8.7.42 4.02-.43 8.14-2.77 15.94-2.56 8.52-18.36 25.38-27.2 31.28-7.01 4.67-20.02 5.67-26.57.99-3.99-2.85-3.53-12.08.02-26.46.68-2.75 1.47-5.65 2.37-8.76a412.6 412.6 0 0 1 3.05-10.14l.37-1.2c1.48-4.8 5.1-7.75 10.73-9.27 4.4-1.2 9.54-1.5 17.48-1.33l3.89.1c3.87.11 5.42.15 7.38.15zm0 1c-1.97 0-3.53-.04-7.41-.15l-3.88-.1c-7.85-.17-12.92.13-17.2 1.3-5.32 1.43-8.67 4.16-10.03 8.6a1277.83 1277.83 0 0 1-1.6 5.21c-.68 2.2-1.27 4.17-1.82 6.1-.9 3.1-1.68 5.99-2.36 8.73-3.43 13.88-3.87 22.93-.4 25.4 6.17 4.42 18.73 3.45 25.42-1 8.66-5.78 24.33-22.49 26.8-30.73 2.3-7.67 3.14-11.71 2.73-15.56-.53-5.1-3.64-7.8-10.25-7.8zm-17.79 7a31.3 31.3 0 0 1 8.57 1.4c5.42 1.78 8.72 5.03 8.72 10.1 0 9.59-9.51 17.2-22.34 21.47-9.82 3.28-13.62-1.79-11.66-16.54.84-6.28 3.82-10.67 8.24-13.46a20.38 20.38 0 0 1 8.47-2.97zm-.6 1.08a19.39 19.39 0 0 0-7.34 2.73c-4.18 2.64-6.98 6.78-7.77 12.76-1.89 14.11 1.36 18.45 10.34 15.46C121.3 312.37 130.5 305 130.5 296c0-4.56-2.98-7.5-8.03-9.15a28.05 28.05 0 0 0-8.2-1.35c-.13 0-.35.03-.66.08zm80.87-23.45c-2.72 9.8-14.93 9.86-26.72 3.3-10.17-5.64-13.8-17.98-5-22.87a66.53 66.53 0 0 0 4.48-2.7l2.03-1.3a50.15 50.15 0 0 1 3.92-2.3c4.73-2.43 8.82-2.8 14-.72 9.16 3.66 10.98 13.33 7.3 26.6zm-20.83-24.98a49.26 49.26 0 0 0-3.84 2.25l-2.03 1.3c-.84.53-1.5.95-2.16 1.35-.82.5-1.6.96-2.38 1.39-7.94 4.4-4.59 15.8 5 21.12 11.31 6.29 22.8 6.23 25.28-2.7 3.57-12.83 1.85-21.97-6.7-25.4-4.9-1.95-8.69-1.62-13.17.7zm17.85 12.15c0 5.7-2.44 9-6.64 9.96-3.3.76-7.56-.05-11.08-1.81l-1.89-.94c-.67-.34-1.18-.62-1.63-.88-4.07-2.38-4.13-4.97.34-10.93 6.8-9.06 20.9-7.16 20.9 4.6zm-1 0c0-5.3-2.87-8.55-7.32-9.16-4.23-.57-8.99 1.44-11.78 5.16-4.15 5.54-4.1 7.44-.64 9.47.44.25.93.51 1.59.85l1.87.93c3.34 1.67 7.36 2.44 10.42 1.74 3.73-.86 5.86-3.74 5.86-9zM387 530.3c0-12.8 2.44-16.74 18.48-29.77a56.8 56.8 0 0 1 7.61-5.2c2.6-1.5 5.33-2.82 8.5-4.18 1.24-.53 2.48-1.05 4.1-1.7l3.92-1.57c9.4-3.83 13.74-6.7 16.62-12.05 1.2-2.22 2.21-4.4 3.23-6.83a148.57 148.57 0 0 0 1.54-3.84l.3-.74.56-1.44c3.2-8.02 6.05-12.08 12.7-16.5a35.26 35.26 0 0 0 4.96-4 46.36 46.36 0 0 0 3.88-4.29c.27-.34 2.55-3.2 3.2-3.98 3.48-4.15 6.51-5.9 11.51-5.9 3.08 0 5.62-.63 9.57-2.1 5.42-2.02 6.53-2.34 8.96-2.2 2.53.13 4.85 1.26 7.18 3.59 1.3 1.3 5.55 5.83 6.52 6.78 5.06 5 9.44 6.92 17.77 6.92a197.5 197.5 0 0 1 12.08.45c15.93.87 21.94.57 25.28-2.21 6.91-5.77 11.64-2.73 11.64 7.76 0 10.73-8.6 20-19 20-4.8 0-8.32 1.43-9.34 3.67-1.12 2.48.68 6.15 5.98 10.57 13.6 11.33 11.24 20.76-7.64 20.76a21.91 21.91 0 0 0-14.6 5.24c-3.28 2.71-5.8 5.86-9.85 11.82l-1.52 2.25c-3.1 4.57-5.01 7.1-7.32 9.4-6.21 6.21-9.3 7.64-13.05 6.89l-1-.23a10.82 10.82 0 0 0-2.66-.37c-1.6 0-2.41.67-8.18 6.22-4.85 4.67-8.07 6.78-11.82 6.78-1.33 0-3.46 1.15-6.45 3.45-1.27.98-2.68 2.14-4.5 3.7l-4.92 4.29a181.11 181.11 0 0 1-4.54 3.82c-9.33 7.56-15.63 10.2-20.21 6.52-2.7-2.15-4.14-4.51-4.63-7.26-.37-2.04-.26-3.63.29-7.3.87-5.85.65-8.42-1.83-11.6-2.32-2.98-2.96-3.22-3.77-2.39-.25.26-1.35 1.63-1.61 1.94-2.21 2.5-4.85 3.57-9 2.82-4.6-.84-5.57-4.11-4.72-10.09l.24-1.56c.6-3.66.68-4.93.25-5.8-.44-.86-1.9-.94-5.23.4l-.74.29c-13.78 5.54-15.26 6.09-19.43 6.67-6.03.84-9.31-1.6-9.31-7.9zm2 0c0 5 2.14 6.6 7.04 5.92 3.91-.55 5.43-1.1 18.95-6.55l.75-.3c4.17-1.66 6.7-1.54 7.76.58.71 1.43.62 2.76-.06 7l-.24 1.53c-.72 5.04-.06 7.27 3.09 7.84 3.43.62 5.38-.17 7.15-2.18.2-.23 1.34-1.66 1.68-2 1.9-1.96 3.82-1.25 6.78 2.55 2.9 3.74 3.17 6.77 2.22 13.12-1 6.75-.52 9.4 3.62 12.71 3.49 2.8 9.1.45 17.7-6.51 1.35-1.1 2.75-2.28 4.49-3.78l4.93-4.3c1.84-1.58 3.27-2.76 4.58-3.77 3.34-2.56 5.74-3.86 7.67-3.86 3.04 0 5.95-1.9 10.43-6.22l2.46-2.39c.94-.89 1.67-1.56 2.37-2.13 1.81-1.49 3.3-2.26 4.74-2.26 1.03 0 1.81.13 3.1.42.7.16.71.17.96.21 2.96.6 5.45-.55 11.23-6.33 2.2-2.2 4.06-4.65 7.09-9.11l1.52-2.25c4.15-6.11 6.76-9.37 10.22-12.24a23.9 23.9 0 0 1 15.88-5.7c16.87 0 18.62-7.01 6.36-17.23-5.9-4.92-8.12-9.41-6.52-12.93 1.42-3.12 5.67-4.84 11.16-4.84 9.25 0 17-8.34 17-18 0-8.94-2.88-10.79-8.36-6.23-3.94 3.28-9.98 3.59-26.67 2.68l-1.02-.06c-5.09-.27-7.99-.39-10.95-.39-8.88 0-13.76-2.14-19.18-7.5-1-.98-5.26-5.53-6.53-6.79-1.99-1.99-3.86-2.9-5.87-3-2.03-.12-3.06.18-8.15 2.07-4.15 1.55-6.9 2.22-10.27 2.22-4.33 0-6.84 1.46-9.98 5.2-.63.74-2.89 3.6-3.18 3.95a48.29 48.29 0 0 1-4.04 4.46 37.26 37.26 0 0 1-5.24 4.23c-6.26 4.17-8.9 7.91-11.95 15.58l-.57 1.43-.28.74a531.5 531.5 0 0 1-1.56 3.88 77.49 77.49 0 0 1-3.32 7c-3.16 5.88-7.82 8.97-17.63 12.96l-3.92 1.58c-1.6.64-2.84 1.15-4.05 1.67a79.2 79.2 0 0 0-8.3 4.08 54.8 54.8 0 0 0-7.35 5.02C391.12 514.78 389 518.21 389 530.31zm133.22-79.76c3.06 1.53 6.54 2.02 10.68 1.7 2.53-.2 4.91-.62 8.8-1.49 5.36-1.19 6.33-1.38 8.33-1.54 2.78-.23 4.82.17 6.29 1.4 1.58 1.31 1.96 2.72 1.26 4.22-.66 1.38-1.05 1.74-5.05 5.07-3.53 2.93-5.03 4.83-5.03 7.09 0 7.3 1.29 10.02 7.83 15.62 3.86 3.3 5.93 6.84 5.28 9.62-.75 3.25-4.96 5.02-12.61 5.02-7.18 0-12.7 4.61-20.03 14.68-.5.7-3.96 5.57-4.94 6.87a38.89 38.89 0 0 1-4.72 5.5c-1.06.98-2.09 1.7-3.1 2.15-2.85 1.26-5.05 1.57-9.83 1.74-7.66.27-10.87 1.45-14.98 7.1-1.58 2.17-3.11 4-4.68 5.6a42.87 42.87 0 0 1-8.65 6.69c-.15.08-10.69 6.19-14.8 8.83-3.76 2.42-6.45 2.04-8.22-.77-1.28-2.03-1.9-4.54-2.87-10.35-.84-5.08-1.27-7.08-2.06-8.93-.97-2.3-2.21-3.24-4.02-2.88-6.2 1.24-8.95 1.39-10.98.2-2.37-1.4-3.13-4.62-2.62-10.73.16-1.96-1.04-2.87-3.76-3.04-2.24-.13-4.9.2-9.94 1.12l-.69.12c-7.97 1.45-10.72 1.72-12.72.73-2.91-1.43-1.6-5.27 4.23-12.21 5.48-6.53 10.6-10.81 15.76-13.53 3.74-1.97 5.94-2.65 12.16-4.1 7.29-1.72 10.4-3.51 14.04-9.31 2.96-4.75 10.74-18.62 12.14-20.84 3.59-5.67 6.8-9.1 11.05-11.34 2.6-1.38 4.72-2.82 9.17-6.07l1.38-1.01c7.85-5.72 12.3-7.98 17.68-7.98 4.22 0 6.49 1.36 9.13 4.77.34.43 1.67 2.22 2 2.67.85 1.09 1.6 1.98 2.45 2.83a24.29 24.29 0 0 0 6.64 4.78zm-.44.9c-2.8-1.4-5-3.03-6.92-4.97-.87-.9-1.65-1.81-2.51-2.93-.35-.46-1.68-2.25-2.01-2.67-2.47-3.18-4.46-4.38-8.34-4.38-5.09 0-9.4 2.2-17.09 7.78l-1.38 1.01c-4.49 3.29-6.63 4.74-9.3 6.15-4.06 2.15-7.16 5.45-10.66 11-1.39 2.19-9.16 16.05-12.15 20.82-3.79 6.07-7.13 7.98-14.66 9.75-6.13 1.45-8.27 2.1-11.92 4.02-5.04 2.66-10.05 6.86-15.46 13.3-5.43 6.46-6.53 9.69-4.55 10.66 1.7.84 4.48.57 12.1-.81l.7-.13c5.12-.93 7.82-1.27 10.17-1.12 3.21.2 4.92 1.48 4.7 4.11-.48 5.76.2 8.64 2.13 9.78 1.73 1.02 4.34.88 10.27-.31 2.35-.47 4 .78 5.14 3.47.83 1.95 1.27 4 2.07 8.8l.06.36c.94 5.65 1.55 8.11 2.72 9.98 1.46 2.3 3.52 2.6 6.84.46 4.14-2.66 14.69-8.77 14.81-8.85a41.9 41.9 0 0 0 8.46-6.54 47.89 47.89 0 0 0 4.6-5.48c4.32-5.95 7.81-7.23 15.74-7.5 4.66-.17 6.76-.47 9.46-1.67.9-.4 1.85-1.06 2.84-1.96a38.03 38.03 0 0 0 4.6-5.36c.96-1.3 4.4-6.16 4.93-6.87 7.5-10.31 13.22-15.09 20.83-15.09 7.24 0 11.02-1.6 11.64-4.24.54-2.32-1.36-5.55-4.97-8.64-6.75-5.79-8.17-8.79-8.17-16.38 0-2.67 1.64-4.74 5.39-7.86 3.8-3.17 4.23-3.56 4.78-4.73.5-1.06.25-1.99-.99-3.03-2.23-1.85-4.72-1.65-13.76.36-3.93.87-6.35 1.3-8.94 1.5-4.3.34-7.97-.18-11.2-1.8zm-28-3.9c5.65-2.82 8.96-2.2 12.9 1.37.56.5 2.6 2.47 3.02 2.87 4.2 3.89 8.07 5.71 14.3 5.71 11.37 0 14 1.41 16.1 8.09.26.83 1.35 4.6 1.66 5.62.8 2.63 1.64 5.03 2.7 7.6 2.13 5.17 2.64 8.32 1.72 10.24-.77 1.61-2.1 2.18-5.37 2.79-2.32.43-2.8.53-3.85.85-1.85.58-3.35 1.4-4.6 2.66-1 1-2.02 2.13-3.31 3.66-.6.71-2.91 3.5-3.46 4.14-7.2 8.54-12.43 12.35-19.59 12.35-3.76 0-6.95 1.28-10.59 4-1.84 1.37-11.62 10.31-15.22 13.06a73.09 73.09 0 0 1-8.95 5.88c-4.58 2.54-7.35 3.22-8.98 2.23-1.32-.8-1.65-2.07-1.94-5.5a52.53 52.53 0 0 0-.16-1.81c-.54-4.73-2.24-6.86-7.16-6.86-7.11 0-8.85-1.23-9.73-5.41-.96-4.61-2.1-6.7-6.55-9.67-3.97-2.65-4.31-5.42-1.52-8.22 2-2 4.63-3.5 11.35-6.87 6.61-3.3 9.2-4.8 11.1-6.68a39.09 39.09 0 0 0 5.3-6.48c.98-1.5 1.83-3.04 2.88-5.13l2.12-4.3c.91-1.83 1.72-3.37 2.61-4.98 5.74-10.32 10.37-14.78 23.22-21.2zm-22.34 21.7c-.89 1.59-1.69 3.12-2.6 4.94l-2.11 4.3a52.9 52.9 0 0 1-2.94 5.23 40.08 40.08 0 0 1-5.44 6.63c-2 2-4.62 3.51-11.35 6.87-6.6 3.3-9.2 4.8-11.1 6.69-2.33 2.34-2.08 4.37 1.38 6.67 4.7 3.14 5.96 5.46 6.97 10.3.78 3.7 2.09 4.62 8.75 4.62 5.5 0 7.57 2.57 8.15 7.75.06.5.09.82.17 1.84.25 3.06.55 4.17 1.46 4.72 1.2.74 3.69.13 7.98-2.25a72.09 72.09 0 0 0 8.82-5.8c3.55-2.7 13.34-11.65 15.24-13.07 3.79-2.83 7.18-4.19 11.18-4.19 6.77 0 11.8-3.67 18.83-12l3.45-4.13a60.07 60.07 0 0 1 3.37-3.72 11.72 11.72 0 0 1 5.01-2.91c1.1-.34 1.6-.45 3.97-.89 2.95-.55 4.07-1.02 4.65-2.23.76-1.59.28-4.5-1.74-9.43a84.46 84.46 0 0 1-2.74-7.69c-.31-1.03-1.4-4.8-1.66-5.61-1.95-6.2-4.16-7.39-15.14-7.39-6.5 0-10.61-1.93-14.98-5.98-.44-.4-2.46-2.37-3.01-2.86-3.65-3.3-6.52-3.85-11.79-1.21-12.67 6.33-17.15 10.65-22.78 20.8zm55.86 11.93c-2.98 6.45-16.78 15.26-26.74 15.26-5.33 0-7.56-2.98-7.11-7.86.32-3.48 2.1-7.91 3.93-10.61l1.52-2.32a44.95 44.95 0 0 1 1.88-2.7c3.66-4.8 7.85-7.45 13.62-7.45 9.06 0 15.75 9.52 12.9 15.68zm-.9-.42c2.52-5.47-3.65-14.26-12-14.26-5.4 0-9.33 2.48-12.82 7.06-.6.8-1.17 1.6-1.85 2.64 0 0-1.2 1.87-1.52 2.33-1.74 2.57-3.46 6.85-3.77 10.14-.4 4.33 1.43 6.77 6.12 6.77 9.57 0 23.02-8.58 25.83-14.68zm-69.67 20.74c2.08.18 4.44.81 5.88 1.8 2.12 1.47 2.2 3.6-.26 6.05-5.14 5.15-12.85 4.34-12.85-1.35 0-4.66 3.14-6.84 7.23-6.5zm-.09 1c-3.56-.3-6.14 1.5-6.14 5.5 0 4.58 6.53 5.26 11.15.65 2.03-2.04 1.98-3.43.4-4.52-1.27-.88-3.48-1.47-5.4-1.63zm29.59-225.95c4.64 2.35 17.27 8.24 19.39 9.43a24.14 24.14 0 0 1 7.05 5.64 45.03 45.03 0 0 1 3.75 5.2c2.4 3.78.04 7.66-6.2 11.63-4.97 3.16-12.18 6.3-21.95 9.82-4.84 1.74-19.63 6.68-21.1 7.2-6.59 2.33-14.85.1-25.14-5.86-3.93-2.27-8-5-12.94-8.54-2.23-1.61-9.5-6.99-10.7-7.85a81.21 81.21 0 0 0-8.63-5.7c-4.82-2.6-4.45-6.64.17-12.13 3.27-3.88 4.17-4.67 18.1-16.33a230.2 230.2 0 0 0 8.89-7.74 95.2 95.2 0 0 0 4.72-4.66c5.08-5.43 9.8-6.49 14.97-3.92 2.24 1.1 4.53 2.85 7.43 5.52 1.48 1.37 6.94 6.72 7.98 7.7 5.2 4.91 9.46 8.2 14.2 10.6zm-.46.9c-4.85-2.45-9.18-5.79-14.44-10.76-1.05-1-6.5-6.34-7.97-7.69-2.83-2.61-5.06-4.3-7.2-5.37-4.75-2.36-9-1.4-13.8 3.71a96.18 96.18 0 0 1-4.76 4.71c-2.48 2.3-5.16 4.62-8.92 7.77-13.86 11.6-14.77 12.4-17.98 16.21-4.28 5.08-4.58 8.4-.46 10.61 2.23 1.2 4.9 2.99 8.74 5.77 1.2.87 8.47 6.24 10.7 7.85a154.8 154.8 0 0 0 12.85 8.49c10.06 5.82 18.07 7.98 24.3 5.78 1.48-.52 16.27-5.47 21.1-7.2 9.7-3.5 16.86-6.61 21.75-9.72 5.84-3.71 7.9-7.1 5.9-10.26a44.09 44.09 0 0 0-3.67-5.08 23.16 23.16 0 0 0-6.78-5.42c-2.08-1.16-14.68-7.05-19.36-9.4zm-38.83 8.05c3.11-.37 5.7-.13 8.4.7 2.15.66 2.74.93 8.64 3.77 4.75 2.29 8.39 3.86 13.19 5.56 8.38 2.97 11.32 6.23 8.83 9.76-2.08 2.94-8.04 5.92-17.84 9.18-8.45 2.82-15.48 2.35-21.43-.9-4.65-2.55-8.33-6.5-12.15-12.3-2.9-4.41-2.73-8.2.16-11.06 2.48-2.45 6.87-4.07 12.2-4.7zm.12 1c-5.13.6-9.33 2.16-11.62 4.42-2.53 2.5-2.68 5.77-.02 9.8 3.73 5.68 7.3 9.51 11.8 11.97 5.7 3.11 12.43 3.57 20.62.84 9.59-3.2 15.44-6.12 17.34-8.82 1.94-2.75-.5-5.45-8.35-8.24-4.84-1.72-8.5-3.3-13.28-5.6-5.84-2.81-6.42-3.07-8.5-3.71a18.42 18.42 0 0 0-8-.66zM202.5 500.38c0 4.78-1.45 7.56-4.43 8.93-2.29 1.05-4.55 1.23-10.79 1.2l-1.78-.01c-9.19 0-17-7.65-17-15.5 0-7.59 10.6-10.51 19.74-5.44 2.78 1.55 4.21 1.94 8.57 2.75 4.44.83 5.69 2.27 5.69 8.07zm-1 0c0-5.3-.9-6.34-4.88-7.08-4.45-.83-5.96-1.25-8.86-2.86-8.57-4.76-18.26-2.1-18.26 4.56 0 7.3 7.36 14.5 16 14.5h1.79c6.06.04 8.26-.14 10.36-1.1 2.6-1.2 3.85-3.6 3.85-8.02zm33.33-117.85c3.71-1.31 8.7-2.7 16.1-4.55 2.58-.65 16.53-4.04 20.56-5.05 19.59-4.93 31.55-8.9 38.23-13.35 14.93-9.95 36.87-33.88 43.83-47.8 2.25-4.5 4.65-6.38 7.68-6.25 1.26.06 2.61.45 4.32 1.2a50.81 50.81 0 0 1 3.54 1.7l1.26.63c4.78 2.34 8.38 3.44 12.65 3.44 7.2 0 10.01 3.07 8.35 7.91-1.4 4.06-5.92 8.91-11.1 12.02-8.3 4.98-11.75 17.3-11.75 33.57 0 3.59-1.37 6.28-3.98 8.36-1.98 1.58-4.2 2.6-8.47 4.16l-1.02.37c-4.85 1.75-6.98 2.77-8.68 4.46-5.09 5.1-12.54 7.15-20.35 7.15-1.38 0-2.47.92-3.99 3.1-.29.41-1.32 1.95-1.47 2.18-2.68 3.92-4.93 5.72-8.54 5.72-7.84 0-10.74.93-21.76 6.94-5.18 2.82-8.8 3.58-14.66 3.68-.26 0-.47 0-.92.02-4.82.06-7.12.3-10.51 1.34a73.43 73.43 0 0 0-8.89 3.56c-2.17 1-10.53 5.01-10.23 4.87-7.79 3.7-13.32 5.98-18.9 7.57-12.41 3.55-18.58 2.24-27.42-4.07-2.58-1.85-2.72-4.43-.83-7.62 1.45-2.45 3.9-5.09 8.08-8.97l1.78-1.64c3.92-3.6 4.48-4.11 5.9-5.53 2.32-2.32 3.12-3.5 5.48-7.63 1.93-3.36 3.37-5.11 6.27-7.06 2.3-1.54 5.34-2.98 9.44-4.43zm.34.94c-4.03 1.42-7 2.83-9.22 4.32-2.75 1.85-4.1 3.49-5.96 6.73-2.4 4.2-3.24 5.44-5.64 7.83-1.43 1.44-2 1.96-5.94 5.57l-1.77 1.63c-4.1 3.82-6.52 6.41-7.9 8.75-1.65 2.79-1.54 4.8.55 6.3 8.6 6.14 14.46 7.38 26.57 3.92 5.5-1.57 11-3.84 18.74-7.51-.3.14 8.06-3.88 10.24-4.88a74.3 74.3 0 0 1 9.01-3.6c3.51-1.09 5.89-1.33 10.8-1.4h.91c5.72-.1 9.18-.83 14.2-3.57 11.16-6.08 14.2-7.06 22.24-7.06 3.19 0 5.2-1.6 7.71-5.28l1.48-2.2c1.7-2.43 3-3.52 4.81-3.52 7.57 0 14.78-2 19.65-6.85 1.83-1.84 4.04-2.9 9.04-4.7l1.02-.37c8.6-3.13 11.79-5.67 11.79-11.58 0-16.6 3.53-29.2 12.24-34.43 5-3 9.35-7.67 10.66-11.48 1.42-4.13-.83-6.59-7.4-6.59-4.45 0-8.19-1.14-13.09-3.54-7.52-3.67-6.78-3.34-8.72-3.43-2.58-.1-4.65 1.52-6.74 5.7-7.04 14.07-29.1 38.14-44.17 48.19-6.81 4.54-18.84 8.52-38.55 13.48-4.03 1.02-17.98 4.4-20.56 5.05-7.37 1.84-12.33 3.23-16 4.52zM252 387.5c2.08 0 4-.2 7.25-.69 5.22-.77 6.64-.9 8.46-.5 2.52.56 3.79 2.35 3.79 5.69 0 4.05-2.27 7.29-6.62 10.11-3.24 2.1-6.53 3.53-14.15 6.4l-.27.1-2.28.86c-3.04 1.16-5.27 2.52-9.33 5.43l-.8.57c-8.19 5.88-13.35 8.03-23.05 8.03-4.98 0-6.88-2.03-5.75-5.62.87-2.81 3.58-6.56 7.8-11.13 1.26-1.37 2.64-2.8 4.15-4.3 3.17-3.14 11.25-10.61 11.45-10.8.46-.47.93-.89 1.4-1.26 3.38-2.71 5.77-3.08 14.18-2.93 1.65.03 2.63.04 3.77.04zm0 1c-1.15 0-2.13-.01-3.79-.04-8.18-.14-10.4.2-13.54 2.71-.44.35-.88.74-1.32 1.18-.2.21-8.3 7.69-11.45 10.82a134.6 134.6 0 0 0-4.12 4.26c-4.12 4.47-6.76 8.12-7.58 10.75-.9 2.88.45 4.32 4.8 4.32 9.46 0 14.44-2.07 22.46-7.84l.8-.57c4.13-2.96 6.42-4.36 9.56-5.56l2.3-.86.25-.1c7.55-2.84 10.8-4.25 13.97-6.3 4.08-2.65 6.16-5.6 6.16-9.27 0-2.89-.97-4.26-3-4.7-1.65-.37-3.05-.25-8.1.5-3.3.5-5.26.7-7.4.7zm112.47-45.34c-1.88 5.44-1.98 6.76-.98 12.76 1.18 7.06-1.38 16.58-5.49 16.58a16.89 16.89 0 0 0-1.51.07l-.64.04c-2.86.18-4.83.17-6.94-.17-6.55-1.06-10.41-5.14-10.41-13.44 0-13.9 2.14-19.69 8.13-26.33a21.9 21.9 0 0 0 2.52-3.75c.59-1.03 2.78-5.13 2.72-5.01 4.44-8.14 7.71-11.53 12.25-10.4 1.17.3 2.2.77 3.58 1.59l1.39.84a20 20 0 0 0 3.1 1.6c.7.27 1.8.32 4.75.26l.72-.01c3.16-.05 4.78.08 5.83.66 1.61.89 1.2 2.56-1.14 4.9a215.9 215.9 0 0 1-3.86 3.76c-10.6 10.1-12.75 12.4-14.02 16.05zm-.94-.32c1.34-3.9 3.46-6.17 14.27-16.46 1.55-1.47 2.73-2.62 3.85-3.73 1.94-1.95 2.17-2.88 1.35-3.33-.82-.45-2.37-.58-5.32-.53l-.72.01c-3.14.06-4.26.02-5.14-.34-1.06-.41-1.97-.9-3.25-1.67l-1.38-.83a12.1 12.1 0 0 0-3.31-1.47c-3.88-.97-6.92 2.17-11.13 9.9.07-.13-2.14 3.98-2.73 5.02a22.71 22.71 0 0 1-2.65 3.92c-5.81 6.47-7.87 12-7.87 25.67 0 7.79 3.48 11.47 9.57 12.45 2.01.33 3.92.34 6.71.16a371.33 371.33 0 0 0 1.23-.07c.42-.03.73-.04.99-.04 3.2 0 5.6-8.9 4.5-15.42-1.02-6.16-.91-7.64 1.03-13.24zm-9.26 12.42c.58.52 2.5 1.9 2.55 1.93 1.96 1.57 2.04 3.31.01 6.36-3.74 5.64-8.83 3.09-8.83-4.55 0-3.81.51-5.67 2.07-6.02 1.18-.26 2 .3 4.2 2.28zm-1.34 1.48c-1.5-1.35-2.23-1.85-2.43-1.8-.17.03-.5 1.23-.5 4.06 0 5.87 2.67 7.21 5.17 3.45 1.5-2.26 1.47-2.84.4-3.7.03.03-1.95-1.4-2.64-2zm222.9-130.19c2.2-1.1 3.67-1.66 5.88-2.36l.28-.09a48.92 48.92 0 0 0 8.79-3.55c4.17-2.08 6.35-1.88 6.96.84.44 2 .2 4.01-1.25 12.7-2.27 13.62-9.16 26.14-21.17 36.3-4.3 3.63-7.41 4.39-9.75 2.44-1.88-1.57-3.1-4.57-4.61-10.48-.3-1.15-1.43-5.83-1.72-6.96a114.18 114.18 0 0 0-2.71-9.22c-2.4-6.82-3.03-10.78-2.1-12.94.77-1.83 2.08-2.24 5.6-2.45 1.49-.09 2.09-.14 2.97-.28l1.95-.33c.72-.12 1.22-.2 1.68-.29 1.1-.2 1.92-.38 2.71-.6 1.7-.49 3.42-1.2 6.49-2.73zm.44.9c-3.11 1.54-4.88 2.29-6.65 2.79-.84.23-1.69.42-2.81.63a108.77 108.77 0 0 1-3.81.63c-.77.13-1.39.19-2.92.28-3.13.18-4.17.51-4.74 1.85-.78 1.84-.2 5.62 2.13 12.2a115.12 115.12 0 0 1 2.74 9.31l1.72 6.96c1.46 5.7 2.62 8.58 4.28 9.96 1.87 1.56 4.49.93 8.47-2.44 11.82-10 18.6-22.3 20.83-35.7 1.4-8.45 1.65-10.51 1.25-12.31-.41-1.87-1.86-2-5.54-.16a49.87 49.87 0 0 1-8.93 3.6l-.28.1a35.4 35.4 0 0 0-5.74 2.3zm-4.5 6.58c1.37-.32 2.5-.75 3.9-1.42.35-.18 2.57-1.31 3.32-1.67 1.5-.71 2.97-1.31 4.7-1.89 2.7-.9 4.64-.77 5.88.4.98.94 1.34 2.26 1.41 4.18.02.4.02.7.02 1.37 0 5.63-4.63 16.88-11.34 22.75-4.34 3.8-7.31 4.67-9.92 2.52-2.06-1.7-3.5-4.65-6.67-12.91-1.86-4.83-2.05-8.1-.68-10.2 1.12-1.7 2.9-2.36 5.83-2.7l1.26-.12c1.19-.12 1.75-.19 2.3-.31zm-2.1 2.3l-1.22.12c-2.4.27-3.7.76-4.39 1.81-.93 1.43-.78 4.1.87 8.38 3.02 7.84 4.41 10.71 6.08 12.09 1.63 1.34 3.64.75 7.33-2.48C584.6 250.77 589 240.08 589 235c0-.64 0-.93-.02-1.29-.05-1.44-.3-2.33-.79-2.8-.6-.57-1.8-.65-3.87.04a37.95 37.95 0 0 0-4.47 1.8c-.72.34-2.93 1.47-3.32 1.66a19.54 19.54 0 0 1-4.3 1.56c-.66.16-1.28.24-2.56.36zm-227.73-88.98c-1.59 4.3-3.54 7.25-7.14 11.4l-2.6 2.97a67.02 67.02 0 0 0-2.63 3.23 46.4 46.4 0 0 0-4.68 7.5c-2.85 5.7-7.14 10.18-12.85 13.89-4.25 2.76-8.25 4.62-15.67 7.59-11.01 4.4-16.43 1.26-27.22-16.4-2.86-4.69-8.8-8.63-17.98-12.66-3-1.33-12.88-5.24-14.43-5.92-4.96-2.18-7.04-3.72-6.42-5.85.67-2.32 5.3-4.05 15.48-6.08 16.63-3.32 26.93-3.82 39.93-3.02 7.9.49 9.67.5 12.74-.26 1.99-.48 3.92-1.3 6-2.6l2.79-1.71c9.86-6.14 12.94-7.96 17.3-9.9 6.03-2.71 10.57-3.32 13.94-1.4 7.2 4.12 7.68 7.7 3.44 19.22zm-1.88-.7c3.95-10.7 3.6-13.26-2.56-16.78-2.66-1.52-6.62-.99-12.12 1.48-4.24 1.9-7.3 3.7-17.07 9.77l-2.79 1.73a22.6 22.6 0 0 1-6.57 2.84c-3.36.81-5.22.8-13.34.3-12.84-.78-22.97-.29-39.41 3-4.9.97-8.45 1.88-10.79 2.75-2.03.76-3.04 1.45-3.17 1.91-.16.57 1.48 1.79 5.3 3.46 1.5.67 11.39 4.58 14.44 5.93 9.52 4.19 15.74 8.3 18.87 13.44 10.35 16.93 14.87 19.56 24.78 15.6 7.3-2.93 11.21-4.75 15.33-7.42 5.42-3.53 9.47-7.75 12.15-13.1 1.44-2.9 3.02-5.4 4.86-7.82a68.95 68.95 0 0 1 2.72-3.33l2.6-2.97c3.46-3.99 5.28-6.75 6.77-10.79zm-6.64-.39c-7.94 12.8-18.53 21.75-33.3 25.23-7.82 1.83-12.47-.79-13.12-5.93-.55-4.45 2.29-9.06 6-9.06 3.02 0 5.6-1.68 15.38-9.16 1.47-1.12 2.57-1.96 3.66-2.74 4.4-3.2 7.77-5.17 10.82-6.08 5.57-1.67 9.33-2.15 11.35-1.22 2.5 1.14 2.22 4.13-.79 8.96zm-.84-.52c2.72-4.4 2.94-6.74 1.21-7.53-1.71-.79-5.32-.33-10.65 1.27-2.9.87-6.2 2.79-10.51 5.92-1.08.79-2.18 1.62-3.65 2.74-10.08 7.72-12.62 9.36-15.98 9.36-3.02 0-5.5 4.02-5 7.94.56 4.5 4.62 6.78 11.89 5.07 14.48-3.4 24.86-12.18 32.69-24.77zM461.17 33.53c13.88 4.96 20.75 4.96 31.62.01 3.02-1.37 5.47-2.94 11-6.82 5.57-3.92 8.05-5.51 11.14-6.92 4.14-1.88 7.78-2.38 11.22-1.28 3.92 1.26 6.2 12.3 6.78 28.45.5 14.2-.52 28.93-2.46 34.2-1.82 4.93-5.86 8.17-11.51 10.02A41.7 41.7 0 0 1 506 93.01c-5.79 0-9 2.4-12.2 7.64-.37.59-1.55 2.6-1.71 2.87-1.75 2.9-3.05 4.33-4.93 4.95-.94.32-2.07.83-3.87 1.74l-2.43 1.23c-1.03.53-1.87.94-2.7 1.34-6.43 3.1-11.73 4.72-17.16 4.72-5.71 0-10.04 2.09-14.02 5.92-1.16 1.11-4.2 4.53-4.63 4.94-2.54 2.44-5.93 4.24-10.85 6.1-1.4.52-5.98 2.13-6.25 2.22l-2.06.78c-.89.36-1.78.63-2.7.81-5.55 1.14-11.14-.54-17.98-4.42-1.27-.73-5.13-3.06-5.76-3.42-2.05-1.16-4.12-1.53-9.09-1.9l-1.73-.15c-4.78-.4-7.68-1.14-10.22-2.97-5-3.61-6.77-7.76-5.65-12.33 1.33-5.42 6.5-11.02 14.85-17.28a169.2 169.2 0 0 1 6.5-4.61c-.33.23 4.33-2.92 5.3-3.6 2.73-1.91 4.8-3.9 12.75-12.04l1.09-1.1c3.49-3.56 5.89-5.89 8.12-7.83 2.9-2.5 4.72-5.95 7.5-13.05l.63-1.61c2.7-6.92 4.28-10 6.87-12.33 1.42-1.28 6.68-6.54 7.93-7.5 3.98-3 8.01-2.73 19.57 1.4zm-.34.94c-11.26-4.02-15-4.28-18.62-1.53-1.19.9-6.4 6.11-7.88 7.43-2.42 2.18-3.96 5.19-6.6 11.95l-.63 1.61c-2.83 7.26-4.72 10.8-7.77 13.45a141.85 141.85 0 0 0-9.16 8.87c-8.02 8.2-10.08 10.2-12.88 12.16-.99.69-5.65 3.84-5.31 3.6-2.5 1.71-4.52 3.13-6.47 4.59-8.17 6.13-13.23 11.6-14.48 16.72-1.02 4.15.58 7.9 5.26 11.27 2.36 1.7 5.11 2.4 9.72 2.8l1.73.13c5.12.4 7.28.78 9.5 2.05.65.36 4.5 2.7 5.76 3.4 6.66 3.78 12.04 5.4 17.29 4.32.86-.17 1.7-.42 2.52-.75a67 67 0 0 1 2.1-.8c.28-.1 4.86-1.7 6.24-2.22 4.8-1.8 8.08-3.56 10.5-5.88.4-.38 3.44-3.8 4.63-4.94 4.16-4 8.72-6.2 14.72-6.2 5.25 0 10.42-1.59 16.73-4.62.82-.4 1.65-.8 2.68-1.33.12-.06 1.93-.99 2.43-1.23 1.84-.93 3-1.46 4-1.8 1.6-.52 2.76-1.82 4.39-4.52l1.7-2.88c3.39-5.5 6.87-8.11 13.07-8.11 4.45 0 8.73-.49 12.64-1.77 5.4-1.76 9.2-4.8 10.9-9.41 1.87-5.11 2.9-19.75 2.39-33.83-.56-15.53-2.81-26.48-6.08-27.52-3.18-1.02-6.57-.55-10.5 1.23-3.02 1.37-5.47 2.94-11 6.83-5.57 3.92-8.05 5.5-11.14 6.92-11.13 5.05-18.26 5.05-32.38.01zM475 55c5.38 0 7.55-.21 9.72-.96 1.26-.43 9.95-4.8 14.88-6.96 1.9-.82 3.56-2.44 6.6-6.04 2.56-3.04 3.19-3.75 4.4-4.84 3.7-3.35 7.07-3.28 10.22 1.23 6.23 8.9 5.61 15.94.07 27.02a71.26 71.26 0 0 0-2.5 5.48c-.32.8-1 2.7-1.09 2.9-.17.45-.34.81-.54 1.17-.63 1.14-1.56 2.21-4.05 4.7-2.4 2.4-5.16 3.27-11.68 4.33-1.81.3-2.2.36-3 .51-6.02 1.1-9.6 2.69-12.24 6.07-3.57 4.59-7.9 7.48-14.98 10.74-.55.24-1.1.5-1.8.8l-1.78.8a60.08 60.08 0 0 0-7.7 3.9c-2.57 1.6-4.79 2.35-9.42 3.46-8.58 2.06-12.28 3.76-17.37 9.36-5.12 5.64-10.17 7.64-16.63 6.7-5.36-.79-10.63-3.01-23.56-9.48-6.3-3.15-6.43-7.78-1.5-13.56 3.38-3.94 3.52-4.06 19.4-16.44 8.12-6.33 12.97-10.57 16.63-14.88 2.53-2.98 4.2-5.73 4.96-8.3 5.5-18.3 12.5-21.98 22.78-15.56 1.95 1.22 6.61 4.55 7.18 4.9 3.36 2.15 6.52 2.95 13 2.95zm0 2c-6.84 0-10.37-.89-14.08-3.26-.63-.4-5.27-3.71-7.16-4.9-9.05-5.65-14.66-2.7-19.8 14.45-.86 2.87-2.67 5.85-5.35 9.01-3.78 4.45-8.7 8.75-16.94 15.17-15.66 12.21-15.86 12.38-19.1 16.16-4.17 4.9-4.09 8 .88 10.48 12.71 6.35 17.89 8.54 22.94 9.28 5.78.84 10.18-.9 14.87-6.06 5.42-5.96 9.45-7.82 18.38-9.96 4.43-1.07 6.5-1.76 8.83-3.22a61.7 61.7 0 0 1 7.94-4.02l1.78-.8 1.78-.8c6.82-3.13 10.91-5.87 14.24-10.14 3-3.87 7-5.64 13.46-6.82.83-.15 1.21-.21 3.04-.51 6.1-1 8.6-1.78 10.58-3.77 2.36-2.36 3.21-3.34 3.72-4.26.15-.27.29-.56.44-.94.06-.15.75-2.06 1.09-2.9.64-1.6 1.45-3.4 2.57-5.64 5.24-10.49 5.8-16.8.07-24.98-2.4-3.44-4.37-3.48-7.24-.89-1.11 1-1.73 1.7-4.22 4.65-3.24 3.85-5.04 5.59-7.32 6.59-4.82 2.1-13.62 6.53-15.03 7.01-2.44.84-4.79 1.07-10.37 1.07zm-12.7 8.6c5.47 3.9 10.34 3.72 18.23.88 5.39-1.94 5.92-2.1 7.7-2.1 2.5-.01 4.21 1.36 5.24 4.46 1.66 4.98-2.32 8.52-12.3 12.68-2.7 1.13-16.25 6.18-20 7.73-7.86 3.24-13.93 6.42-18.87 10.15-13.02 9.84-18.36 11.93-23.71 9.68a24.67 24.67 0 0 1-3.62-1.98l-1.99-1.28a90.4 90.4 0 0 0-2.24-1.4c-3.33-2-2.82-4.28.85-7.34 1.35-1.13 10.66-7.61 13.53-9.91 7.1-5.69 11.91-11.47 14.41-18.34 3.07-8.45 4.89-12.1 6.8-13.39 1.73-1.16 3.36-.53 6.18 1.9.63.56 3.4 3.08 4.11 3.7 1.93 1.7 3.71 3.15 5.67 4.55zm-.6.8c-1.98-1.42-3.79-2.88-5.74-4.6-.73-.64-3.48-3.16-4.1-3.7-2.5-2.16-3.75-2.65-4.97-1.83-1.66 1.11-3.44 4.7-6.42 12.9-2.57 7.07-7.5 12.99-14.72 18.78-2.91 2.33-12.21 8.8-13.52 9.9-3.22 2.68-3.56 4.17-.97 5.72l2.26 1.4 1.99 1.28c1.47.93 2.48 1.5 3.47 1.91 4.9 2.07 9.96.07 22.72-9.56 5.02-3.79 11.15-7 19.1-10.28 3.76-1.55 17.3-6.6 20-7.72 9.5-3.97 13.14-7.2 11.73-11.44-.9-2.71-2.25-3.8-4.3-3.79-1.6 0-2.15.17-7.36 2.05-8.17 2.94-13.34 3.14-19.16-1.01z'%3E%3C/path%3E%3C/svg%3E\");\n    border-radius: 0 3rem;\n    width: 90%;\n    height: 15em;\n    padding: 0;\n    margin: 0;\n    float: left; }\n    .scheme-panel .operate-area .node {\n      background-color: #ffbf80; }\n  .scheme-panel .lair-area {\n    background-color: #f2ccff;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23e80cad' fill-opacity='0.4'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n    border-radius: 0 3rem;\n    width: 90%;\n    height: 15em;\n    padding: 0;\n    margin: 0;\n    float: left; }\n    .scheme-panel .lair-area .node {\n      background-color: #df80ff; }\n  .scheme-panel .column {\n    width: 20%;\n    padding: 0;\n    margin: 0;\n    float: left;\n    text-align: center; }\n  .scheme-panel .node {\n    width: 3rem;\n    height: 3rem;\n    margin: 0 auto;\n    margin-top: 1rem;\n    font-size: 1.5rem;\n    border-radius: .5rem;\n    border: 1px solid;\n    cursor: pointer; }\n    .scheme-panel .node .fa {\n      margin-top: .75rem; }\n  .scheme-panel .level {\n    margin: 0; }\n  .scheme-panel .node:focus {\n    outline: none; }\n\n.scheme-flyout {\n  text-align: center;\n  float: right;\n  width: 75%;\n  border-radius: 0 0 3rem 3rem;\n  margin-right: 2.5%;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .scheme-flyout .inner-content {\n    margin: .5rem; }\n    .scheme-flyout .inner-content .scheme-icon {\n      position: relative; }\n    .scheme-flyout .inner-content .scheme-name {\n      margin: .1rem;\n      display: inline; }\n    .scheme-flyout .inner-content .benefit-header {\n      text-align: left;\n      margin: 0;\n      padding-top: 1rem; }\n    .scheme-flyout .inner-content .benefit-text {\n      text-align: left;\n      font-size: .75rem;\n      margin: 0;\n      margin-top: 1rem; }\n    .scheme-flyout .inner-content .flavor-text {\n      text-align: left;\n      margin: .1rem;\n      margin-top: 1rem;\n      font-style: italic;\n      font-size: .75rem; }\n    .scheme-flyout .inner-content .scheme-exp {\n      margin-top: 1rem;\n      margin-bottom: 1rem; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__ = __webpack_require__("../../../../../src/app/services/scheming.service.ts");
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
    function SchemePanelComponent(_player, _scheming) {
        this._player = _player;
        this._scheming = _scheming;
    }
    return SchemePanelComponent;
}());
SchemePanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'scheme-panel',
        template: __webpack_require__("../../../../../src/app/scheme-panel/scheme-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/scheme-panel/scheme-panel.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_scheming_service__["a" /* SchemingService */]) === "function" && _b || Object])
], SchemePanelComponent);

var _a, _b;
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

/***/ "../../../../../src/app/services/core/numbers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumbersService; });
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


var NumbersService = (function () {
    function NumbersService(_player) {
        this._player = _player;
        this.coinFlipChance = 0.5; //Here to be modified later.
        this.standardExpArray = [
            60, 150, 300, 600, 1800, 600, 1500, 3000, 6000, 18000, 6000, 15000, 30000, 60000, 180000, 60000, 150000, 300000, 600000, 1800000
        ];
        this.standardLairReq = [
            0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3
        ];
        this.schemeLairReq = [
            this.standardLairReq,
            this.standardLairReq,
            this.standardLairReq,
            this.standardLairReq //3: Hired Help
        ];
        this.schemeExp = [
            this.standardExpArray,
            this.standardExpArray,
            this.standardExpArray,
            this.standardExpArray //3: Hired Help
        ];
    }
    NumbersService.prototype.coinFlip = function (times) {
        var successes = 0;
        for (var _i = 0; _i < times; _i++) {
            if (Math.random() >= this.coinFlipChance) {
                successes++;
            }
        }
        return successes;
    };
    //Scheme Modifiers
    //01: Mastermind
    //1 scheme point per level per second.
    NumbersService.prototype.mastermindNumbers = function () {
        return this._player.schemes[0]['level'];
    };
    //02: Cold Logic
    NumbersService.prototype.coldLogicNumbers = function () {
        return this._player.schemes[1]['level'] * 60;
    };
    //03: Quick Thinking
    NumbersService.prototype.quickThinkingNumbers = function () {
        var successes = this.coinFlip(6);
        return successes >= 5 ? this._player.schemes[2]['level'] : 0;
    };
    //04: Hired Help
    NumbersService.prototype.hiredHelpCapacity = function () {
        var space = 0;
        for (var _i = 0; _i < this._player.schemes[3]['level']; _i++) {
            if (_i == 1) {
                space += 4;
            }
            if (_i == 3) {
                space += 5;
            }
        }
        return space;
    };
    NumbersService.prototype.hiredHelpUnlocked = function (id) {
        if (id == 0) {
            return this._player.schemes[3]['level'] > 0;
        }
        else if (id == 1) {
            return this._player.schemes[3]['level'] >= 4;
        }
        else {
            return false;
        }
    };
    NumbersService.prototype.hiredHelpRecruitRate = function () {
        var reduce = 0;
        for (var _i = 0; _i < this._player.schemes[3]['level']; _i++) {
            if (_i == 2) {
                reduce += 150;
            }
        }
        return reduce;
    };
    //05: Lodging
    NumbersService.prototype.lodgingNumbers = function () {
        var increase = 0;
        for (var i = 0; i < this._player.schemes[5]['level']; i++) {
            if (i < 2) {
                increase += 5;
            }
            else if (i > 1 && i < 4) {
                increase += 10;
            }
            else if (i == 4) {
                increase += 20;
            }
            else if (i == 5) {
                increase += 50;
            }
        }
        return increase;
    };
    //06: Heists
    NumbersService.prototype.heistUnlocked = function (id) {
        if (id == 0)
            return this._player.schemes[6]['level'] > 0;
    };
    NumbersService.prototype.heistRarityChancesArray = function () {
        if (this._player.schemes[6]['level'] == 0) {
            return [.5, .7, .85, .95, 1];
        }
        else if (this._player.schemes[6]['level'] >= 1 && this._player.schemes[6]['level'] <= 2) {
            return [.46, .67, .83, .94, 1];
        }
        else if (this._player.schemes[6]['level'] >= 3 && this._player.schemes[6]['level'] <= 5) {
            return [.42, .64, .81, .93, 1];
        }
    };
    NumbersService.prototype.heistRechargeRate = function () {
        var reduce = 0;
        for (var _i = 0; _i < this._player.schemes[6]['level']; _i++) {
            if (_i == 2) {
                reduce += 180;
            }
            if (_i == 4) {
                reduce += 180;
            }
        }
        return reduce;
    };
    return NumbersService;
}());
NumbersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], NumbersService);

var _a;
//# sourceMappingURL=numbers.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/inventory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_numbers_service__ = __webpack_require__("../../../../../src/app/services/core/numbers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryService = (function () {
    function InventoryService(_player, _numbers) {
        this._player = _player;
        this._numbers = _numbers;
    }
    Object.defineProperty(InventoryService.prototype, "guardCapacity", {
        //While the player service holds the current inventory variables, this service busies
        //itself with deriving capacity and other derived inventory values.
        get: function () {
            return 10; //No modifiers yet.
        },
        enumerable: true,
        configurable: true
    });
    InventoryService.prototype.isHenchmenUpgradeFullById = function (id) {
        if (id == 0) {
            return this.isGuardCapacityFull;
        }
    };
    Object.defineProperty(InventoryService.prototype, "isGuardCapacityFull", {
        get: function () {
            return this._player.currentGuards == this.guardCapacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryService.prototype, "henchmenCapacity", {
        get: function () {
            var capacity = 10;
            capacity += this._numbers.lodgingNumbers();
            return capacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryService.prototype, "isHenchmenCapacityFull", {
        get: function () {
            return this._player.currentHenchmen == this.henchmenCapacity;
        },
        enumerable: true,
        configurable: true
    });
    return InventoryService;
}());
InventoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_numbers_service__["a" /* NumbersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_numbers_service__["a" /* NumbersService */]) === "function" && _b || Object])
], InventoryService);

var _a, _b;
//# sourceMappingURL=inventory.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/operating.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_numbers_service__ = __webpack_require__("../../../../../src/app/services/core/numbers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperatingService = (function () {
    function OperatingService(_player, _numbers) {
        this._player = _player;
        this._numbers = _numbers;
        this.showPreview = false;
    }
    OperatingService.prototype.areAnyUnlocked = function () {
        //Currently checks for heists or campaign operations.
        return this._player.schemes[6]['level'] > 0 || this._player.schemes[7]['level'] > 0;
    };
    OperatingService.prototype.areRoutineOpsUnlocked = function () {
        //Currently only accounts for Heists.
        return this._player.schemes[6]['level'] > 0;
    };
    OperatingService.prototype.areCampaignOpsUnlocked = function () {
        //Currently only accounts for the 1st one.
        return this._player.schemes[7]['level'] > 0;
    };
    OperatingService.prototype.areAscensionOpsUnlocked = function () {
        return false;
    };
    OperatingService.prototype.getRoutineOperationCountdownById = function (id) {
        if (id == 0) {
            var rate = 1800;
            rate -= this._numbers.heistRechargeRate();
            return rate;
        }
    };
    OperatingService.prototype.isUnlockedById = function (id) {
        if (id >= 0 && id <= 4)
            return this._numbers.heistUnlocked(id);
    };
    OperatingService.prototype.getFaColorById = function (id) {
        if (this._player.operating[id]['available']) {
            var rarity = this._player.operating[id]['rarity'];
            return this.getFaColorByRarity(rarity);
        }
        else {
            return 'white';
        }
    };
    OperatingService.prototype.getFaColorByRarity = function (rarity) {
        if (rarity == 0) {
            return 'black';
        }
        if (rarity == 1) {
            return 'blue';
        }
        if (rarity == 2) {
            return 'green';
        }
        if (rarity == 3) {
            return 'purple';
        }
        if (rarity == 4) {
            return 'orange';
        }
    };
    OperatingService.prototype.operationPreview = function (id) {
        console.log("called");
        console.log(this._player.operating);
        if (this._player.operating[id]['available']) {
            console.log("Pass");
            this.previewOperation = this._player.operating[id];
            this.showPreview = true;
        }
        //this.previewSchemeLevel = this.getSchemeCurrentLevel(id) + 1;
    };
    OperatingService.prototype.getHeistHenchmenCost = function (rarity) {
        var multiplier;
        if (rarity == 0) {
            multiplier = 5;
        }
        if (rarity == 1) {
            multiplier = 10;
        }
        if (rarity == 2) {
            multiplier = 20;
        }
        if (rarity == 3) {
            multiplier = 50;
        }
        if (rarity == 4) {
            multiplier = 100;
        }
        return Math.ceil(Math.random() * multiplier);
    };
    OperatingService.prototype.getHeistCashOutput = function (rarity, henchmen) {
        var multiplier;
        if (rarity == 0) {
            multiplier = 1;
        }
        if (rarity == 1) {
            multiplier = 1.2;
        }
        if (rarity == 2) {
            multiplier = 1.5;
        }
        if (rarity == 3) {
            multiplier = 1.7;
        }
        if (rarity == 4) {
            multiplier = 2;
        }
        return Math.floor(henchmen * multiplier);
    };
    OperatingService.prototype.getHeistSuccessRate = function (rarity) {
        var rate;
        if (rarity == 0) {
            rate = .9;
        }
        if (rarity == 1) {
            rate = .8;
        }
        if (rarity == 2) {
            rate = .7;
        }
        if (rarity == 3) {
            rate = .6;
        }
        if (rarity == 4) {
            rate = .5;
        }
        return rate;
    };
    OperatingService.prototype.getHeistRiskRate = function (rarity) {
        var rate;
        if (rarity == 0) {
            rate = .15;
        }
        if (rarity == 1) {
            rate = .2;
        }
        if (rarity == 2) {
            rate = .25;
        }
        if (rarity == 3) {
            rate = .3;
        }
        if (rarity == 4) {
            rate = .35;
        }
        var multiplier = 1;
        for (var i = 0; i < this._player.schemes[8]['level']; i++) {
            multiplier -= .05;
        }
        return rate * multiplier;
    };
    OperatingService.prototype.previewOperationRiskDisplay = function () {
        return Math.floor(this.previewOperation['risk'] * 10000) / 100;
    };
    OperatingService.prototype.getHeistNotoriety = function (rarity) {
        return Math.floor((rarity * .1) * 100) / 100;
    };
    OperatingService.prototype.tickById = function (id) {
        if (this.isUnlockedById(id)) {
            //If lock and countdown are both 0, the operation slot has been unlocked since the last tick.
            if (this._player.operating[id]['lock'] == 0 && this._player.operating[id]['countdown'] == 0) {
                this.operationSpawn(id);
                console.log("Tier: " + this._player.operating[id]['rarity'] + ", Henchmen: " + this._player.operating[id]['henchmen']);
                console.log("Cash Output: " + this.getHeistCashOutput(this._player.operating[id]['rarity'], this._player.operating[id]['henchmen']));
            }
            //If the operation is available, recheck certain values that may have changed:
            if (this._player.operating[id]['available']) {
                this._player.operating[id]['risk'] = this.getHeistRiskRate(this._player.operating[id]['rarity']);
            }
        }
    };
    Object.defineProperty(OperatingService.prototype, "heistCountdown", {
        get: function () {
            //Default is 3 minutes
            return 1800;
        },
        enumerable: true,
        configurable: true
    });
    OperatingService.prototype.operationSpawn = function (id) {
        if (id >= 0 && id <= 4) {
            var rarity = this.rollHeistRarity();
            var henchmen = this.getHeistHenchmenCost(rarity);
            this._player.operating[id]['rarity'] = rarity;
            this._player.operating[id]['henchmen'] = henchmen;
            this._player.operating[id]['reward'] = this.getHeistCashOutput(rarity, henchmen);
            this._player.operating[id]['success'] = this.getHeistSuccessRate(rarity);
            this._player.operating[id]['risk'] = this.getHeistRiskRate(rarity);
            this._player.operating[id]['notoriety'] = this.getHeistNotoriety(rarity);
            this._player.operating[id]['available'] = true;
            //Reset the countdown in case it was 0.
            this._player.operating[id]['lock'] = this.heistCountdown;
        }
    };
    Object.defineProperty(OperatingService.prototype, "heistRarityChances", {
        get: function () {
            var chances = [.5, .7, .85, .95, 1];
            return chances;
        },
        enumerable: true,
        configurable: true
    });
    //Heists specifically
    OperatingService.prototype.rollHeistRarity = function () {
        var roll = Math.random();
        var heistRarityChances = this._numbers.heistRarityChancesArray();
        if (roll <= this.heistRarityChances[0]) {
            return 0;
        }
        if (roll >= this.heistRarityChances[0] && roll <= this.heistRarityChances[1]) {
            return 1;
        }
        if (roll >= this.heistRarityChances[1] && roll <= this.heistRarityChances[2]) {
            return 2;
        }
        if (roll >= this.heistRarityChances[2] && roll <= this.heistRarityChances[3]) {
            return 3;
        }
        if (roll >= this.heistRarityChances[3] && roll <= this.heistRarityChances[4]) {
            return 4;
        }
    };
    return OperatingService;
}());
OperatingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_numbers_service__["a" /* NumbersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_numbers_service__["a" /* NumbersService */]) === "function" && _b || Object])
], OperatingService);

var _a, _b;
//# sourceMappingURL=operating.service.js.map

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
        //Everything in this service is saved. All game details can be derived from this service.
        //Not yet implemented, but used for scheme prereqs
        this.lairLevel = 0;
        //Primary scheme object. Stores level and accumulated exp toward next level by scheme ref.
        this.schemes = [
            { level: 0, exp: 0 },
            { level: 0, exp: 0 },
            { level: 0, exp: 0 },
            { level: 0, exp: 0 },
            { level: 0, exp: 0 },
            { level: 0, exp: 0 },
            { level: 1, exp: 0 },
            { level: 0, exp: 0 },
            { level: 1, exp: 0 } //8 Communications, not coded.
        ];
        this.currentScheme = {};
        //Henchmen
        this.currentHenchmen = 0;
        this.recruiting = [
            { currentStore: 0, capacity: 0, countdown: 0, lock: 0 },
            { currentStore: 0, capacity: 0, countdown: 0, lock: 0 } //Help Wanted 2
        ];
        //Improved Henchmen
        this.currentGuards = 0;
        this.training = [
            { currentStore: 0, capacity: 0, queued: 0, countdown: 0, lock: 0 } //Guards
        ];
        //Operations
        this.operating = [
            { rarity: -1, henchmen: -1, available: false, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0 },
            { rarity: -1, henchmen: -1, available: false, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0 },
            { rarity: -1, henchmen: -1, available: false, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0 },
            { rarity: -1, henchmen: -1, available: false, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0 },
            { rarity: -1, henchmen: -1, available: false, reward: -1, success: -1, risk: -1, notoriety: -1, countdown: 0, lock: 0 } //Heists 5
        ];
    }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recruiting_service__ = __webpack_require__("../../../../../src/app/services/recruiting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_service__ = __webpack_require__("../../../../../src/app/services/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operating_service__ = __webpack_require__("../../../../../src/app/services/operating.service.ts");
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
    function PrimaryLoopService(_player, _operating, _scheming, _recruiting, _training) {
        this._player = _player;
        this._operating = _operating;
        this._scheming = _scheming;
        this._recruiting = _recruiting;
        this._training = _training;
        //Flow logic is 1. Scheme 2. Recruit
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
        for (var i = 0; i < this._player.recruiting.length; i++) {
            if (this._recruiting.isRecruitingById(i)) {
                this._recruiting.tickById(i);
            }
        }
        for (var i = 0; i < this._player.training.length; i++) {
            if (this._training.isTrainingById(i)) {
                this._training.tickById(i);
            }
        }
        for (var i = 0; i < this._player.operating.length; i++) {
            if (this._operating.isUnlockedById(i)) {
                this._operating.tickById(i);
            }
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__operating_service__["a" /* OperatingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__operating_service__["a" /* OperatingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__scheming_service__["a" /* SchemingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__scheming_service__["a" /* SchemingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__recruiting_service__["a" /* RecruitingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__recruiting_service__["a" /* RecruitingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__training_service__["a" /* TrainingService */]) === "function" && _e || Object])
], PrimaryLoopService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=primary-loop.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/recruiting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruitingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_numbers_service__ = __webpack_require__("../../../../../src/app/services/core/numbers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecruitingService = (function () {
    function RecruitingService(_player, _numbers, _inventory) {
        this._player = _player;
        this._numbers = _numbers;
        this._inventory = _inventory;
        this.collecting = false;
    }
    RecruitingService.prototype.getCapacityById = function (id) {
        if (id == 0 || id == 1) {
            var capacity = 1;
            capacity += this._numbers.hiredHelpCapacity();
            return capacity;
        }
    };
    RecruitingService.prototype.getPercentageById = function (id) {
        if (this.isRecruitingById(id)) {
            return 100 * (1 - (this._player.recruiting[id]['countdown'] / this._player.recruiting[id]['lock']));
        }
        else {
            return 100;
        }
    };
    RecruitingService.prototype.getRecruitmentNameById = function (id) {
        if (id == 0) {
            return "Sign Stapled to a Post";
        }
        if (id == 1) {
            return "Newspaper Ad";
        }
    };
    RecruitingService.prototype.getFaById = function (id) {
        if (id == 0) {
            return "fa-user";
        }
        if (id == 1) {
            return "fa-user";
        }
    };
    RecruitingService.prototype.isUnlockedById = function (id) {
        if (id == 0 || id == 1) {
            return this._numbers.hiredHelpUnlocked(id);
        }
    };
    RecruitingService.prototype.areAnyUnlocked = function () {
        for (var _i = 0; _i < this._player.recruiting.length; _i++) {
            if (this.isUnlockedById(_i)) {
                return true;
            }
        }
        return false;
    };
    RecruitingService.prototype.isFullById = function (id) {
        return this._player.recruiting[id]['currentStore'] == this.getCapacityById(id);
    };
    RecruitingService.prototype.collectById = function (id) {
        if (this._player.recruiting[id]['currentStore'] > 0) {
            if (!this.collecting) {
                this.collecting = true;
                var collectMarker = this._player.recruiting[id]['currentStore'];
                for (var _i = 0; _i < collectMarker; _i++) {
                    if (this._player.currentHenchmen < this._inventory.henchmenCapacity) {
                        this._player.currentHenchmen++;
                        this._player.recruiting[id]['currentStore']--;
                    }
                }
                if (this._player.recruiting[id]['countdown'] == 0) {
                    this.resetCountdownById(id);
                }
                this.collecting = false;
            }
        }
    };
    RecruitingService.prototype.getRecruitingCountdownById = function (id) {
        if (id == 0 || id == 1) {
            var rate = 600;
            rate -= this._numbers.hiredHelpRecruitRate();
            return rate;
        }
    };
    RecruitingService.prototype.isRecruitingById = function (id) {
        if (this.isUnlockedById(id)) {
            if (!this.isFullById(id)) {
                return true;
            }
        }
        return false;
    };
    RecruitingService.prototype.resetCountdownById = function (id) {
        this._player.recruiting[id]['countdown'] = this.getRecruitingCountdownById(id);
        this._player.recruiting[id]['lock'] = this.getRecruitingCountdownById(id);
    };
    RecruitingService.prototype.tickById = function (id) {
        if (this._player.recruiting[id]['countdown'] == 0) {
            this.resetCountdownById(id);
        }
        this._player.recruiting[id]['countdown']--;
        if (this._player.recruiting[id]['countdown'] == 0) {
            this._player.recruiting[id]['currentStore']++;
            if (!this.isFullById(id)) {
                this.resetCountdownById(id);
            }
        }
    };
    return RecruitingService;
}());
RecruitingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_numbers_service__["a" /* NumbersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_numbers_service__["a" /* NumbersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__inventory_service__["a" /* InventoryService */]) === "function" && _c || Object])
], RecruitingService);

var _a, _b, _c;
//# sourceMappingURL=recruiting.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/scheming.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_numbers_service__ = __webpack_require__("../../../../../src/app/services/core/numbers.service.ts");
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
    function SchemingService(_player, _numbers) {
        this._player = _player;
        this._numbers = _numbers;
        //Which scheme tree is selected by the scheme-panel
        this.selected = 'scheming';
        //Handling the preview scheme being displayed in the header
        this.previewScheme = {};
        //Controls the appearance of the scheme-panel flyout
        this.showPreview = false;
        //Belongs in player service.
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
    //By ID Functions
    SchemingService.prototype.canSchemeBeLearned = function (id) {
        return this.schemes[id]['lair_req'][this.getSchemeCurrentLevel(id) + 1] <= this._player.lairLevel;
    };
    SchemingService.prototype.getSchemeCurrentLevel = function (id) {
        return this._player.schemes[id]['level'];
    };
    SchemingService.prototype.getTreeById = function (id) {
        if (id >= 0 && id <= 2) {
            return 'scheming';
        }
        if (id >= 3 && id <= 5) {
            return 'henchmen';
        }
        if (id >= 6 && id <= 8) {
            return 'operations';
        }
        if (id == 9) {
            return 'lairs';
        }
    };
    SchemingService.prototype.schemeLearnable = function (scheme) {
        return this._player.lairLevel >= scheme['lair_req'][this._player.schemes[scheme['ref']]['level']];
    };
    SchemingService.prototype.schemePreview = function (id) {
        this.previewScheme = this.schemes[id];
        this.previewSchemeLevel = this.getSchemeCurrentLevel(id) + 1;
        this.showPreview = true;
    };
    //A couple of scheme preview functions
    SchemingService.prototype.startSchemingPreview = function () {
        if (this.schemeLearnable(this.previewScheme)) {
            this._player.currentScheme = this.previewScheme;
            this.earningSchemePoints = true;
        }
    };
    SchemingService.prototype.switchToCurrentSchemePreview = function () {
        if (this.earningSchemePoints) {
            //Garbage. Needs to be actually coded.
            this.selected = this.getTreeById(this._player.currentScheme['ref']);
            this.previewScheme = this._player.currentScheme;
            this.showPreview = true;
        }
    };
    Object.defineProperty(SchemingService.prototype, "schemePointsHatchedThisTick", {
        //Scheming during the loop calculation getters
        get: function () {
            var hatched = 0;
            hatched += this._numbers.quickThinkingNumbers();
            return hatched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "schemePointsHatchedThisSecond", {
        get: function () {
            var hatched = 1;
            hatched += this._numbers.mastermindNumbers();
            return hatched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "schemePointsHatchedThisMinute", {
        get: function () {
            var hatched = 0;
            hatched += this._numbers.coldLogicNumbers();
            return hatched;
        },
        enumerable: true,
        configurable: true
    });
    //Scheme Calculation Loop Setter
    SchemingService.prototype.earnSchemePoints = function (num) {
        this._player.schemes[this._player.currentScheme['ref']]['exp'] += num;
        if (this._player.schemes[this._player.currentScheme['ref']]['exp'] >= this._player.currentScheme['exp'][this._player.schemes[this._player.currentScheme['ref']]['level']]) {
            this._player.schemes[this._player.currentScheme['ref']]['level']++;
            this._player.schemes[this._player.currentScheme['ref']]['exp'] = 0;
            if (this.previewScheme == this._player.currentScheme) {
                this.previewSchemeLevel++;
            }
            this._player.currentScheme = {};
            this.earningSchemePoints = false;
        }
    };
    Object.defineProperty(SchemingService.prototype, "currentSchemeEXP", {
        //Vanilla Getters
        get: function () {
            return this._player.schemes[this._player.currentScheme['ref']]['exp'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "currentSchemeEXPTarget", {
        get: function () {
            return this._player.currentScheme['exp'][this._player.schemes[this._player.currentScheme['ref']]['level'] * 1];
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
    Object.defineProperty(SchemingService.prototype, "previewSchemeDescription", {
        get: function () {
            return this.previewScheme['description'][this.previewSchemeLevel - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "previewSchemeFlavor", {
        get: function () {
            return this.previewScheme['flavor'][this.previewSchemeLevel - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "previewSchemeExp", {
        get: function () {
            return this._player.schemes[this.previewScheme['ref']]['exp'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "previewSchemeExpTarget", {
        get: function () {
            return this.previewScheme['exp'][this.previewSchemeLevel - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemingService.prototype, "currentSchemeLevel", {
        get: function () {
            return (this._player.schemes[this._player.currentScheme['ref']]['level'] * 1) + 1;
        },
        enumerable: true,
        configurable: true
    });
    return SchemingService;
}());
SchemingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_numbers_service__["a" /* NumbersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_numbers_service__["a" /* NumbersService */]) === "function" && _b || Object])
], SchemingService);

var _a, _b;
//# sourceMappingURL=scheming.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/training.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/services/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventory_service__ = __webpack_require__("../../../../../src/app/services/inventory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainingService = (function () {
    function TrainingService(_player, _inventory) {
        this._player = _player;
        this._inventory = _inventory;
        this.training = false;
        this.collecting = false;
    }
    TrainingService.prototype.getCapacityById = function (id) {
        if (id == 0) {
            //Starting capacity is 1
            var capacity = 1;
            //Guard Duty increases capacity by static amounts.
            for (var _i = 0; _i < this._player.schemes[4]['level']; _i++) {
                if (_i == 2) {
                    capacity += 9;
                }
            }
            return capacity;
        }
    };
    TrainingService.prototype.isUnlockedById = function (id) {
        if (id == 0) {
            return this._player.schemes[4]['level'] > 0;
        }
    };
    TrainingService.prototype.areAnyUnlocked = function () {
        for (var _i = 0; _i < this._player.training.length; _i++) {
            if (this.isUnlockedById(_i)) {
                return true;
            }
        }
        return false;
    };
    TrainingService.prototype.getUpgradeNameById = function (id) {
        if (id == 0) {
            return "Guard";
        }
    };
    TrainingService.prototype.getFaById = function (id) {
        if (id == 0) {
            return "fa-shield";
        }
    };
    TrainingService.prototype.isFullById = function (id) {
        return this._player.training[id]['currentStore'] == this.getCapacityById(id);
    };
    TrainingService.prototype.isTrainingById = function (id) {
        if (this.isUnlockedById(id)) {
            if (!this.isFullById(id)) {
                if (this._player.training[id]['queued'] > 0) {
                    return true;
                }
            }
        }
        return false;
    };
    Object.defineProperty(TrainingService.prototype, "guardTrainingUnlocked", {
        get: function () {
            return this._player.schemes[4]['level'] >= 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrainingService.prototype, "guardCapacity", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrainingService.prototype, "guardTrainingRate", {
        get: function () {
            return 500;
        },
        enumerable: true,
        configurable: true
    });
    TrainingService.prototype.canTrainById = function (id) {
        if (this._player.currentHenchmen > 0) {
            if (this._player.training[id]['queued'] + this._player.training[id]['currentStore'] < this.getCapacityById(id)) {
                return true;
            }
        }
        return false;
    };
    TrainingService.prototype.trainById = function (id) {
        if (id == 0) {
            if (this._player.currentHenchmen > 0) {
                if (!this.training) {
                    if (this._player.training[id]['queued'] + this._player.training[id]['currentStore'] < this.getCapacityById(id)) {
                        this.training = true;
                        this._player.currentHenchmen--;
                        this._player.training[id]['queued']++;
                        this.training = false;
                    }
                }
            }
        }
    };
    TrainingService.prototype.collectById = function (id) {
        if (this._player.training[id]['currentStore'] > 0) {
            if (!this.collecting == true) {
                for (var _i = 0; _i < this._player.training[id]['currentStore']; _i++) {
                    if (this._player.currentGuards < this._inventory.guardCapacity) {
                        this._player.currentGuards++;
                        this._player.training[id]['currentStore']--;
                    }
                }
                if (!this.isTrainingById(id)) {
                    this.resetCountdownById(id);
                }
                this.collecting = false;
            }
        }
    };
    TrainingService.prototype.getPercentageById = function (id) {
        if (this.isTrainingById(id)) {
            return 100 * (1 - (this._player.training[0]['countdown'] / this._player.training[0]['lock']));
        }
        else {
            if (this.canTrainById(id)) {
                return 0;
            }
            else {
                if (this._player.training[0]['currentStore'] > 0) {
                    return 100;
                }
            }
        }
        return 0;
    };
    TrainingService.prototype.getTrainingCountdownById = function (id) {
        if (id == 0) {
            //Starting training rate is 10 minutes.
            var rate = 6000;
            //Guard duty reduces this amount by static time.
            for (var _i = 0; _i < this._player.schemes[4]['level']; _i++) {
                if (_i == 1) {
                    rate -= 600;
                }
                if (_i == 3) {
                    rate -= 600;
                }
            }
            return rate;
        }
    };
    TrainingService.prototype.resetCountdownById = function (id) {
        this._player.training[id]['countdown'] = this.getTrainingCountdownById(id);
        this._player.training[id]['lock'] = this.getTrainingCountdownById(id);
    };
    TrainingService.prototype.tickById = function (id) {
        if (this._player.training[0]['countdown'] == 0 && this._player.training[0]['lock'] == 0) {
            this.resetCountdownById(id);
        }
        this._player.training[id]['countdown']--;
        if (this._player.training[id]['countdown'] == 0) {
            this._player.training[id]['currentStore']++;
            this._player.training[id]['queued']--;
            if (!this.isFullById(id) && this._player.training[id]['queued'] > 0) {
                this.resetCountdownById(id);
            }
        }
    };
    return TrainingService;
}());
TrainingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__inventory_service__["a" /* InventoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__inventory_service__["a" /* InventoryService */]) === "function" && _b || Object])
], TrainingService);

var _a, _b;
//# sourceMappingURL=training.service.js.map

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