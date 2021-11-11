import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription } from "rxjs";

import { LoadScreenService } from './../../services/load-screen/load-screen.service';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 149, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 149, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 149, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 149, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LoadingScreenComponent implements OnInit {

  loading: boolean = false;
  loadingSubscription: Subscription;

  constructor(private _loadService: LoadScreenService) { }

  load(){
    return this._loadService;
  }

  ngOnInit() {
    this.loadingSubscription = this.load().loadingStatus.subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
