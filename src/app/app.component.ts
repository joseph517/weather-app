import { Component, OnInit } from '@angular/core';
import {ServiceWeatherService} from './services/service-weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weather: any
  title = 'weather-app';
  icon : any

  constructor( private serviceWeatherService: ServiceWeatherService){}

  ngOnInit() {

  }

  getWeather(cityName: string) {
    this.serviceWeatherService.getWeather(cityName)
      .subscribe(
        res => {
          this.weather = res;
          this.icon = this.serviceWeatherService.getIconWeather(this.weather.weather[0].icon);
        },
        err => alert('Ciudad incorrecta')
    )
  }


  submitLocation(cityName: HTMLInputElement) {
    this.getWeather(cityName.value)
    cityName.value = ''
    cityName.focus()

    return false

  }

}
