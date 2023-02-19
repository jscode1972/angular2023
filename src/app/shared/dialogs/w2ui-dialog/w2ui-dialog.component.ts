import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-w2ui-dialog',
  templateUrl: './w2ui-dialog.component.html',
  styleUrls: ['./w2ui-dialog.component.css']
})
export class W2uiDialogComponent {
  document : any; 
  // 參考: https://w2ui.com/web/demos/#/popup/1
  constructor(private window : Window) {
    this.document = this.window.document;
  }
  // Input/Output get/set 
  _popup : boolean = false;
  @Output() popupChange = new EventEmitter<boolean>(); // 幹! 這裡名稱要配合!!

  @Input() 
  set popup(val: boolean) {
    this._popup = val;
    if (this._popup) {
      this.Lock();
    } else {
      this.Unlock();
    }
    this.popupChange.emit(this._popup);
  }
  get popup(): boolean {
    return this._popup;
  }
  //
  Lock() {
    var obj = this.document.createElement('div');
    obj.id = 'lock-screen';
    obj.className = 'w2ui-lock';
    obj.style.cssText = "height: 110%; width: 100%; opacity: 0.3; display: block;" // 找機會自訂
    this.document.body.appendChild(obj);
  }
  //
  Unlock() {
    var obj = this.document.getElementById('lock-screen');
    obj?.remove();
  }
}
