import { Component, OnInit, Input, Attribute } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent implements OnInit {

  constructor(@Attribute('modalSize') public modalSize : string ) {}

  ngOnInit() { }

  show() {
    $("#staticBackdrop").modal('show');
  }

  hide() {
    $("#staticBackdrop").modal('hide');
  }

  /*** 動態產生按鈕沒有比較方便 ***************************
  public setButton(caption : string, callback: () => any ) {
    var btn = document.createElement("button"); 
    $(btn) //.addClass(classname)
      .text(caption)
      .appendTo($(".modal-footer")) //main div
      .click(callback);
  }****************************************************/
}
