import { Injectable } from '@angular/core';

export enum Layout {
  AdminLTE = 1,
  Custom = 2,
  Angular = 3,
  Fancy = 4
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _layout !: Layout; // adminlte, custome, primeng,..
  
  constructor() { 
    this._layout = Layout.AdminLTE; // 可否改成常數
  }

  get layout() :  Layout{ 
    return this._layout; 
  }
  set layout(value : Layout) {
    // 要卡一下邏輯
    this._layout = value;
  }
}
