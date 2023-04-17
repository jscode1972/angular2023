import { Injectable } from '@angular/core';
import { Menu } from 'src/app/models';
import { Logger, BackendService, MessageService } from '..';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus !: Menu[]; // 提供物件供介面使用 UI
  constructor(private backend: BackendService,
    private logger: Logger,
    private messageService: MessageService) {
   
    this.getMenus();
  }

  // 觀察者模式, 抓到資料 => 更新物件 => 同步UI
  getMenus(): void {
    this.backend.getMenus().subscribe(x => {
      this.messageService.add('MenuService: fetched menus');
      //this.logger.log(`Fetched ${x.length} menus.`);
      this.menus = x;
    });
  };
}
