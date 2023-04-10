import { Component, Inject } from '@angular/core';
import { LoginService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  x : string = 'na';

  constructor(private login : LoginService) { }

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

