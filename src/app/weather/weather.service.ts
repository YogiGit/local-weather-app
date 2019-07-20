import { HttpClient } from '@angular/common/http';
import { ICurrentWeather } from '../interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ];

  main: {
    temp: number
  };
  sys: {
    country: string
  };
  dt: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: new Date(data.dt * 1000),
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      tempurature: this.convertKelvinToFahrenheit(data.main.temp),
      descrption: data.weather[0].description,
    };
  }

  geyCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseURL}api.openweathermap.org/data/2.5/weather?` +
          `q=${city},{country}&appid=${environment.appid}`
      )
      .pipe(map(data => this.transformToICurrentWeather(data)));
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin - 273.15) * 1.8 + 32;
  }
}
