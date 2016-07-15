import { Injectable, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
//import {Subscription} from 'rxjs/Subscription';
import { Subject }    from 'rxjs/Subject';



// TODO: check if the following import is going to work in the future
//import {Codebird} from 'codebird';
import 'codebird'; // codebird twitter api


@Injectable()
export class TwitterService implements OnInit {
    /*
    // https://dev.twitter.com/overview/documentation
    // https://dev.twitter.com/oauth/overview/introduction
    // https://dev.twitter.com/web/sign-in/implementing
    // https://dev.twitter.com/web/intents
    // https://dev.twitter.com/rest/public
    // https://github.com/jublonet/codebird-js
   */


    private consumer_key = 'IRkI27h1sZShMApzLsmPgVtAf';
    private consumer_secret = 'vwbOSovZiFivpjJGoichrbEU9feP6p6cqIMz2odFB9igxXo2iv'
    private access_token_key = '118041048-BkkdDMesw6W6hhta0TGQByutOHP0gsKSOS7dRfMm';
    private access_token_secret = '3QrlwGn7x5N29gzDXhmj0oITEkCDkoxdTxCvyrVFElM88';

    private _codebirdAuthWindow: Window;
    private _twitterConfig: Object;
    private _cb: Codebird;
    private _authToken: string;
    private _tweetsReturnedArray: any[] = [];
    private _tweets: any[] = [];


    constructor(private _http: Http) { }

    ngOnInit() {
    }

    getTweets(city: string) {
        var self = this;
        var _cb = new Codebird();

        _cb.setConsumerKey(this.consumer_key, this.consumer_secret);
        _cb.setToken(this.access_token_key, this.access_token_secret);

        function pushTweet(element: string, index: number, array: any) {
            self._tweetsReturnedArray.push(element);
        }

        _cb.__call(
            "search_tweets",
            'q=#météo #' + city,
            function tweetsFeed(reply: any, rate_limit_status: any) {
                var theTweets = reply.statuses;

                // check if array is not empty so empty it
                if( self._tweetsReturnedArray.length) {
                    // empty array
                    self._tweetsReturnedArray.length = 0;
                    // push new elements to array
                    theTweets.forEach(pushTweet);
                }else {
                    // if array is empty push new elements directly
                    theTweets.forEach(pushTweet);
                }
            },
            true
        );

        return self._tweetsReturnedArray;

    }

}
