import { Injectable } from '@angular/core';
//import * as jwt_decode from 'jwt-decode';
import jwt_decode from 'jwt-decode';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  // 參考: https://www.syncfusion.com/blogs/post/best-practices-for-jwt-authentication-in-angular-apps.aspx

  jwtToken: string = '';
  decodedToken: { [key: string]: string }  = {};

  constructor(private localStorage : LocalStorageService) {  }

  /*setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }*/

  decodeToken() {
    this.jwtToken = this.localStorage.getToken() as string;
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodeToken() {
    this.decodeToken();
    return this.decodedToken; //jwt_decode(this.jwtToken);
  }

  getAccount() : any {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['Account'] : null;
  }

  getExpiryTime() : any {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}
