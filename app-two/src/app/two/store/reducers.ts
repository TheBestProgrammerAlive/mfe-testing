import {createFeature, createReducer, on} from '@ngrx/store';
import { CounterActions } from './actions';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({ counter: state.counter + 1 })),
  on(CounterActions.decrement, (state) => ({ counter: state.counter - 1 })),
  on(CounterActions.reset, (_) => ({ counter: 0 }))
);

export const counterFeature = createFeature({
  name: 'counterFeature',
  reducer: counterReducer
})
