import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor() {
    this.current = {
      city: 'Alpharetta',
      country: 'usa',
      date: new Date(),
      image: 'assets/img/sunny.svg',
      tempurature: 72,
      descrption: 'sunny',
    };
  }

  ngOnInit() {}
}
