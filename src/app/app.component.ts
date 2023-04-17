import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LanguageService, Layout, LayoutService, LocalStorageService, UserService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular2023';
  valid : boolean = false;

  constructor(private layoutService: LayoutService,
              private langService: LanguageService,
              private localStorage: LocalStorageService,
              private userService: UserService,
              private route: ActivatedRoute ) {
                
    /**********************************************************
     * 參考: https://edwardzou.blogspot.com/2019/01/ngx-translate.html
     * 我們可以這樣來思考，很明顯的我們語系的轉換是會跨元件溝通的，
     * 而ngx-translate對於語系的切換其實是使用一個自己寫好的TranslateService來處理要顯示的語系，
     * 所以我們可以另外再寫一個LanguageService來集中管理這件事情，如此一來即使在navbar切換了語系，
     * 其他模組的內容也能跟著切換，在延遲載入模組時也能有一樣的效果
    ********************************************************* */
    this.langService.setInitState();

    // 訂閱
    this.userService.getLoginStatus().subscribe(this.validNotify); 
    this.userService.getCurrentUser().subscribe(this.userNotify); 
  }

  ngOnInit(): void {
    // 假如尚未登入 (localStorage/JWT)
    if (!false) {
      // 導向 login.html
      //this.userService.login('ben', '名字');
    }

    //this.route.data.subscribe(this.routeNotify);
    console.log("AppComponent", this.route.snapshot);
  }

  get layout() : Layout{
    return this.layoutService.layout;
  }

  /**  [ActivatedRoute]                                     '' / demo / rxjs/1 
  snapshot  : ActivatedRouteSnapshot   当前路由快照!!          --------------------------
  url       : Observable<urlsegment[]> 当前路由匹配的URL片段。  ''   demo   rxjs/1   (match path/:id )
  params    : Observable<Params>       当前路由的矩阵参数                        1   (match :id )
  queryParams : Observable<Params>     所有路由共享的查询参数    相同  相同    相同      (?foo=..&bar=..)
  fragment  : Observable<string>        所有路由共享的URL片段   null  null   null
  data      : Observable<Data> 当前路由的静态或者动态解析的数据。  null  null   null
  outlet    : string   当前路由插座的名称。一个常量值。            primary primary primary
  component : Type<any>|string     路由对应的组件。一个常量值。   元件   元件    元件
  routeConfig : Route              当前路由状态树的根节点
  root       : ActivatedRouteSnapshot
  parent     : ActivatedRouteSnapshot
  firstChild : ActivatedRouteSnapshot
  children   : ActivatedRouteSnapshot[]
  pathFromRoot : ActivatedRouteSnapshot[]
   */

  routeNotify = {
    next: (data:any) => {
      console.log("AppComponent-routeNotify", data);
    }
  }

  validNotify = {
    next: (login : boolean) => { 
      this.valid = login;
    },
    error: (err: any) => { console.log('登入狀態', err) },
    complete: () => {}
  }

  userNotify = {
    next: (user: any) => { 
      if (user) {
        //console.log('AppComponent-userNotify', user);
      }
    },
    error: (err: any) => { console.log('使用者錯誤', err) },
    complete: () => {}
  }

  onLogin(){
    let token : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYWNjb3VudCI6IkJlbiBIdWFuZyIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNjA0ODk4NDUyMDg0fQ.53_G33jYBIosnRb-g7JEgNIYZ3ghTn5gj0Zwlgfp69M";
    this.localStorage.saveToken(token);
  }

}
