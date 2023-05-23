import { Component } from '@angular/core';
import { Layout, LayoutService, LanguageService, LoginService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  valid : boolean = false;

  constructor(private layoutService : LayoutService,
              private langService: LanguageService,
              private loginService: LoginService ) {
    // 訂閱
    this.loginService.getLoginStatus().subscribe(this.validNotify); 
    this.loginService.getCurrentUser().subscribe(this.userNotify); 
  }

  validNotify = {
    next: (login : boolean) => { 
      //console.log('HeaderComponent-validNotify', login);
      this.valid = login;
    },
    error: (err: any) => { console.log('登入狀態', err) },
    complete: () => {}
  }

  userNotify = {
    next: (user: any) => { 
      if (user) {
        //console.log('HeaderComponent-userNotify', user);
      }
    },
    error: (err: any) => { console.log('使用者錯誤', err) },
    complete: () => {}
  }

  // 版面變換

  set layout(value : Layout) {
    this.layoutService.layout = value;
  }

  get layout() : Layout {
    return this.layoutService.layout;
  }

  // 語系變換

  get currentLanguage() {
    return this.langService.translate.currentLang;
  }

  getCountryMap(currentLanguage: string) {
    return this.langService.countryMap.get(currentLanguage);
  }

  useLanguage(language: any) {
    //console.log(language.value);
    this.langService.setLang(language.value);
  }

  onLogout() {
   this.loginService.logout(); 
  }
}
