import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // 模組要加入
import { Observable, of, range, toArray } from 'rxjs';
import { UserService } from 'src/app/core';
import { InputState, User } from 'src/app/models';
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

  inputState !: InputState;
  curId : string = "";
  frm !: FormGroup;
  nums : number[] = [];

  @Input() modal !: PopupModalComponent;
  @Input() confirm !: PopupConfirmComponent;

  constructor(private fb : FormBuilder,
              private svc : UserService
  ) {}

  ngOnInit(): void {    
    this.initForm();
    range(140,60)
      .pipe(toArray())
      .subscribe((arr) => {
        //this.nums.push(i);
        console.log("pipe(toArray())", arr);
        this.nums = arr;
      });
  }

  initForm() {
    this.frm = this.fb.group({
      // 明天研究重點 03/15
      pid: ['', Validators.required], 
      name: '',
      sex: '',
      age: 0,
      height: <number>(0),
      weight: <number>(0)
    });
  }

  fillForm(stats : InputState, u? : User) {
    this.curId = "";
    this.inputState = stats;
    this.modal.show();
    //
    if (!u?.pid) {
      // reset
      this.frm.reset();
    } else {
      this.curId = u.pid;
      this.svc.getUser(u.pid).subscribe( r => {
        this.frm.patchValue({ 
          pid: r.pid,
          name: r.name,
          sex: r.sex,
          age: r.age,
          height: r.height,
          weight: r.weight 
        });
      });
    }
  }

  check() {
    // 明天研究重點 03/15
    console.log("check-in");
    if (true) { // 確認 rule
      console.log("check-ok");
      this.confirm.show();
    } else {
      console.log("check-ng");   
    }
  }

  save() {
    this.confirm.hide();
    this.commit() 
      .subscribe( p => {
        if (p) {
          this.modal.hide();
        }
      });
  }

  commit() : Observable<boolean> {
    // 到時候加上 api 此處 boolan => WrapResult
    switch(this.inputState) {
      case InputState.Insert: 
        return this.svc.addUser(this.frm.value);
      case InputState.Update: 
        return this.svc.updUser(this.curId, this.frm.value);
      case InputState.Delete: 
        return this.svc.delUser(this.curId);
      default:
        return of(false);
    }
  }
}
