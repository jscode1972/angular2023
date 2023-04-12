import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { LanguageService, Layout, LayoutService, UserService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular2023';

  constructor(private layoutService: LayoutService,
              private langService: LanguageService,
              private userService: UserService ) {
                
    /**********************************************************
     * 參考: https://edwardzou.blogspot.com/2019/01/ngx-translate.html
     * 我們可以這樣來思考，很明顯的我們語系的轉換是會跨元件溝通的，
     * 而ngx-translate對於語系的切換其實是使用一個自己寫好的TranslateService來處理要顯示的語系，
     * 所以我們可以另外再寫一個LanguageService來集中管理這件事情，如此一來即使在navbar切換了語系，
     * 其他模組的內容也能跟著切換，在延遲載入模組時也能有一樣的效果
    ********************************************************* */
    this.langService.setInitState();

    // 訂閱
    this.userService.getLoginStatus().subscribe(this.loginOberserver);
    this.userService.getCurrentUser().subscribe(this.userOberserver); 
  }

  ngOnInit(): void {
    // 假如尚未登入 (localStorage/JWT)
    if (!false) {
      // 導向 login.html
      this.userService.login('ben', '名字');
    }
  }

  get layout() : Layout{
    return this.layoutService.layout;
  }

  loginOberserver = {
    next: (data: any) => { console.log('登入狀態', data) },
    error: (err: any) => { console.log('登入狀態', err) },
    complete: () => {}
  }

  userOberserver = {
    next: (data: any) => { console.log('使用者帳號', data) },
    error: (err: any) => { console.log('使用者錯誤', err) },
    complete: () => {}
  }
}
