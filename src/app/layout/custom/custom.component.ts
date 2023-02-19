import { Component } from '@angular/core';
import { Layout, LayoutService } from 'src/app/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  constructor(private layoutService : LayoutService ) {}

  set layout(value : Layout) {
    this.layoutService.layout = value;
  }

  get layout() : Layout {
    return this.layoutService.layout;
  }
}
