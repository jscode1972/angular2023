import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf-model',
  templateUrl: './tdf-model.component.html',
  styleUrls: ['./tdf-model.component.css']
})
export class TdfModelComponent {
  condition = '';

  onSearch(): void {
    console.log(`查詢條件：${this.condition}`);
  }
}
