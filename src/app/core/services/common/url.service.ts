import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  urlPath = new URL(window.location.href);
  urlParams = new URLSearchParams(window.location.search);

  constructor() { }

  getParam(key : string) {
    return this.urlParams.get(key);
  }

  delParam(key : string) {
    this.urlParams.delete(key);
  }
}
