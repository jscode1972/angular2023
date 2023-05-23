import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { 

  }

  /*  https://angular.io/guide/http
  **********************************************************
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }**********************************************************/

  getUser() : Observable<User> {
    /*setTimeout(() => {
      let user = {pid: "123", name: "Ben" };
      return of(user);
    }, 2000);*/
    let user = {pid: "12kk3", name: "Ben" };
    return of(user);
  }
}
