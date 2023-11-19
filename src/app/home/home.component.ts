import { Component, OnInit } from '@angular/core';
import { LocationDetails, WeatherTempDetails } from '../shared/models';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public locationDetails!:LocationDetails;
  public currentWeatherDetails!: WeatherTempDetails;
  public forcastWeatherData: WeatherTempDetails[] = [];
  public currentUnit = 'M';
  public loading = true;
  public errorMessage = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    

  }

  public updateUnit(unit: string): void{
    this.currentUnit = unit;
    this.getWeatherDetails(this.locationDetails, unit)
  }


  public getWeatherDetails(locationDetails: LocationDetails, unit: string = 'M'): void{
    
    try {
      this.locationDetails = locationDetails;
      this.currentWeatherDetails = {};
      this.forcastWeatherData = [];
      this.loading = true;
  
      this.weatherService.getCurrentWeather(locationDetails, unit).subscribe((weatherData)=> {
        if(weatherData.data.length && weatherData.data[0].city_name) {
          this.currentWeatherDetails = weatherData.data[0];
          this.locationDetails.cityName = weatherData.data[0].city_name;
        } else {
          this.errorMessage = 'The city name you are searching for is not existing. Please search with another city name.';
        }
        this.loading = false;
      }, error => {
        this.loading = false;
        this.errorMessage = 'Something went wrong please try again.'
      })
  
      this.weatherService.getForecastWeather(locationDetails,6,unit).subscribe((forecastData) => {
  
        if(forecastData && forecastData.data.length) {
          this.forcastWeatherData= forecastData.data.slice(1);
        }
      })
    } catch(error) {
      console.log(error);
    }
   
  }

}
