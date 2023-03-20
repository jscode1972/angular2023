import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { InputState, User } from 'src/app/models';
import { UserService } from 'src/app/core';
import { ModalInputComponent, PopupModalComponent } from '../..';

declare var $ : any;

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  //inputState : InputState = InputState.Insert;
  users !: User[];

  @ViewChild(ModalInputComponent) input !: ModalInputComponent;  
  @ViewChild(PopupModalComponent) modal !: PopupModalComponent;
  //@ViewChild(PopupConfirmComponent) confirm !: PopupConfirmComponent;

  constructor(private svc : UserService) {}

  ngOnInit(): void {
    this.onQuery();
  }

  onQuery() {
    this.svc.getUsers() 
      .subscribe( users => {
        this.users = users; 
      });
  }
  
  onInsert() {
    // 進入新增模式
    this.input.fillForm(InputState.Insert);
    this.modal.show();
  }

  onUpdate(u : User) {
    // 進入修改模式
    this.input.fillForm(InputState.Update, u);
    this.modal.show();
  }

  onDelete(u : User) {
    // 進入刪除模式
    this.input.fillForm(InputState.Delete, u);
    this.modal.show();
  }

  onCallback(succ : boolean) {
    if (succ) {
      this.modal.hide();
      this.onQuery();
    }
  }

  /*onSubmit() {
    // 進入確認模式
    this.input.check();
  }

  onConfirm() {
    // 送出資料
    this.input.save();
      .subscribe( (p : boolean) => {
        if (p) {
          this.modal.hide();
        }
      });
  }*/
}
