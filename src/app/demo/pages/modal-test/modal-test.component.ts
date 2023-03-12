import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { StaticModalComponent } from 'src/app/shared';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.css']
})
export class ModalTestComponent {
  // 範本參考?
  @ViewChild(StaticModalComponent) modal !: StaticModalComponent;

  constructor(private fb : FormBuilder) {}

  form = this.fb.group({
    eid: this.fb.control(''),
    acc: this.fb.control(''),
    name: this.fb.control(''),
    age: this.fb.control(new Number()),
    sex: this.fb.control(''),
  });

  onAdd() { 
    this.form.reset();
    this.form.patchValue( { sex: '男' } );
  }

  onEdit(emp : any) {  
    
    this.form.patchValue( { eid: '001', age: 18, sex: '男' } );
    this.modal.show();
  }

  onConfirm() {
    alert('確認');
    this.modal.hide();
  }

  onCancel() {
    alert('取消');
    this.modal.hide();
  }
}
