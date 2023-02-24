import { Component, Input, Attribute, Output, EventEmitter } from '@angular/core';
declare let $ : any;

@Component({
  selector: 'app-static-modal',
  templateUrl: './static-modal.component.html',
  styleUrls: ['./static-modal.component.css']
})
export class StaticModalComponent {
  @Input() title !: string;
  @Output() confirmClick = new EventEmitter();
  @Output() cancelClick = new EventEmitter();

  // 呼叫方 <app-static-modal modalSize='modal-lg'...>
  constructor(@Attribute('modalSize') public modalSize : string) {}

  show() { $("#staticBackdrop").modal('show'); }  // 透過範本參考呼叫
  hide() { $("#staticBackdrop").modal('hide'); }  // 透過範本參考呼叫
  onConfirm() { this.confirmClick.emit(); }
  onCancel() { this.cancelClick.emit(); }

  onBind() {
    //$("#staticBackdrop").on('show.bs.modal', fn(){});
  }
}
