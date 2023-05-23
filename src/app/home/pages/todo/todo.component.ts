import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of, from} from 'rxjs';
import {map} from 'rxjs/operators';
import { GeoService } from 'src/app/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  foo1: string = '-';
  bar1: string = '-';
  foo2: string = '-';
  bar2: string = '-';
  geo : any;

  constructor(private route: ActivatedRoute, 
    private geoService: GeoService) {
    //const id: Observable<string> = route.params.pipe(map((p:any) => p.id));
    //const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    //const user = route.data.pipe(map(d => d.user));
    route.queryParams.subscribe((x:any) => {
      this.foo1 = x.foo;
      this.bar1 = x.bar;
    });

    const params = new URLSearchParams(window.location.search);
    this.foo2 = params.get('foo')!;
    this.bar2 = params.get('bar')!;
  }

  onGeo() {
    this.geoService.getGeo('39.7456,-97.0892').subscribe((x) => {
      this.geo = x;
    });
  }
}
