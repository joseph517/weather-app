import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceWeatherService {


  apiKey: string = 'd8704d2b4f1ffd6fb2340b7a92ae80ad';
  URI: string = ''

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`
  }

  getWeather(cityName: string) {
    return this.httpClient.get(`${this.URI}${cityName}`)
  }
  getIconWeather(icon: string){
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
  }
}
