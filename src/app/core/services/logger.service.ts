import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {

  // https://angular.tw/guide/creating-injectable-service
  constructor() { }
  
  log(msg: any)   { console.log(msg);   }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg);  }
}
