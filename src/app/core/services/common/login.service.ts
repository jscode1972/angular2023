import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models';
import { LocalStorageService, JwtTokenService, UserService } from '.';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // 參見: https://ithelp.ithome.com.tw/articles/10195766 userSvc token (ok)

  private user!: User;
  loginStatus$ = new BehaviorSubject<boolean>(false);
  currentUser$ = new BehaviorSubject<User>(null!);

  /*************************************************
   * 觀察區
   ************************************************/

  accountNotify = {
    // 當登入確定需抓個人資料
    next: (account : string) => {
      // 查詢 user 資料
      if (account !== "") {
        // 此處要進行 query
        this.userService.getUser()
          .subscribe((user) => {
            this.user = user;
            this.localStorage.saveUser(this.user);
            this.currentUser$.next(this.user); 
          });
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

  /*************************************************
   * 訂閱區
   ************************************************/

  getLoginStatus(): Observable<boolean> {
    return this.loginStatus$;
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser$;
  }

  constructor( private localStorage : LocalStorageService,
               private jwtService : JwtTokenService,
               private userService : UserService ) { 

    // 預設先初始化 user
    this.setUser(this.localStorage.getUser()!);
    // 再來更新狀態
    this.jwtService.getAccountNotify().subscribe(this.accountNotify);
    this.jwtService.getExpiryNotify().subscribe(this.expiryNotify);
  }

  /*************************************************
   * 操作區
   ************************************************/  

  private setUser(user: User) {
    if (!!user) {
      // 儲存
      this.user = user;
      this.localStorage.saveUser(this.user);
      // 通知
      this.currentUser$.next(this.user);
    }
  }

  /*loginXX(user : string, pass : string) {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({ username: user, password: pass });
    this.http.post<Response>("url", body, {'headers': headers})
      .subscribe((o) => {
        this.loginStatus$.next(true);
        this.currentUser$.next( { pid :"xx", name:"xxx" });
      });
  }*/

  login(user : string, name : string) {
    this.loginStatus$.next(true);
    this.currentUser$.next( { pid: user, name: name } );  // 這裡要改為查詢
  }

  logout() {
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
}
