import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
//import * as CryptoJS from 'crypto-js'; // 
import { JwtTokenService } from './jwt-token.service'; // 不要與儲存媒體耦合?

//const ENCYPT_KEY = '123';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  // 參考: https://www.bezkoder.com/angular-12-jwt-auth/

  private tokenSource$ = new BehaviorSubject<string>('');      // 透過 jwt 取得, 只有異動才會觸發
  private accountSource$ = new BehaviorSubject<string>('');    // 透過 jwt 取得
  private expirySource$ = new BehaviorSubject<boolean>(false); // 透過 jwt 取得
  private userSource$ = new BehaviorSubject<any>(null);        // 透過進一步查詢取得
  //public userData = this.userSource$.asObservable();

  constructor(private jwtService: JwtTokenService) {  
    // 將 jwt 跟訂閱棒定
    this.tokenSource$.subscribe(this.jwtService.tokenNotify);
    // 預設從 localStorage 抓取
    this.tokenSource$.next(this.getToken()!);
    this.userSource$.next(this.getUser());
    //
    interval(60000)
     .subscribe(() => {
       this.expirySource$.next(this.jwtService.isTokenExpired());
     });
  }

  /*************************************************
   * 訂閱區
   ************************************************/

  public getTokenNotify() : Observable<string> {
    // 只有登入/更新才需要觸發
    return this.tokenSource$.asObservable();
  }

  public getUserNotify() : Observable<string> {
    // 設置 timer 隨時觸發更新
    return this.userSource$.asObservable();
  }

  public getAccountNotify() : Observable<string> {
    // 只有登入才需要觸發
    return this.accountSource$.asObservable();
  }

  public getExpiryNotify() : Observable<boolean> {
    // 設置 timer 隨時觸發更新
    return this.expirySource$.asObservable();
  }

  /********************************************
   * 特殊物件 token/user (只會存這兩種)
   ********************************************/

  public saveToken(token: string): void {
    if (typeof token !== 'string') return;
    // 儲存 token
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem("recTime", new Date(Date.now()).toLocaleString('zh-TW'));
    // token 更新同時推播通知三個物件 
    this.tokenSource$.next(token);
    this.accountSource$.next(this.getAccount()!);
    this.expirySource$.next(this.isExpired());  // 可以改用 timer?
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    //localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user)); // 儲存物件先轉過
    this.tokenSource$.next(user);
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user); // 儲存物件先轉過
    }
    return {};
  }

  public getAccount(): string | null {
    return this.jwtService.getAccount();
  }

  public isExpired(): boolean {
    return this.jwtService.isTokenExpired();
  }

  /********************************************
   *  一般 key/val (session Storage)
   ********************************************/

  public saveSession(key: string, value: string) {
    sessionStorage.setItem(key, value); // this.encrypt(value));
  }

  /********************************************
   *  一般 key/val (local Storage)
   ********************************************/

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value); // this.encrypt(value));
  }

  public getData(key: string) {
    let data = localStorage.getItem(key)|| "";
    return data; //this.decrypt(data);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
    sessionStorage.clear();
  }

   /********************************************
   * 加/解密 (bootstrap 5x? 有衝突,暫時不裝) 
   ********************************************
    
  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, ENCYPT_KEY).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, ENCYPT_KEY).toString(CryptoJS.enc.Utf8);
  }
  *******************************************/


}
