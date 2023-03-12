import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
import { ModalInputComponent } from '../modal-input/modal-input.component';
declare var $ : any;

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent {
  
  @ViewChild(ModalPopupComponent) modal !: ModalPopupComponent;
  @ViewChild(ModalInputComponent) input !: ModalInputComponent;

  popup() {
    //this.modal.setButton("確認", this.input.onConfirm);
    this.modal.show();
  }

  onSave() {
    // 準備存檔
    this.modal.modalConfirm(
      this.callback
    );
  }

  onExit() {
    // 不存檔離開
    this.modal.hide();
  }

  callback(confirm : any) : void {
    if(confirm){
      alert('存檔');
    }else{
      alert('放棄');
    }
    //this.modal.hide(); // callback 沒法呼叫
    $("#staticBackdrop").modal('hide'); 
  }
}
