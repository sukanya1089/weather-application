import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastWeatherComponent } from './components/forecast-weather/forecast-weather.component';
import { LocationSearchComponent } from './components/location-search/location-search.component';



@NgModule({
  declarations: [
    CurrentWeatherComponent,
    ForecastWeatherComponent,
    LocationSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatProgressBarModule
  ],
  exports: [
    CurrentWeatherComponent,
    ForecastWeatherComponent,
    LocationSearchComponent,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
