import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// TODO: check if the following import is going to work in the future
//import {Codebird} from 'codebird';
import  'codebird'; // codebird twitter api


@Injectable()
export class TwitterService {

  /*
  // https://dev.twitter.com/overview/documentation
  // https://dev.twitter.com/oauth/overview/introduction
  // https://dev.twitter.com/web/sign-in/implementing
  // https://dev.twitter.com/web/intents
  // https://dev.twitter.com/rest/public
  // https://github.com/jublonet/codebird-js
 */
  //private Codebird: any;

  private _codebirdAuthWindow: Window;
  private _twitterConfig: Object;
  private _cb: Codebird;
  private _authToken: string;
  private _arryTemp: any[] = [];


  constructor(private _http: Http) {}

  getTweets() {
    var self = this;
    var _cb = new Codebird();
    _cb.setConsumerKey('IRkI27h1sZShMApzLsmPgVtAf', 'vwbOSovZiFivpjJGoichrbEU9feP6p6cqIMz2odFB9igxXo2iv');
    _cb.setToken('118041048-BkkdDMesw6W6hhta0TGQByutOHP0gsKSOS7dRfMm', '3QrlwGn7x5N29gzDXhmj0oITEkCDkoxdTxCvyrVFElM88');


     // q=#paris #météo"
    _cb.__call(
      "search_tweets",
      "q=#météo #france",
      function tweetsFeed(reply : any, rate_limit_status : any) {
        //console.log(rate_limit_status);
        //console.log(reply);

        var theTweets = reply.statuses;
        function logArrayElements(element : string, index : number, array : any) {
          //console.log("a[" + index + "] = " + element);
          self._arryTemp.push(element);

          //console.log( element );
        }
        theTweets.forEach(logArrayElements);
      },
      true
    );
    return self._arryTemp;
  }

}
