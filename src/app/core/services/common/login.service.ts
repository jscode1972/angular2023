import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { LocalStorageService, JwtTokenService, AuthService } from '.';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // 參見: https://ithelp.ithome.com.tw/articles/10195766 userSvc token (ok)
  private login! : boolean;
  private user : any;
  private loginStatus$ = new BehaviorSubject<boolean>(false);
  private currentUser$ = new BehaviorSubject<string>('');    // 透過 jwt 取得
  
  /*************************************************
   * 訂閱監聽區 
   ************************************************/

  accountNotify = {
    // 當登入確定需抓個人資料
    next: (account : string) => {
      // 查詢 user 資料
      /*if (account !== "") {
        // 此處要進行 query
        this.userService.getUser()
          .subscribe((user) => {
            this.setUser(user);
          });
      }*/
    },
    error: (err : any) => {},
    complete: ( ) => {},
  }

  expiryNotify = {
    // 當 token change 需檢查
    next: (expiry : boolean) => {
      console.log("loginService-expiryNotify", expiry);
      // 查詢 user 資料, 組裝之後送出通知
      this.loginStatus$.next(!expiry); 
    },
    error: (err : any) => {},
    complete: ( ) => {},
  }

  /*************************************************
   * 訂閱放送區 
   ************************************************/
 
  getLoginStatus(): Observable<boolean> {
    return this.loginStatus$;
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser$;
  }

  constructor(
    private localStorage: LocalStorageService,
    private jwtTokenService: JwtTokenService ) {
    // 預設先初始化 user
    this.setUser(this.localStorage.getUser()!);
    // 再來更新狀態
    this.jwtTokenService.getAccountNotify().subscribe(this.accountNotify);
    this.jwtTokenService.getExpiryNotify().subscribe(this.expiryNotify);
  }

  parseA4Key() : Observable<any> {
    // 案例: useHash
    // 抓不到  http://localhost:4200/#/?recallUrl=http&a4Key=123
    // 抓得到  http://localhost:4200/?recallUrl=http&a4Key=123
    let data;
    const params = new URLSearchParams(window.location.search);
    //console.log("window.location.search => ", window.location.search, params.has("recallUrl"), params.has("a4Key"), " => AppInit 階段抓不到" );
    if (params.has("recallUrl") && params.has("a4Key")) {
      data = {recallUrl: params.get('recallUrl'), 
              a4Key: params.get('a4Key') };
      return of(data);
    }
    //return throwError(() => new Error(`not found`));
    return of(data);
  }

  setUser(user : any) {
    //if (!!user.account) {
      // 儲存
      this.user = user;
      this.localStorage.saveUser(this.user);
      // 通知
      this.currentUser$.next(this.user);
    //}
  }

  gotoA4() {
    window.location.href = "https://www.google.com";
  }

  logout() {
    this.localStorage.clearData();  
    //this.gotoA4(); // 不一定要跳轉 A4
    this.loginStatus$.next(false);
    this.currentUser$.next(null!);
  }

  signinCallBack() {
    return new Promise<string>((resolve, reject) => {
      // 隨機取得 0 or 1
      const num = Math.random() > 0.5 ? 1 : 0;
  
      // 1 則執行 resolve，否則執行 reject
      if (num) { 
        resolve('成功');
      }
      reject('失敗');
    });
  }
  
  resetParams() {
    // 如果是 useHash, 
    // 當 AppComponent OnInit 之後
    // 系統接管就會看不到 recallUrl & a4Key, 不需要清除動作
    const params = new URLSearchParams(window.location.search);
    params.delete("recallUrl");
    params.delete("a4Key");
  }

  /*
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

  */

}
