import { Component, Input, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css']
})
export class PopupDialogComponent implements OnInit {

  @Input('key') key !: string;

  constructor() {}

  ngOnInit() { }
  
  show() {
    //$("#mi-modal").modal('show');
    $("#"+this.key).modal('show');
  }

  hide() {
    //$("#mi-modal").modal('hide');
    $("#"+this.key).modal('hide');
  }

}
