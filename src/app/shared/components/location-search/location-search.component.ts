import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationDetails } from '../../models';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {

  @Input() cityName: string = '';
  @Output() searchLocationDetails = new EventEmitter<LocationDetails>();
  @Output() showLoader = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

    try {
      if (!navigator.geolocation) {
        console.log('Location Not Supported');
      } else {
        this.searchWithCoord();
      }
    } catch (error) {
      console.log(error);
    }

  }

  public searchWithCityName(): void {
    try {
      const locationDetails: LocationDetails = {
        cityName: this.cityName
      }
      this.searchLocationDetails.emit(locationDetails);
    } catch (error) {
      console.log(error);
    }

  }

  public searchWithCoord(): void {
    try {
      this.showLoader.emit(true);
      navigator.geolocation.getCurrentPosition((position) => {
        const locationDetails: LocationDetails = {
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude
        }
        this.searchLocationDetails.emit(locationDetails);
      });
    } catch (error) {
      console.log(error);
    }

  }

}
