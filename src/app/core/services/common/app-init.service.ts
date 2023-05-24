import { Injectable, APP_INITIALIZER } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap, tap, map, Observable } from 'rxjs';
import { LocalStorageService, JwtTokenService, LoginService, AuthService,  } from '.';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  private config: any;

  constructor(
        //private route: ActivatedRoute,
        //private router: Router,
        //private localStorageService: LocalStorageService,
        private jwtTokenService: JwtTokenService,
        private loginService : LoginService,
        private authService : AuthService) {
        
  }

  checkLogin(a4 : any) : Observable<boolean> {
    // !!a4?.recallUrl => 問號不能省
    if ((!!a4?.recallUrl) && (!!a4?.a4Key)) {
      // 透過 http 驗證新的 a4key, 否則抓本地 
      return this.authService.checkA4Token(a4.recallUrl, a4.a4Key)
        .pipe(
          tap((data) => {
            this.jwtTokenService.setToken(data.jwt);
            //this.localStorageService.saveUser(data.user); // loginService 負責呼叫
            this.loginService.setUser(data.user);
          }),
          map(() => this.jwtTokenService.isValid() ) 
        );
    }
    return of(this.jwtTokenService.isValid() );
  }
    

  initializeApp() : Promise<any> {
    return new Promise( (resolve, reject) => {
      this.loginService.parseA4Key()
      .pipe(       
        tap((x) => console.log("tap", x) ),
        switchMap( (a4) => this.checkLogin(a4) )
      )
      .subscribe((login) => {
        if (login) {
          resolve(''); // 事件已經執行完畢且成功操作，回傳 resolve 的結果 (名稱可以自定義)
        } else {
          this.loginService.gotoA4();
          //this.router.navigate(['/product'], { queryParams: { page: 10 } }); 
          //reject();  // 事件已經執行完畢但操作失敗，回傳 rejected 的結果 (名稱可以自定義)
        }
      });
    });
  }

  getConfig(): any {
    return this.config;
  }
}

export function initializeApp(appInitService: AppInitService) {
  return () => appInitService.initializeApp();
}

export const initializeAppProviders = [
  { 
    provide: APP_INITIALIZER,
    useFactory: initializeApp, /* useClass: AppInitService  */
    deps: [AppInitService],
    multi: true
  }
];
