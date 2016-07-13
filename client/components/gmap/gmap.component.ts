import { Component, OnInit } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'
import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  GOOGLE_MAPS_PROVIDERS,
  GOOGLE_MAPS_DIRECTIVES,
  LazyMapsAPILoaderConfig
} from 'angular2-google-maps/core';

import { WeatherService } from '../../service/weather.service';

// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    temp?: number;
    label?: string;
    draggable: boolean;
}

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, GOOGLE_MAPS_DIRECTIVES],
    selector: "app-gmap",
    templateUrl: `client/components/gmap/gmap.component.html`,
    styleUrls: ['client/components/gmap/gmap.component.css']
    ,providers: [WeatherService]
})
export class GmapComponent  {
    error: string;
    weather: any;
    label : any; // Clicked marker city name

    //constructor ( private _http : Http ){}
    constructor(private _weatherService: WeatherService) { }
    ngOnInit() {
    }

    //AIzaSyCQBqWNTuOMLEao2-4BJy625u6TFKSAy_c
    // google maps zoom level
    zoom: number = 6;

    // initial center position for the map
    lat: number = 46.2276380;
    lng: number = 2.2137490;


    clickedMarker(label: string, index: number) {

       // setting the label city name to the search weather fun.
       this._weatherService.label = label;
       // calling the search weather fun.
       this._weatherService.getWeather().subscribe(weather => {

           this.weather = weather;
           // setting the temp for each marker
           this.markers[index]['temp'] = weather.main.temp;
       });
    }

    markers: marker[] = [
        {
            lat: 48.8566140,
            lng: 2.3522219,
            temp: 1,
            label: 'Paris',
            draggable: false
        },
        {
            lat: 45.7640430,
            lng: 4.8356590,
            temp: 1,
            label: 'Lyon',
            draggable: false
        },
        {
            lat: 43.2964820,
            lng:   5.3697800,
            temp: 1,
            label: 'Marseille',
            draggable: false
        },
        {
            lat: 42.6972830,
            lng:   9.4508810,
            temp: 1,
            label: 'Bastia',
            draggable: false
        },
        {
            lat: 41.9192290,
            lng:   8.7386350,
            temp: 1,
            label: 'Ajaccio',
            draggable: false
        },
        {
            lat: 43.7384176,
            lng:   7.4246158,
            temp: 1,
            label: 'Monaco',
            draggable: false
        },
        {
            lat: 43.6107690,
            lng:   3.8767160,
            temp: 1,
            label: 'Montpellier',
            draggable: false
        },
        {
            lat: 43.6046520,
            lng:   1.4442090,
            temp: 1,
            label: 'Tolouse',
            draggable: false
        },
        {
            lat: 44.8377890,
            lng:  -0.5791800,
            temp: 1,
            label: 'Bordeaux',
            draggable: false
        },
        {
            lat: 47.2183710,
            lng:   -1.5536210,
            temp: 1,
            label: 'Nantes',
            draggable: false
        },
        {
            lat: 48.3903940,
            lng:   -4.4860760,
            temp: 1,
            label: 'Brest',
            draggable: false
        },
        {
            lat: 48.5734053,
            lng:   7.7521113,
            temp: 1,
            label: 'Strasbourgs',
            draggable: false
        },
        {
            lat: 50.6292500,
            lng:   3.0572560,
            temp: 1,
            label: 'Lille',
            draggable: false
        }
    ]

}
