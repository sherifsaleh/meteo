import { Component } from "@angular/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

import { GmapComponent } from "../gmap/gmap.component";



@Component({
	selector: "home",
	templateUrl: `client/components/home/home.component.html`,
    styleUrls: ['client/components/home/home.component.css'],
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, GmapComponent]
})
export class HomeComponent {
	constructor(public http: Http) {}
}
