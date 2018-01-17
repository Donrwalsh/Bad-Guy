import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;
  result2:any;

  constructor(private _http: Http) { }

  getSchemes() {
    return this._http.get("/api/schemes")
    .map(result => this.result = result.json().data);
  }

  getOperations() {
    return this._http.get("/api/operations")
    .map(result2 => this.result2 = result2.json().data);
  }

}