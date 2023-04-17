import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/common/local-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  token !: string;

  constructor(private localStorage: LocalStorageService) { 
    this.localStorage.getTokenNotify()
      .subscribe(this.getTokenNotify);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    if (this.token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token) });
    }
    return next.handle(authReq);
  }

  getTokenNotify = {
    // 當 token change 發生
    next: (token : any) => {
      this.token = token;
    },
    error: (err : any) => {},
    complete: ( ) => {},
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];