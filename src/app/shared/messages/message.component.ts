import { Component } from '@angular/core';

//import { MessageService } from '../services/message.service';
import { MessageService } from 'src/app/core';

@Component({
  selector: 'app-message',
  template: `
<div *ngIf="messageService.messages.length">

<h2>Messages</h2>
<button type="button" class="clear"
        (click)="messageService.clear()">Clear messages</button>
<div *ngFor='let message of messageService.messages'> {{message}} </div>

</div>
  `,
  styles: [ ]
})
export class MessageComponent {

  // https://angular.io/tutorial/tour-of-heroes/toh-pt4
  constructor(public messageService : MessageService) {

  }

}
