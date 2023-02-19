import { Component } from '@angular/core';
import { Layout, LayoutService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2023';

  constructor(private layoutService : LayoutService ) { }

  get layout() : Layout{
    return this.layoutService.layout;
  }
}
