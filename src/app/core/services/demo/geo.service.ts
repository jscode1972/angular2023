import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private http:HttpClient){ }

  getGeo(x : string): Observable<any> {
    const url = `https://api.weather.gov/points/${x}`; /// '39.7456,-97.0892';
    return this.http.get<any>(url)
}
}
