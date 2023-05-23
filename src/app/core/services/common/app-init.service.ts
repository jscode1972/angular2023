import { APP_INITIALIZER } from '@angular/core';
import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  private config: any;

  constructor(private jwtTokenService: JwtTokenService) { }

  getConfig(): any {
    return this.config;
  }

  initializeApp() : Promise<any> {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        this.config = {
          apiUrl: 'https://api.example.com',
          token: this.jwtTokenService.getToken(),
          expiry: this.jwtTokenService.isExpired(),
          maxItems: 10
        };
        //
        if (!this.jwtTokenService.isExpired()) {
          resolve(''); // 事件已經執行完畢且成功操作，回傳 resolve 的結果 (名稱可以自定義)
        } 
        //reject();  // 事件已經執行完畢但操作失敗，回傳 rejected 的結果 (名稱可以自定義)
        //window.location.href = "https://www.google.com";
      }, 1000);
    });
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
