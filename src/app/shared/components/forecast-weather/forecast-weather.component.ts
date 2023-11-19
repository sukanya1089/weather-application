import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort'
@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {

  @Input() public forcastWeatherData: any;
  @ViewChild(MatSort) public sort!: MatSort;

  public sortedForecastData: any;

  displayedColumns: string[] = ['date', 'weather', 'minMaxTemp'];
  constructor() { }

  ngOnInit(): void {
    try{
      this.sortedForecastData = this.forcastWeatherData.slice();
    } catch (error) {
      console.log(error);
    }
    
  }

  getWeatherIconURL(weather: any): string {
    return `https://cdn.weatherbit.io/static/img/icons/${weather.icon}.png`
  }

  sortByDate(sort: any): void {
    try {
      const isAsc = sort.direction === 'asc';
      const data = this.forcastWeatherData.slice();
      this.sortedForecastData = [...data.sort((pre: any, post: any) => {
        const preDate = (new Date(pre.valid_date)).getMilliseconds();
        const postDate = (new Date(post.valid_date)).getMilliseconds();
        return (preDate < postDate ? -1 : 1) * (isAsc ? 1 : -1);
      })];

    } catch (error) {
      console.log(error);
    }

  }

}
