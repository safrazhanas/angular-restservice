import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { IDocument } from '../interfaces';


@Injectable()
export class DataService {

    private url : string = '';

    constructor(private _http : Http){}

    getDocuments() : Observable<IDocument[]> {
       return this._http.get(this.url, {headers : this.getHeaders()})
        .map((resp : Response) => resp.json())
        .catch(this.handleError)

    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

  private getHeaders(){

    let username : string = '';
    let password : string = '';

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    headers.append('Access-Control-Allow-Origin', '*');
    //headers.append("Authorization", "Basic " + (username + ":" + password));



    // headers.append('Username', 'c9796750-50f1-4634-b245-dbdb45cbfc5c-bluemix');
    // headers.append('Password', '43087548956f5a8808f315a090dcc9129e4db517678cee01f3f88257b664ed47');

    //headers.append('Access-Control-Allow-Origin', '*');
    //headers.append("Authorization", "Basic " + (username + ":" + password));

    return headers;
  }
}
