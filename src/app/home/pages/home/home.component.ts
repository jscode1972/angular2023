import { Component, Inject } from '@angular/core';
import { LoginService, LocalStorageService, JwtTokenService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  x : string = 'na';
  n1 : number = 0;
  n2 : number = 0;
  d1 : Date = new Date();
  d2 : Date = new Date();

  constructor(private login : LoginService,
              private localStorage : LocalStorageService,
              private jwt : JwtTokenService) {
                
   let t = this.localStorage.getToken();
   console.log('token', t);
   //
   this.jwt.setToken(t!);
   this.x = this.jwt.getAccount();
   this.n1  = this.jwt.getExpiryTime();
   this.n2 = Date.now();
   this.d1 = new Date( this.jwt.getExpiryTime());
   this.d2 = new Date( Date.now());
  }

  onPromise() {
    this.login.signinCallBack()
      .then((o) => {
        this.x = o;
      })
      .catch((e) => {
        this.x = e;
      });
  }

}

