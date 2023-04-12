import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // 參見: https://ithelp.ithome.com.tw/articles/10195766 userSvc token (ok)

  loginStatus$ = new BehaviorSubject<boolean>(false);
  currentUser$ = new BehaviorSubject<User>(null!);

  constructor(  private http: HttpClient ) { }

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

  loginXX(user : string, pass : string) {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({ username: user, password: pass });
    this.http.post<Response>("url", body, {'headers': headers})
      .subscribe((o) => {
        this.loginStatus$.next(true);
        this.currentUser$.next( { pid :"xx", name:"xxx" });
      });
  }

  login(user : string, name : string) {
    this.loginStatus$.next(true);
    this.currentUser$.next( { pid: user, name: name } ); 
  }

  logout() {
    this.loginStatus$.next(false);
    this.currentUser$.next(null!);
  }

  getLoginStatus(): Observable<boolean> {
    return this.loginStatus$;
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser$;
  }
}
