import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const jwtJun = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYWNjb3VudCI6IkJlbiIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNjg2MjM5MDIyfQ.G6cgpG4ycraMsjz-GFMJwBTPBOIrX5mBtePZ4ZCdJHs";
const jwtApr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYWNjb3VudCI6IkJlbiIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNjgxMjM5MDIyfQ.b_NIg2vi6wHNEicL2K_r6JHGDe650gTwn1CQ0IZtu4c";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // 參考: https://www.bezkoder.com/angular-12-jwt-auth/

  constructor(private http: HttpClient) { }

  checkA4Token(recallUrl: string, a4Key: string) : Observable<any> {
    console.log("checkA4Token");
    var data = {};
    /*** 此段包夾模擬 http 抓資料 begin *******/
    if ((!!recallUrl) && (!!a4Key)) {  //
      data = { jwt: jwtJun, user: { account : "ben", age: 51 }};
    }
    return of(data).pipe(delay(2000));
    /*** 此段包夾模擬抓資料 end ************/
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}
