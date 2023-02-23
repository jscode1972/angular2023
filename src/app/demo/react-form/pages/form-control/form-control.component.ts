import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {
  // https://stackblitz.com/edit/ng-book-rf-form-control

  readonly condition = new FormControl();

  onSearch(): void {
    console.log(`查詢條件：${this.condition.value}`);
  }
}
