import { Component } from '@angular/core';

@Component({
  selector: 'app-w2ui',
  templateUrl: './w2ui.component.html',
  styleUrls: ['./w2ui.component.css']
})
export class W2uiComponent {
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
