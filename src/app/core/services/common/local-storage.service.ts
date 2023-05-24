import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import * as CryptoJS from 'crypto-js'; // 

//const ENCYPT_KEY = '123';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  // 參考: https://www.bezkoder.com/angular-12-jwt-auth/

  // local storage 僅開放給 jwt-token & user
  //private userSource$ = new BehaviorSubject<any>(null);     

  constructor() { }

  /********************************************
   * 特殊物件 token
   ********************************************/

  public saveToken(token: string): void {
    if (typeof token !== 'string') return;
    // 儲存 token
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem("recTime", new Date(Date.now()).toLocaleString('zh-TW'));
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  /********************************************
   * 特殊物件 user 
   ********************************************/

  public saveUser(user: any): void {
    //localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user)); // 儲存物件先轉過
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user); // 儲存物件先轉過
    }
    return {};
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
