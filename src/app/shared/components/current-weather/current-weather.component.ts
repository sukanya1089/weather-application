import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() public currentWeatherData: any;
  @Input() public unit: string = 'M';
  constructor() { }

  ngOnInit(): void {
  }

  getWeatherIconURL(): string {
    return `https://cdn.weatherbit.io/static/img/icons/${this.currentWeatherData?.weather.icon}.png`
  }

}
