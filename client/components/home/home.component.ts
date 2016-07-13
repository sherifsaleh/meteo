import { Component } from "@angular/core";
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

// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}

@Component({
	directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, GOOGLE_MAPS_DIRECTIVES],
	selector: "home",
	templateUrl: `client/components/home/home.component.html`,
    styleUrls: ['client/components/home/home.component.css'],
})
export class HomeComponent {
	constructor(public http: Http) {}

    //AIzaSyCQBqWNTuOMLEao2-4BJy625u6TFKSAy_c
    // google maps zoom level
    zoom: number = 6;

    // initial center position for the map
    lat: number = 46.2276380;
    lng: number = 2.2137490;

    clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
    }

    //  pushing marker on clicked
    // mapClicked($event: MouseEvent) {
    //   this.markers.push({
    //     lat: $event.coords.lat,
    //     lng: $event.coords.lng
    //   });
    // }

    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
    }

    markers: marker[] = [
        {
            lat: 48.8566140,
            lng: 2.3522219,
            label: 'Paris',
            draggable: false
        },
        {
            lat: 45.7640430,
            lng: 4.8356590,
            label: 'Lyon',
            draggable: false
        },
        {
            lat: 43.2964820,
            lng:   5.3697800,
            label: 'Marseille',
            draggable: false
        },
        {
            lat: 42.6972830,
            lng:   9.4508810,
            label: 'Bastia',
            draggable: false
        },
        {
            lat: 41.9192290,
            lng:   8.7386350,
            label: 'Ajaccio',
            draggable: false
        },
        {
            lat: 43.7384176,
            lng:   7.4246158,
            label: 'Monaco',
            draggable: false
        },
        {
            lat: 43.6107690,
            lng:   3.8767160,
            label: 'Montpellier',
            draggable: false
        },
        {
            lat: 43.6046520,
            lng:   1.4442090,
            label: 'Tolouse',
            draggable: false
        },
        {
            lat: 44.8377890,
            lng:  -0.5791800,
            label: 'Bordeaux',
            draggable: false
        },
        {
            lat: 47.2183710,
            lng:   -1.5536210,
            label: 'Nantes',
            draggable: false
        },
        {
            lat: 48.3903940,
            lng:   -4.4860760,
            label: 'Brest',
            draggable: false
        },
        {
            lat: 48.5734053,
            lng:   7.7521113,
            label: 'Strasbourgs',
            draggable: false
        },
        {
            lat: 50.6292500,
            lng:   3.0572560,
            label: 'Lille',
            draggable: false
        }
    ]

}
