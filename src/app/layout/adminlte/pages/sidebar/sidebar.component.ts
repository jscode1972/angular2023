import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Menu } from 'src/app/models';
import { MenuService, MessageService } from 'src/app/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menus : Menu[] = []; // MOCKS;

  constructor( private menuService : MenuService,   
               private messageService : MessageService) {
    this.menus = menuService.menus;
  }

  onMenuClick(menu : Menu) {
    this.messageService.add('Sidebar: onMenuClick');
    //
    from(this.menus).subscribe( m =>
       m.active = (m===menu) //( ?'active':'')
    ); 
  }

  onItemClick(menu : Menu, item : Menu) {
    this.messageService.add('Sidebar: onItemClick');
    //
    from(this.menus).subscribe( m => {
      m.active = (m===menu); //?'active':'');
      m.items?.forEach(n => 
        n.active = (n===item) //?'active':'')
      )
    });
  };
}
