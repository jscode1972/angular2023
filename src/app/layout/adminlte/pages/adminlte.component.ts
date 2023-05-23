import { Component } from '@angular/core';
import { LayoutService, UserService } from 'src/app/core';

@Component({
  selector: 'app-adminlte',
  templateUrl: './adminlte.component.html',
  styleUrls: ['./adminlte.component.css']
})
export class AdminlteComponent {

  constructor(public layout : LayoutService ) {

  }
  
}
