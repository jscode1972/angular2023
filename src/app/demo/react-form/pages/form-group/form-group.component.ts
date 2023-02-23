import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {

  // https://stackblitz.com/edit/ng-book-rf-form-group
  
  readonly form = new FormGroup({
    id: new FormControl(),
    password: new FormControl(),
  });

}
