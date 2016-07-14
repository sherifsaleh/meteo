import { Injectable, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
//import {Subscription} from 'rxjs/Subscription';
import { Subject }    from 'rxjs/Subject';



// TODO: check if the following import is going to work in the future
//import {Codebird} from 'codebird';
import 'codebird'; // codebird twitter api


@Injectable()
export class TwitterService implements  OnInit{

    cityTag: any = 'france'; // Clicked marker city name from the gmap component



    // Observable string sources
    private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();
    // Observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();
    // Service message commands
    announceMission(mission: string) {
      this.missionAnnouncedSource.next(mission);
    }
    confirmMission(astronaut: string) {
      this.missionConfirmedSource.next(astronaut);
    }



    /*
    // https://dev.twitter.com/overview/documentation
    // https://dev.twitter.com/oauth/overview/introduction
    // https://dev.twitter.com/web/sign-in/implementing
    // https://dev.twitter.com/web/intents
    // https://dev.twitter.com/rest/public
    // https://github.com/jublonet/codebird-js
   */
    private _codebirdAuthWindow: Window;
    private _twitterConfig: Object;
    private _cb: Codebird;
    private _authToken: string;
    private _arryTemp: any[] = [];


    constructor(private _http: Http) { }

    ngOnInit() {
    }

    ngOnChanges() : void {

    }




    getTweets() {
        var self = this;
        var _cb = new Codebird();
        _cb.setConsumerKey('IRkI27h1sZShMApzLsmPgVtAf', 'vwbOSovZiFivpjJGoichrbEU9feP6p6cqIMz2odFB9igxXo2iv');
        _cb.setToken('118041048-BkkdDMesw6W6hhta0TGQByutOHP0gsKSOS7dRfMm', '3QrlwGn7x5N29gzDXhmj0oITEkCDkoxdTxCvyrVFElM88');

        _cb.__call(
            "search_tweets",
            'q=#météo #' + this.cityTag,
            function tweetsFeed(reply: any, rate_limit_status: any) {
                var theTweets = reply.statuses;
                function logArrayElements(element: string, index: number, array: any) {
                    self._arryTemp.push(element);
                }
                theTweets.forEach(logArrayElements);
            },
            true
        );

        return self._arryTemp;
    }

}
