import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent {

  readonly condition = new FormControl();

  readonly form = new FormGroup({
    id: new FormControl(),
    password: new FormControl(),
  });

  onSearch(): void {
    console.log(`查詢條件：${this.condition.value}`);
  }
}
