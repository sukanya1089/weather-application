import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentWeatherDetails, ForecastWeatherDetails, LocationDetails } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherBitAPIKey = 'e3411aaf036142d2a293ad4b0ad24adf';

  constructor(private httpClient: HttpClient) { }

  public getCurrentWeather(locationDetails:LocationDetails, unit: string): Observable<CurrentWeatherDetails>{
    const extraParams = this.getExtraParams(locationDetails);
    const url = `${environment.weatherBit_baseurl}current?key=${this.weatherBitAPIKey}&units=${unit}&${extraParams}`;
    return this.httpClient.get<CurrentWeatherDetails>(url);
  }

  public getForecastWeather(locationDetails:LocationDetails, days: number, unit: string): Observable<ForecastWeatherDetails>{
    const extraParams = this.getExtraParams(locationDetails);
    const url = `${environment.weatherBit_baseurl}forecast/daily?days=${days}&units=${unit}&key=${this.weatherBitAPIKey}&${extraParams}`;
    return this.httpClient.get<ForecastWeatherDetails>(url);
  }

  private getExtraParams(locationDetails:LocationDetails ): string {
    let extraParams = '';
    if (locationDetails?.cityName) {
      extraParams = `city=${locationDetails?.cityName}`;
    } else {
      extraParams += `lat=${locationDetails?.latitude}&lon=${locationDetails?.longitude}`;
    }

    return extraParams;
  }
}
