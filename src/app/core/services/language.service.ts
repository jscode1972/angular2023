import { Injectable } from '@angular/core';
import { ReplaySubject, take } from 'rxjs';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  /**********************************************************
   * 參考: https://edwardzou.blogspot.com/2019/01/ngx-translate.html
   * 我們可以這樣來思考，很明顯的我們語系的轉換是會跨元件溝通的，
   * 而ngx-translate對於語系的切換其實是使用一個自己寫好的TranslateService來處理要顯示的語系，
   * 所以我們可以另外再寫一個LanguageService來集中管理這件事情，如此一來即使在navbar切換了語系，
   * 其他模組的內容也能跟著切換，在延遲載入模組時也能有一樣的效果
  ********************************************************* */

  language$ = new ReplaySubject<LangChangeEvent>(1);
  translate = this.translateService;
  // 國旗對照
  countryMap = new Map().set('en-US', 'flag-us').set('zh-TW', 'flag-tw');

  constructor(private translateService: TranslateService) {}

  /**********************************************************
   * setInitState()是在根頁面初始化執行的function，首先告訴translateService我們有的語系，
   * 之後設定初始化語系時使用偵測瀏覽器語言的方式來設定，這裡因為只有中英文兩種，所以只簡單設定非中文語系即顯示英文。
   * 如果你的語系有多種，可以自行調整要顯示的時機。
   * 這裡額外提一下關於瀏覽器語言的測試方法，在Chrome瀏覽器的「進階設定」裡，有語言的項目可以新增，
   * 不過值得注意一點的是，所謂「瀏覽器語言」是指你語言順序第一位的那個! 和你現在瀏覽器「顯示」什麼語言無關哦!
   *********************************************************/

  setInitState() {
    this.translateService.addLangs(['en-US', 'zh-TW']);
    // 根據使用者的瀏覽器語言設定，如果是中文就顯示中文，否則都顯示英文 => 確實是瀏覽器設定
    // 繁體/簡體中文代碼都是 zh
    const browserLang = (this.translate.getBrowserLang()?.includes('zh')) ? 'zh-TW' : 'en-US'  ;
    this.setLang(browserLang);
  }

  /*************************************************************
   * 而我們的多語系自然是兩種元件上都要出現的功能，而且不管哪種選單選擇語系時，
   * 在另一種選單上應該即時呈現剛剛選擇的語系，所以這兩種選單上的顯示是會互相關聯的。
   * 也因此，我們在設定語系setLang()時，要監聽onLangChange()事件，並在語系被變動時推播給訂閱language$的人。
   * 這裡使用ReplaySubject而不是BehaviorSubject，因為我們不需要初始值，
   * 不過如果還是要用BehaviorSubject老實說程式也是可以運作啦XD
   * 好，這樣一來等等不論是在navbar還是sidenav上呼叫切換語系時，就都能即時變動了。
   ****************************************************************/

  setLang(lang: string) {
    this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
      //console.log('setLang => ', lang); //
      this.language$.next(result);
    });
    //console.log('before use => ', lang);
    this.translateService.use(lang);
  }

  /****************************************************
   * 切換語系時更改國旗的方法 -> 選單負責
   * 有了LanguageService，要更換語系就變得簡單多了，你可以使用ngClass來依據現在的語系切換要顯示的國旗圖。
   * 目前顯示的語系就從translateService的currentLang取得即可。
   ****************************************************/
}
