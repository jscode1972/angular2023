import { Component } from '@angular/core';
declare let $ : any;

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent {
  onPopup() {
    //$("#xx").text('xxxxx');
    $("#staticBackdrop").modal('show');
  }

  onSave() {
    $("#staticBackdrop").modal('hide');
    alert('ok');
  }
}
