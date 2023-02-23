import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css']
})
export class TdfFormComponent {
  onSubmit(form: NgForm): void {
    console.log('表單資料：', form);
  }
}
