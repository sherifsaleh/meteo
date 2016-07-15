import { Component, OnInit, OnChanges, Input, SimpleChange} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription }   from 'rxjs/Subscription';
import { TwitterService } from '../../service/twitter.service';



@Component({
    selector: 'app-twitter',
    templateUrl: `client/components/twitter/twitter.component.html`,
    providers: [TwitterService]
})
export class TwitterComponent implements OnInit,  OnChanges{
    tweets: any[];
    @Input() cityName: string;


    constructor( private _twitterService: TwitterService ) {
    }



    ngOnInit() {
    }

    ngOnChanges ( changes: {[cityName: string] : SimpleChange} ) {
        this.tweets = this._twitterService.getTweets(this.cityName);    }


}
