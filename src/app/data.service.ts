import { Injectable } from '@angular/core';
import {isUndefined} from "util";
import {HttpClient} from '@angular/common/http';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  uri = "/api/schemes"

  public getSchemes() {
    console.log("I am being called");
    var options = {
      withCredentials: true,
      responseType: 'json' as 'json'
  };
    return this._http.get(this.uri);
}

public GET(uri, options?) {
  if (isUndefined(options)) {
      options = {
          withCredentials: true,
          responseType: 'json' as 'json'
      };
  }
  return this._http.get(
      uri,
      options
  );
}

  

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}