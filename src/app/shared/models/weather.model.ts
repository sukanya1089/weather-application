export interface WeatherTempDetails {
    city_name?: string;
    temp?: number;
    app_temp?: number;
    rh?: number;
    wind_spd?: number;
    pres?: number;
    weather?: WeatherDetails;
    valid_date?: string;
    min_temp?: number;
    max_temp?: number;
    
}
export interface WeatherDetails {
    
    description: string;
    icon: string;
    name: string;

}

export interface CurrentWeatherDetails {
    count: number;
    data: WeatherTempDetails[];
}

export interface ForecastWeatherDetails {
    
    data: WeatherTempDetails[];
}