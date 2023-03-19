import { Component } from '@angular/core';
import { Layout, LayoutService } from 'src/app/core';

@Component({
  selector: 'app-fancy',
  templateUrl: './fancy.component.html',
  styleUrls: ['./fancy.component.css']
})
export class FancyComponent {
  constructor(private layoutService : LayoutService ) {}

  set layout(value : Layout) {
    this.layoutService.layout = value;
  }

  get layout() : Layout {
    return this.layoutService.layout;
  }
}
