import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
//import * as jwt_decode from 'jwt-decode';
import jwt_decode from 'jwt-decode';
import { LocalStorageService } from './local-storage.service'; // 不要與儲存媒體耦合?

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  // 參考: https://www.syncfusion.com/blogs/post/best-practices-for-jwt-authentication-in-angular-apps.aspx

  private jwtToken: string = '';
  private decodedToken: { [key: string]: string }  = {};
  //
  private tokenSource$ = new BehaviorSubject<string>('');      // jwt 直接取用, 其他透過訂閱 (像 auth intercepter)
  private accountSource$ = new BehaviorSubject<string>('');    // 透過 jwt 取得
  private expirySource$ = new BehaviorSubject<boolean>(false); // 透過 jwt 取得

  // 只能由 LocalStorageService 負責維護

  constructor(private localStorage: LocalStorageService) { 
    // 預設先初始化 token
    this.setToken(this.localStorage.getToken()!);
    // 定期檢查
    interval(60000)
      .subscribe(() => {
        this.expirySource$.next(this.isExpired());
      });
  }

  /*************************************************
   * 觀察區 (不需要訂閱觀察)
   ************************************************/

  /*************************************************
   * 訂閱區 (不需要提供訂閱)
   ************************************************/
 
  public getTokenNotify() : Observable<string> {
    // 只有登入才需要觸發
    return this.tokenSource$.asObservable();
  }

  public getAccountNotify() : Observable<string> {
    // 只有登入才需要觸發
    return this.accountSource$.asObservable();
  }

  public getExpiryNotify() : Observable<boolean> {
    // 設置 timer 隨時觸發更新
    return this.expirySource$.asObservable();
  }

  /*************************************************
   * 操作區
   ************************************************/

  public setToken(token: string) {
    if (typeof token !== 'string') return;
    //
    if (!!token) {
      this.jwtToken = token;
      this.decodedToken = jwt_decode(this.jwtToken);
      // 儲存
      this.localStorage.saveToken(this.jwtToken);
      // 通知
      this.tokenSource$.next(this.jwtToken);
      this.accountSource$.next(this.getAccount()!);
      this.expirySource$.next(this.isExpired());  // 可以改用 timer?
    }
  }

  public isExpired(): boolean {
    const expiryTime: number = this.getExpiryTime(); //單位:秒
    if (!!expiryTime) {
      // exp:     1696239022    (秒), 
      // getTime: 1684861944370 (毫秒)
      // 此處要考慮時區因素, 建議用 UTC time
      return ((expiryTime*1000) - (new Date()).getTime()) < 5000;  //單位:毫秒 
    } else {
      return true;
    }
  }

  public getToken() : string | null {
    return this.jwtToken;
  }

  public getAccount() : string | null {
    //this.decodeToken(); // 應該不需要
    return this.decodedToken ? this.decodedToken['account'] : null;
  }

  public getExpiryTime() : number {
    //this.decodeToken(); // 應該不需要
    return this.decodedToken ? parseInt(this.decodedToken['exp']) : 0;
  }   

  /******************************************** 
  private decodeToken() {
    // this.jwtToken = this.localStorage.getToken() as string; // 不要與儲存媒體耦合
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }
  getDecodeToken() {
    //this.decodeToken(); // 應該不需要
    return this.decodedToken; //jwt_decode(this.jwtToken);
  }***********************************************/
}
