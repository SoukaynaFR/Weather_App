import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  
WeatherData:any;
cityName:string='London';
constructor(){}


  ngOnInit(): void {
    this.WeatherData = {
      main: {}
    }
    this.getWeatherData();
    this.cityName ='';
  }
  
  onSubmit(){
    this.getWeatherData();
    this.cityName ='';
  }

  getWeatherData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=15157990a839b26e8e8c626470c01af8`)
  
    .then(response => response.json())
    .then(data =>{this.setWeatherData(data);})

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
