import { Component, OnInit, Input, OnDestroy} from '@angular/core';
//import { Observable } from 'rxjs/Rx';
import { Subscription }   from 'rxjs/Subscription';
import { TwitterService } from '../../service/twitter.service';



@Component({
    selector: 'app-twitter',
    templateUrl: `client/components/twitter/twitter.component.html`,
    providers: [TwitterService]
})
export class TwitterComponent implements OnInit, OnDestroy{
    //customers: Observable<any>;
    //tweets: Promise<any>;
    tweets: any[];

    @Input() astronaut: string;
      mission = '<no mission announced>';
      confirmed = false;
      announced = false;
      subscription: Subscription;


    constructor( private _twitterService: TwitterService ) {
        this.subscription = _twitterService.missionAnnounced$.subscribe(
          mission => {
            this.mission = mission;
            this.announced = true;
            this.confirmed = false;
        });
    }

    confirm() {
      this.confirmed = true;
      this._twitterService.confirmMission(this.astronaut);
    }

    ngOnInit() {
        this.tweets = this._twitterService.getTweets();

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
