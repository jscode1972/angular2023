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
    state: RouterStateSnapshot): Promise<boolean> | boolean {
      let acc = this.jwtService.getAccount();
      console.log("canActivate-in-acc", acc);
      if (this.jwtService.getAccount()) {
          console.log("canActivate-getAccount-in");
          if (this.jwtService.isTokenExpired()) {
            // Should Redirect Sig-In Page
            console.log('canActivate-isTokenExpired-1');
            return false;
          } else {
            console.log('canActivate-isTokenExpired-2');
            return true;
          }
      } else {
        console.log("canActivate-in-else");
        return new Promise<boolean>((resolve) => {
          this.loginService.signinCallBack() // 進行登入作業
          .then((e) => {
             resolve(true);
          }).catch((e : any) => {
            // Should Redirect Sign-In Page
            console.log('canActivate-Promise-catch');
          });
        });
      }
  }
}