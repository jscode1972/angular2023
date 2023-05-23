import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppInitService, LanguageService, Layout, LayoutService,
     LocalStorageService, JwtTokenService, LoginService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular2023';
  valid : boolean = false;
  config: any;

  constructor(private appInitService: AppInitService,
              private layoutService: LayoutService,
              private langService: LanguageService,
              //private localStorage: LocalStorageService,
              //private jwtTokenService: JwtTokenService,
              private loginService: LoginService,
              private route: ActivatedRoute ) {
                
    this.config = this.appInitService.getConfig();
    console.log("this.config ", this.config );
    
    /**********************************************************
     * 參考: https://edwardzou.blogspot.com/2019/01/ngx-translate.html
     * 我們可以這樣來思考，很明顯的我們語系的轉換是會跨元件溝通的，
     * 而ngx-translate對於語系的切換其實是使用一個自己寫好的TranslateService來處理要顯示的語系，
     * 所以我們可以另外再寫一個LanguageService來集中管理這件事情，如此一來即使在navbar切換了語系，
     * 其他模組的內容也能跟著切換，在延遲載入模組時也能有一樣的效果
    ********************************************************* */
    this.langService.setInitState();

    // 訂閱
    this.loginService.getLoginStatus().subscribe(this.validNotify); 
    this.loginService.getCurrentUser().subscribe(this.userNotify); 
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log("AppComponent-route", params);
      const token = params['token'];
      console.log("AppComponent-params-token", token);
    });

/*    console.log("href", window.location.href);
    console.log("search", window.location.search);
    console.log("hash", window.location.hash);
    const hash = window.location.hash;
    const search = window.location.search;
    console.log("hash", hash);
    console.log("search", search);

    const params = new URLSearchParams(search);
    const recall = params.get('recall');
    const token = params.get('token');
    console.log("recall-2", recall);
    console.log("token-2", token);

    const hash3 = window.location.hash.substring(1);
    const params3 = new URLSearchParams(hash3);
    const token3 = params3.get('token');
    console.log("token-3", token3);
    */

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
    
    /*
    let ok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYWNjb3VudCI6IkJlbiBIdWFuZyIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNjk2MjM5MDIyfQ.E9CC_nQmnNT7EzbyTNeH8krypdMwP7O2p5QW7vM5MjU";
    let ng = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYWNjb3VudCI6IkJlbiBIdWFuZyIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNjE2MjM5MDIyfQ.-iR0Ut5iCJuEhAXLPB04bxE5FKgtosWuP7yVfYP5lgg";
    let token = ok; 
    this.jwtTokenService.setToken(token);
    */
  }

}
