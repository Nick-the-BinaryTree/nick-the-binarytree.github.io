import { Injectable, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';

import { fromEvent, merge, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { GOTO_BIO_PAGE, GOTO_CONNECT_PAGE } from './actions';
import { IAppState, PAGE } from './store';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  @select() page$: Observable<string>;
  pageChange: Subscription;
  pageString: PAGE;
  userAction: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>) {
        this.pageChange = this.page$.subscribe((x: PAGE) => {this.pageString = x});
        
        const keyUp$ = fromEvent(document.body, 'keyup');
        const mouseClick$ = fromEvent(document.body, 'click');
        const touch$ = fromEvent(document.body, 'touchend');

        this.userAction = merge(keyUp$, mouseClick$, touch$)
          .pipe(debounceTime(500))
          .subscribe((e: any) => {
            if (this.pageString === PAGE.LANDING) {
              this.ngRedux.dispatch({type: GOTO_BIO_PAGE});
            } else {
              this.ngRedux.dispatch({type: GOTO_CONNECT_PAGE});
            }
          });
  }

  ngOnDestroy() {
    this.pageChange.unsubscribe();
    this.userAction.unsubscribe();
  }
}