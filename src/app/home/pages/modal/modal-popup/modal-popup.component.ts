import { Component, OnInit, Attribute, Input } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements  OnInit {

 // @Input() 
  constructor(@Attribute('modalTitle') public modalTitle : string,
              @Attribute('modalSize') public modalSize : string ) {}

  ngOnInit(): void {   }

  show() {    
    $("#staticBackdrop").modal('show'); 
  }

  hide() {    
    $("#staticBackdrop").modal('hide'); 
  }

  public modalConfirm (callback : Function) {
    $("#mi-modal").modal('show');

    $("#modal-btn-ok").on("click", function(){
      $("#modal-btn-ok").off("click");
      $("#modal-btn-no").off("click");
      $("#mi-modal").modal('hide');
      callback(true);
    });
    
    $("#modal-btn-no").on("click", function(){
      $("#modal-btn-ok").off("click");
      $("#modal-btn-no").off("click");
      $("#mi-modal").modal('hide');
      callback(false);
    });
  };

  /*** 動態產生按鈕沒有比較方便 ***************************
  public setButton(caption : string, callback: () => any ) {
    var btn = document.createElement("button"); 
    $(btn) //.addClass(classname)
      .text(caption)
      .appendTo($(".modal-footer")) //main div
      .click(callback);
  }****************************************************/
}
