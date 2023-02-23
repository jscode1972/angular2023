import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-tdf-variable',
  templateUrl: './tdf-variable.component.html',
  styleUrls: ['./tdf-variable.component.css']
})
export class TdfVariableComponent {

  //
  // @ViewChild('condition') condition : NgModel; ?? 怎麼用

  onSearch(condition: NgModel): void {
    console.log(`查詢條件：${condition.value}`);
  }

}
