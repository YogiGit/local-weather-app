import { Observable, of } from "rxjs";

import { ICurrentWeather } from "../interfaces";
import { IWeatherService } from "./weather.service";
import { count } from "rxjs/operators";

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: "Alpahretta",
    country: "US",
    date: new Date(),
    image: "",
    tempurature: 280.22,
    descrption: "light intensity drizzle"
  };

  geyCurrentWeather(
    city: string,
    country: string
  ): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
