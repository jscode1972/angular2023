import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { InputState, User } from 'src/app/models';
import { UserService } from 'src/app/core';
import { ModalInputComponent, PopupModalComponent, PopupConfirmComponent } from '../..';

declare var $ : any;

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  inputState : InputState = InputState.Insert;
  users !: User[];

  @ViewChild(ModalInputComponent) input !: ModalInputComponent;  
  @ViewChild(PopupModalComponent) modal !: PopupModalComponent;
  @ViewChild(PopupConfirmComponent) confirm !: PopupConfirmComponent;

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
    this.inputState = InputState.Insert;
    this.input.fillForm(InputState.Insert);
  }

  onUpdate(u : User) {
    // 進入修改模式
    this.inputState = InputState.Update;
    this.input.fillForm(InputState.Update, u);
  }

  onDelete(u : User) {
    // 進入刪除模式
    this.inputState = InputState.Delete;
    this.input.fillForm(InputState.Delete, u);
  }

  onSubmit() {
    // 進入確認模式
    this.input.check();
  }

  onConfirm() {
    // 送出資料
    this.input.save();
      /*.subscribe( (p : boolean) => {
        if (p) {
          this.modal.hide();
        }
      });*/
  }
}
