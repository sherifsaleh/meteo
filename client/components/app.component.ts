import { Component, OnInit, onChanges } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WeatherService } from '../service/weather.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    templateUrl: `client/components/app.component.html`,
    providers: [WeatherService]
})
export class AppComponent implements OnInit, onChanges{

    geolocationObj: string;

    constructor( private _weatherService: WeatherService){}

    ngOnInit(){
        this.getLocation();
    }
    getLocation() {
        var self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function ( position ) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                // setting Latitude  Longitude for the search weather fun.
                self._weatherService.lat = lat;
                self._weatherService.lon = lon;

                self._weatherService.getWeatherByGeo().subscribe(weather => {
                    self.geolocationObj = weather;
                });
            });
        } else {
            console.log("geolocation not supported or not allowed")
        }
    }


}