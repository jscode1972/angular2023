import { Component } from '@angular/core';
import { stackblitz } from 'src/app/shared';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  blitz = stackblitz.component;
}
