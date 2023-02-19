import { Component } from '@angular/core';

import { stackblitz } from 'src/app/shared';

@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.css']
})
export class StackblitzComponent {
  blitz = stackblitz.component;
}
