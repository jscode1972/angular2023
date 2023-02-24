import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-normal-modal',
  templateUrl: './normal-modal.component.html',
  styleUrls: ['./normal-modal.component.css']
})
export class NormalModalComponent {

  @Input() id !: string;
  @Input() title !: string;
  //@Output() saveChange = new EventEmitter<boolean>();

}
