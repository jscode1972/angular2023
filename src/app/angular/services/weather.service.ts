import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Status, Root } from './weather2.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // headers
  // https://stackoverflow.com/questions/45286764/adding-a-http-header-to-the-angular-httpclient-doesnt-send-the-header-why
  // 自動分析 json -> 宣告
  // https://transform.tools/json-to-typescript

  // 美國氣象 API 網站 都要 KEY
  // OpenWeatherMap API:       https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // Weather Underground API:  https://api.wunderground.com/api/{API key}/conditions/q/{state}/{city}.json
  // Dark Sky API:             https://api.darksky.net/forecast/{API key}/{latitude},{longitude}
  // AccuWeather API:          https://dataservice.accuweather.com/currentconditions/v1/{location key}?apikey={API key}
  // WeatherBug API:           https://api.weatherbug.com/v2/current.ashx?lat={latitude}&long={longitude}&units={units}&output={output}&api_key={API key}
  
  /*******  此API 不卡 CORS 亦不需要 APIKEY *******************
    https://www.weather.gov/documentation/services-web-api
    https://weather-gov.github.io/api/
    https://weather-gov.github.io/api/general-faqs
    https://weather-gov.github.io/api/gridpoints
  ******* ******************* *******************/
  //回傳 OK
  url1 = 'https://api.weather.gov/';
  // https://api.weather.gov/points/lat,lot (經緯)
  url2 = 'https://api.weather.gov/points/39.7456,-97.0892' // 限定美國座標, 台灣不行
        
  constructor(private http : HttpClient) { }

  getStatus() : Observable<Status>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/geo+json; charset=utf-8');
    // now returns an Observable of Config
    return this.http.get<Status>(this.url1, {headers: headers});
  }

  getWearher() : Observable<Root>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/geo+json; charset=utf-8');
    // now returns an Observable of Config
    return this.http.get<Root>(this.url2, {headers: headers});
  }
}
