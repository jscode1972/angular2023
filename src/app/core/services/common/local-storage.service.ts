import { Injectable } from '@angular/core';
//import * as CryptoJS from 'crypto-js'; // 

//const ENCYPT_KEY = '123';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  // 參考: https://www.bezkoder.com/angular-12-jwt-auth/

  constructor() { }
  
  /********************************************
   *  一般 key/val
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
  }

  /********************************************
   *  token
   ********************************************/

  public saveToken(token: string): void {
    //localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  /********************************************
   *  user
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
   * 加/解密 (有衝突,暫時不裝) 
   ********************************************
    
  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, ENCYPT_KEY).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, ENCYPT_KEY).toString(CryptoJS.enc.Utf8);
  }
  *******************************************/
}
