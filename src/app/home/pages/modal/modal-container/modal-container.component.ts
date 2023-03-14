import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ModalStatus, User } from 'src/app/models';
import { UserService } from 'src/app/core';
import { ModalInputComponent, PopupModalComponent, PopupConfirmComponent } from '../..';

declare var $ : any;

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {
  users !: User[];
  status : ModalStatus = ModalStatus.Insert;

  @ViewChild(ModalInputComponent) input !: ModalInputComponent;  
  @ViewChild(PopupModalComponent) modal !: PopupModalComponent;
  @ViewChild(PopupConfirmComponent) confirm !: PopupConfirmComponent;

  constructor(private svc : UserService) {}

  ngOnInit(): void {
    this.onQuery();
  }

  get modalTitle() : string {
    switch(this.status) {
      case ModalStatus.Insert : 
        return "新增使用者";
      case ModalStatus.Update : 
        return "修改使用者";
      case ModalStatus.Delete : 
        return "刪除使用者";
      default: 
        return "NA";
    }
  }

  get modalContent() : string {
    switch(this.status) {
      case ModalStatus.Insert : 
        return "確定新增?";
      case ModalStatus.Update : 
        return "確定修改?";
      case ModalStatus.Delete : 
        return "確定刪除?";
      default: 
        return "NA";
    }
  }

  onQuery() {
    this.svc.getUsers() 
      .subscribe( users => {
        this.users = users; 
      });
  }
  
  onInsert() {
    // 進入新增模式
    this.status = ModalStatus.Insert;
    this.input.fillForm();
    this.modal.show();
  }

  onUpdate(u : User) {
    // 進入修改模式
    this.status = ModalStatus.Update;
    this.input.fillForm(u);
    this.modal.show();
  }

  onDelete(u : User) {
    // 進入刪除模式
    this.status = ModalStatus.Delete;
    this.input.fillForm(u);
    this.modal.show();
  }

  onSubmit() {
    // 進入確認模式
    this.confirm.show();
  }

  onConfirm() {
    // 送出資料
    this.confirm.hide();
    //if () {
    switch(this.status) {
      case ModalStatus.Insert: 
        this.input.insert()
          .subscribe( p => {
            this.modal.hide();
            this.onQuery();
          });
          break;
      case ModalStatus.Update: 
          this.input.update()
            .subscribe( p => {
              this.modal.hide();
              this.onQuery();
            });
          break;
      case ModalStatus.Delete: 
        this.input.delete()
          .subscribe( p => {
            this.modal.hide();
            this.onQuery();
          });
        break;
    }
  }

  onExit() { // 不必要
    // 不存檔離開
    //this.modal.hide();
  }
}
