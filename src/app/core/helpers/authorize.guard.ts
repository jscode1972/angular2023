import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs'; 
import { LocalStorageService, JwtTokenService, LoginService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {

  constructor(private router: Router,
              private loginService : LoginService,
              //private localStorage: LocalStorageService,
              private jwtService: JwtTokenService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable | Promise<any> | boolean {
    state: RouterStateSnapshot) : Promise<boolean> | boolean  {
      let acc = this.jwtService.getAccount();
      if (this.jwtService.getAccount()) {
          if (this.jwtService.isExpired()) {
            // Should Redirect Sig-In Page
            // redirect to some view explaining what happened
            //window.location.href = 'https://a4a4a4a4.com';
            return this.router.navigateByUrl('todo');
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
            //window.location.href = 'https://a4a4a4a4.com';
          });
        });
      }
  }
}