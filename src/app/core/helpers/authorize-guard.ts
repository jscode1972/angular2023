import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs'; 
import { LocalStorageService, JwtTokenService, LoginService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private loginService : LoginService,
              private localStorage: LocalStorageService,
              private jwtService: JwtTokenService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable | Promise<any> | boolean {
    state: RouterStateSnapshot): Promise<boolean> | boolean | void {
      if (this.jwtService.getAccount()) {
          if (this.jwtService.isTokenExpired()) {
            // Should Redirect Sig-In Page
          } else {
            return true;
          }
      } else {
        return new Promise<boolean>((resolve) => {
          this.loginService.signinCallBack() // 進行登入作業
          .then((e) => {
             resolve(true);
          }).catch((e : any) => {
            // Should Redirect Sign-In Page
          });
        });
      }
  }
}