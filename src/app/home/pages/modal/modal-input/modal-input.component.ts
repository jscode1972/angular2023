import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // 模組要加入
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core';
import { ModalStatus, User } from 'src/app/models';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})
export class ModalInputComponent implements OnInit {
  @Input() status !: ModalStatus;
  orgId : string = "";
  frm !: FormGroup;

  constructor(private fb : FormBuilder,
              private svc : UserService
  ) {}

  ngOnInit(): void {    
    this.initForm();
  }

  initForm() {
    this.frm = this.fb.group({
      pid: ['', Validators.required],
      name: '',
      sex: '',
      age: 0,
    });
  }

  fillForm(u? : User) {
    if (!u?.pid) {
      // reset
      this.orgId = "";
      this.frm.reset();
    } else {
      this.orgId = u.pid;
      this.svc.getUser(u.pid).subscribe( r => {
        //console.log("fillForm", o);
        this.frm.patchValue({ 
          pid: r.pid,
          name: r.name,
          sex: r.sex,
          age: r.age 
        });
      });
    }
  }

  insert() : Observable<string> { 
    // return this.svc.add()
    return this.svc.addUser(this.frm.value);
  }

  update() : Observable<string> { 
    // return this.svc.upd()
    return this.svc.updUser(this.orgId, this.frm.value);
  }

  delete() : Observable<string> { 
     // return this.svc.del()
     return this.svc.delUser(this.orgId);
  }

  onSubmit() {
    alert('submit');
  }

  public checkInput() : boolean {
    alert('確定存檔');
    return true;
  }
}
