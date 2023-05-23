import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtTokenService } from '../services/common';

const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /*************************************************
   * 觀察區 (不需要訂閱觀察)
   ************************************************/

  token !: string;

  getTokenNotify = {
    // 當 token change 發生
    next: (token : any) => {
      this.token = token;
    },
    error: (err : any) => {},
    complete: ( ) => {},
  }

  constructor(private jwtToken: JwtTokenService) { 
    // 訂閱最新 token
    this.jwtToken.getTokenNotify().subscribe(this.getTokenNotify);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    if (this.token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { 
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true 
  }
];
