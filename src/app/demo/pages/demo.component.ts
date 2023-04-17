import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  routeNotify = {
    next: (data:any) => {
      console.log("DemoComponent", data);
    }
  }

  constructor( private route: ActivatedRoute) {
    //this.route.data.subscribe(this.routeNotify);
    console.log("DemoComponent", this.route.snapshot);
  }

}
