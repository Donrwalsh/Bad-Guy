import { Injectable } from '@angular/core';
import { Scheme } from './models/scheme';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  schemeResult: Array<Scheme>;
  
  result:any;
  result2:any;

  constructor(private _http: Http) { }

  getSchemes() {
    return this._http.get("/api/schemes")
    .map(result => this.schemeResult = result.json().data);
  }

  getOperations() {
    return this._http.get("/api/operations")
    .map(result2 => this.result2 = result2.json().data);
  }

}