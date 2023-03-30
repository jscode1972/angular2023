import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Pipe({
  name: 'myTranslate',
  pure: false // 此行不可少
})
export class MyTranslatePipe extends TranslatePipe implements PipeTransform {

  constructor(translate: TranslateService, _ref: ChangeDetectorRef) {
    super(translate, _ref);
  }

  // 預設產生 transform(value: unknown, ...args: unknown[]): unknown {
  override  transform(query: string, ...args: any[]): any {
    // 範例-1: {{ '語句...' | myTranslate:this }}
    // 範例-2: {{ '語句...' | myTranslate:{key:value} }}
    // 範例-3: {{ '語句...' | myTranslate:this:{key:value} }}
    if (args.length > 0) {
      let name = (typeof args[0] === "object") ? args[0].constructor.name : "menu"; // common
      query = `${name}.${query}`; 
      args = args.slice(1,);      
    }
    //
    return super.transform(query, ...args);  // 必須加 ..., 不然傳入參數失效 {{name}}
  }

}
