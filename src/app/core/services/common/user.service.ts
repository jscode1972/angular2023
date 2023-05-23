import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models';
import { LocalStorageService, JwtTokenService } from '.';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // 參見: https://ithelp.ithome.com.tw/articles/10195766 userSvc token (ok)

  loginStatus$ = new BehaviorSubject<boolean>(false);
  currentUser$ = new BehaviorSubject<User>(null!);

  constructor( private http: HttpClient,
               private localStorage : LocalStorageService,
               private jwtService : JwtTokenService ) { 
  
    this.jwtService.getAccountNotify().subscribe(this.accountNotify);
    this.jwtService.getExpiryNotify().subscribe(this.expiryNotify);
    this.localStorage.getUserNotify().subscribe(this.userNotify);
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

  /*************************************************
   * 觀察區
   ************************************************/

  accountNotify = {
    // 當登入確定需抓個人資料
    next: (account : string) => {
      // 查詢 user 資料
      if (account !== "") {
        // 此處要進行 query
        this.localStorage.saveUser({username: account, name: "Ben"});
      }
    },
    error: (err : any) => {},
    complete: ( ) => {},
  }

  expiryNotify = {
    // 當 token change 需檢查
    next: (expiry : boolean) => {
      // 查詢 user 資料, 組裝之後送出通知
      this.loginStatus$.next( !expiry ); 
    },
    error: (err : any) => {},
    complete: ( ) => {},
  }

  userNotify = {
    // 當登入確定需抓個人資料
    next: (user : any) => {
      // 查詢 user 資料
      if (user) {
        this.currentUser$.next(user); 
      }
    },
    error: (err : any) => {},
    complete: ( ) => {},
  }

  /*************************************************
   * 訂閱區
   ************************************************/

  getLoginStatus(): Observable<boolean> {
    return this.loginStatus$;
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser$;
  }

  /*************************************************
   * 操作區
   ************************************************/  

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
    this.currentUser$.next( { pid: user, name: name } );  // 這裡要改為查詢
  }

  logout() {
    this.loginStatus$.next(false);
    this.currentUser$.next(null!);
  }

}
