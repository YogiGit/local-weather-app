import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: 'Alpharetta',
      country: 'usa',
      date: new Date(),
      image: 'assets/img/sunny.svg',
      tempurature: 33,
      descrption: 'sunny',
    };
  }

  ngOnInit() {
    this.weatherService
      .geyCurrentWeather('Alpharetta', 'US')
      .subscribe(data => (this.current = data));
  }
}
