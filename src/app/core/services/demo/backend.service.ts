import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//
import { Menu } from 'src/app/models'; // 到底怎麼分層好呢?
import { MOCKS } from '../../../models/mocks'; // 到底怎麼分層好呢?

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // https://angular.tw/guide/creating-injectable-service
  constructor() { }

  // 觀察者模式
  getMenus() : Observable<Menu[]> {
    // 假裝透過 http 抓到
    return of(MOCKS);
  }
}
