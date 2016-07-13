/// <reference path="../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Type, enableProdMode, provide } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  GOOGLE_MAPS_PROVIDERS,
  GOOGLE_MAPS_DIRECTIVES,
  LazyMapsAPILoaderConfig
} from 'angular2-google-maps/core';

enableProdMode();

import { AppComponent } from "./components/app.component";
import { APP_ROUTER_PROVIDERS } from "./routes";

bootstrap(<Type>AppComponent, [
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
    GOOGLE_MAPS_PROVIDERS,
      provide(LazyMapsAPILoaderConfig, {useFactory: () => {
          let config = new LazyMapsAPILoaderConfig();
          config.apiKey = 'AIzaSyCQBqWNTuOMLEao2-4BJy625u6TFKSAy_c';
          return config;
        }})
]);
