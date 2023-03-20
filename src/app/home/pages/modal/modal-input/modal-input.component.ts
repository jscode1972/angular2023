import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // 模組要加入
import { Observable, of, range, toArray } from 'rxjs';
import { UserService } from 'src/app/core';
import { InputState, User } from 'src/app/models';
import { PopupModalComponent, PopupDialogComponent } from '../..';

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

  @Output() callback = new EventEmitter();
  @ViewChild('warning') warning !: PopupDialogComponent;
  @ViewChild('confirm') confirm !: PopupDialogComponent;

  constructor(private fb : FormBuilder,
              private svc : UserService
  ) {}

  get header() : string {
    switch(this.inputState) {
      case InputState.Insert: 
        return "新增";
      case InputState.Update: 
        return "修改";
      case InputState.Delete: 
        return "刪除";
      default:
        return "NA";
    }
  }

  checkIf(s : string) : FormControl {
    return this.frm.get(s) as FormControl;
  }

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

  saveForm() : Observable<boolean> {
    // 到時候加上 api 此處 boolan => WrapResult
    // 到時候加上 api 此處 boolan => WrapResult
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

  onSubmit() {
    // 進入確認模式
    if (this.frm.invalid) {
      this.warning.show();
      return;
    }
    this.confirm.show();
  }

  onConfirm() {
    this.confirm.hide();
    this.saveForm().subscribe((succ) => {
      // succ => p.succ
      // alert(p.message)
      if (succ) {
        this.callback.emit(true);
      } else {
        alert('fail...');
      }
    })
  }

}
