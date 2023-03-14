import { Component, OnInit, Input } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.css']
})
export class PopupConfirmComponent implements OnInit {

  @Input() title !: string;

  constructor() {}

  ngOnInit() { }
  
  show() {
    $("#mi-modal").modal('show');
  }

  hide() {
    $("#mi-modal").modal('hide');
  }
}
