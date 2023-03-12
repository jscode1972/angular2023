import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})
export class ModalInputComponent {

  public checkInput() : boolean {
    alert('確定存檔');
    return true;
  }
}
