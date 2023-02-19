import { Component } from '@angular/core';
import { Layout, LayoutService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private layoutService : LayoutService ) {}

  set layout(value : Layout) {
    this.layoutService.layout = value;
  }

  get layout() : Layout {
    return this.layoutService.layout;
  }
}
