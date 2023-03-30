import { Component } from '@angular/core';
import { Layout, LayoutService, LanguageService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private layoutService : LayoutService,
              private langService: LanguageService  ) {
    //             
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
}
