import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounter } from './store/selectors';
import { Observable } from 'rxjs';
import { CounterActions } from './store/actions';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent {
  count$: Observable<number>;
  constructor(private readonly store: Store) {
    this.count$ = store.select(selectCounter);
  }
  onIncr() {
    this.store.dispatch(CounterActions.increment());
  }
  onDecr() {
    this.store.dispatch(CounterActions.decrement());
  }
  onReset() {
    this.store.dispatch(CounterActions.reset());
  }
}
