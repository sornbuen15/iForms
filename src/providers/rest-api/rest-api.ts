import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {
  // private apiUrl1 = 'https://restcountries.eu/rest/v2/all';
  private apiUrl = 'http://pongpara.iform.online/backend/apis';
  //private apiUrl = 'http://192.168.1.102/backend/apis';
  constructor(public http: HttpClient) {
    // console.log('Hello RestApiProvider Provider');
  }

  public authenticate(formData): Observable<string[]> {
    var api = this.apiUrl + "/authenticate.json";
    return this.http.post(api, formData ).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  }

  public getGuestlist(): Observable<string[]> {
    var api = this.apiUrl + "/getGuestList.json";
    return this.http.post(api, null).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public registerByCheckin(data): Observable<string[]> {
    var api = this.apiUrl + "/registerByCheckin.json";
    console.log(api);
    return this.http.post(api, data).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  }

  public registerBySignature(data): Observable<string[]> {
    var api = this.apiUrl + "/registerBySignature.json";
    return this.http.post(api, data).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  }

  public editRegister(data): Observable<string[]> {
    var api = this.apiUrl + "/editregister.json";
    return this.http.post(api, data).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  }

  public alreadyRegisterList(): Observable<string[]> {
    var api = this.apiUrl + "/alreadyRegisterList.json";
    return this.http.post(api, null).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  }

  private extractData(res: Response) {
    let result = res['result']['success'];
    let message = res['result']['message'];
    let data = res['result']['data'];
    console.log('response:' + JSON.stringify(res));
    if (result) {
      if (!isEmpty(data)) {
        return data;
      } else {
        return {};
      }
    } else {
      throw message;
    }

    function isEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
          return false;
      }
      return true;
    }
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
