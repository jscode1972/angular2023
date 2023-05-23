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
          resolve(true);
        } else {
          //reject();     // 空白畫面
          resolve(false); // 進入 Login 
          //window.location.href = "https://www.google.com";
        }
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
