import { Component } from '@angular/core';
import { Layout, LayoutService } from 'src/app/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  
  constructor(private layoutService : LayoutService ) {}

  set layout(value : Layout) {
    this.layoutService.layout = value;
  }

  get layout() : Layout {
    return this.layoutService.layout;
  }

}
