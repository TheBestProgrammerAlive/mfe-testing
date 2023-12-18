import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterActions } from './store/actions';
import { counterFeature } from './store/reducers';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent {
  count$: Observable<number>;
  constructor(private readonly store: Store) {
    this.count$ = store.select(counterFeature.selectCounter);
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
  onYolo() {
    this.store.select(counterFeature.selectCounter).subscribe(console.log);
  }
}
