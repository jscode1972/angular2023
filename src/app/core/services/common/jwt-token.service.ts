import { Injectable } from '@angular/core';
//import * as jwt_decode from 'jwt-decode';
import jwt_decode from 'jwt-decode';
import { LocalStorageService } from './local-storage.service'; // 不要與儲存媒體耦合?

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  // 參考: https://www.syncfusion.com/blogs/post/best-practices-for-jwt-authentication-in-angular-apps.aspx

  jwtToken: string = '';
  decodedToken: { [key: string]: string }  = {};

  constructor(private localStorage : LocalStorageService) {  
    // 改用相依注入,確保先執行 localStorage
    var token = this.localStorage.getToken();
    this.setToken(token!);
  }

  private decodeToken() {
    // this.jwtToken = this.localStorage.getToken() as string; // 不要與儲存媒體耦合
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
    this.decodeToken();
  }

  getDecodeToken() {
    this.decodeToken();
    return this.decodedToken; //jwt_decode(this.jwtToken);
  }

  getAccount() : any {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['account'] : null;
  }

  getExpiryTime() : number {
    this.decodeToken();
    return this.decodedToken ? parseInt(this.decodedToken['exp']) : 0; // null;
  }  

  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    if (expiryTime) {
      // 此處要考慮時區因素, 建議用 UTC time
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}
