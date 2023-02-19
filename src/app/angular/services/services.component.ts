import { Component } from '@angular/core';

import { Properties } from './weather2.model';  // weather1.model 會出現無限迴圈 => 改 weather2
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  //data : Root | undefined;
  prop !: Properties;
  constructor(private svc : WeatherService){ }

  showWeather() {
    this.svc.getWearher()
      // clone the data object, using its known Config shape
      .subscribe(
        d => {
          console.log(d); 
          this.prop = d.properties;
          console.log(this.prop); 
      }
    ); 
  }
}
