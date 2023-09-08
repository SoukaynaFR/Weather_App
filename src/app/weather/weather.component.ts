import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
WeatherData:any;
cityName?:string;
constructor(){}


  ngOnInit(): void {
    this.WeatherData = {
      main: {}
    }
    this.getWeatherData();
    console.log(this.WeatherData);
  }
  

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=15157990a839b26e8e8c626470c01af8')
    .then(response => response.json())
    .then(data =>{this.setWeatherData(data);})

  //   let data = JSON.parse('{"coord":{"lon":10.99,"lat":44.34},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":298.82,"feels_like":298.62,"temp_min":296.86,"temp_max":300.05,"pressure":1018,"humidity":45,"sea_level":1018,"grnd_level":936},"visibility":10000,"wind":{"speed":3.01,"deg":30,"gust":3.59},"clouds":{"all":0},"dt":1694183105,"sys":{"type":2,"id":2075663,"country":"IT","sunrise":1694148391,"sunset":1694194899},"timezone":7200,"id":3163858,"name":"Zocca","cod":200}')
  // this.setWeatherData(data);
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    this.WeatherData.name =this.WeatherData.name;
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.humidity = this.WeatherData.main.humidity ;
    this.WeatherData.wind = this.WeatherData.wind.speed;
    



  }
}
