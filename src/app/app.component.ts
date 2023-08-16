import { Component, OnInit } from '@angular/core';
import { ServiceWeatherService } from './services/service-weather.service'
import { MatDialog } from '@angular/material/dialog';
import { AlertErrComponent } from './components/alert-err/alert-err.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weather: any
  title = 'weather-app';
  icon: any

  constructor(
    private serviceWeatherService: ServiceWeatherService,
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    this.dialog.open(AlertErrComponent)
  }

  ngOnInit() {

  }

  getWeather(cityName: string) {
    this.serviceWeatherService.getWeather(cityName)
      .subscribe(
        res => {
          this.weather = res;
          this.icon = this.serviceWeatherService.getIconWeather(this.weather.weather[0].icon);
        },
        err => this.openDialog()
      )
  }

  submitLocation(cityName: HTMLInputElement) {
    this.getWeather(cityName.value)
    cityName.value = ''
    cityName.focus()

    return false

  }

}
