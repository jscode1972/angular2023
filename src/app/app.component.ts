import { Component } from '@angular/core';
import { LanguageService, Layout, LayoutService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2023';

  constructor(private layoutService : LayoutService,
              private langService: LanguageService ) {
                
    /**********************************************************
     * 參考: https://edwardzou.blogspot.com/2019/01/ngx-translate.html
     * 我們可以這樣來思考，很明顯的我們語系的轉換是會跨元件溝通的，
     * 而ngx-translate對於語系的切換其實是使用一個自己寫好的TranslateService來處理要顯示的語系，
     * 所以我們可以另外再寫一個LanguageService來集中管理這件事情，如此一來即使在navbar切換了語系，
     * 其他模組的內容也能跟著切換，在延遲載入模組時也能有一樣的效果
    ********************************************************* */
    this.langService.setInitState();
  }

  get layout() : Layout{
    return this.layoutService.layout;
  }
}
