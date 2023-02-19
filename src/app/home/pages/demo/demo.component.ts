import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public popup : boolean = false;

  constructor() {}
  
  show() {
    this.popup = true;
  }
  //
  onSave() {
    this.popup = false;
  }
  //
  onCancel() {
    this.popup = false;
  }
}
