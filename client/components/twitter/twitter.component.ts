import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TwitterService } from './twitter.service';


@Component({
    selector: 'app-twitter',
    templateUrl: `client/components/twitter/twitter.component.html`,
    providers: [TwitterService]
})
export class TwitterComponent implements OnInit {
    //customers: Observable<any>;
    //tweets: Promise<any>;
    tweets: any[];


    constructor( private _twitterService: TwitterService ) { }

    ngOnInit() {
        this.tweets = this._twitterService.getTweets();
    }

}
