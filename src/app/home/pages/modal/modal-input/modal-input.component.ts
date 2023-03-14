import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // 模組要加入
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/core';
import { ModalStatus, User } from 'src/app/models';
import { PopupModalComponent, PopupConfirmComponent } from '../..';

class Info {
  title!: string;
  warning!: string;
}

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})
export class ModalInputComponent implements OnInit {

  status !: ModalStatus;
  orgId : string = "";
  frm !: FormGroup;

  @Input() modal !: PopupModalComponent;
  @Input() confirm !: PopupConfirmComponent;

  constructor(private fb : FormBuilder,
              private svc : UserService
  ) {}

  get info() : Info {
    switch(this.status) {
      case ModalStatus.Insert : 
        return { title: "新增使用者", warning: "確認新增?" };
      case ModalStatus.Update : 
        return { title: "編輯使用者", warning: "確認修改?" };
      case ModalStatus.Delete : 
        return { title: "刪除使用者", warning: "確認刪除?" };
      default: 
        return { title: "NA", warning: "NA" };
    }
  }

  ngOnInit(): void {    
    this.initForm();
  }

  initForm() {
    this.frm = this.fb.group({
      // 明天研究重點 03/15
      pid: ['', Validators.required], 
      name: '',
      sex: '',
      age: 0,
    });
  }

  fillForm(status : ModalStatus, u? : User) {
    this.orgId = "";
    this.status = status;
    this.modal.show(this.info.title);
    //
    if (!u?.pid) {
      // reset
      this.frm.reset();
    } else {
      this.orgId = u.pid;
      this.svc.getUser(u.pid).subscribe( r => {
        this.frm.patchValue({ 
          pid: r.pid,
          name: r.name,
          sex: r.sex,
          age: r.age 
        });
      });
    }
  }

  check() {
    // 明天研究重點 03/15
    console.log("check-in");
    if (true) { // 確認 rule
      console.log("check-ok");
      this.confirm.show(this.info.warning);
    } else {
      console.log("check-ng");   
    }
  }

  save() : Observable<boolean> {
    this.confirm.hide();
    switch(this.status) {
      case ModalStatus.Insert: 
        return this.svc.addUser(this.frm.value);
      case ModalStatus.Update: 
        return this.svc.updUser(this.orgId, this.frm.value);
      case ModalStatus.Delete: 
        return this.svc.delUser(this.orgId);
      default:
        return of(false);
    }
  }
}
