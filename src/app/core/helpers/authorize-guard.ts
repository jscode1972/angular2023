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
    state: RouterStateSnapshot): Promise<any> | boolean {
      if (this.jwtService.getAccount()) {
          if (this.jwtService.isTokenExpired()) {
            // Should Redirect Sig-In Page
            
          } else {
            return true;
          }
      } else {
        return new Promise((resolve) => {
          this.loginService.signinCallBack()
          .then((e) => {
             resolve(true);
          }).catch((e : any) => {
            // Should Redirect Sign-In Page
          });
        });
      }
  }
}