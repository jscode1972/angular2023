import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import * as jwt_decode from 'jwt-decode';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  // 參考: https://www.syncfusion.com/blogs/post/best-practices-for-jwt-authentication-in-angular-apps.aspx

  private jwtToken: string = '';
  private decodedToken: { [key: string]: string }  = {};

  // 只能由 LocalStorageService 負責維護

  constructor() {   }

  /*************************************************
   * 觀察區 (不需要訂閱觀察)
   ************************************************/

  tokenNotify = {
    // 當 token change 需檢查
    next: (token : any) => {
      this.setToken(token!);
    },
    error: (err : any) => {},
    complete: ( ) => {},
  }

  /*************************************************
   * 訂閱區 (不需要提供訂閱)
   ************************************************/
 
  // none

  /*************************************************
   * 操作區
   ************************************************/

  private setToken(token: string) {
    if (typeof token !== 'string') return;
    //
    if (token) {
      this.jwtToken = token;
      this.decodedToken = jwt_decode(this.jwtToken);
      //console.log("JwtTokenService", this.decodedToken);
    }
  }

  public isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime(); //單位:秒
    if (expiryTime) {
      // 此處要考慮時區因素, 建議用 UTC time
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;  //單位:毫秒
    } else {
      return true;
    }
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
