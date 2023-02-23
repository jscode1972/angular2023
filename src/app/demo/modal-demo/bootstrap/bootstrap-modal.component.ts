import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.css']
})
export class BootstrapModalComponent {
  @Input() id !: string;
  @Input() title !: string;
  //@Output() saveChange = new EventEmitter<boolean>();
  
}
