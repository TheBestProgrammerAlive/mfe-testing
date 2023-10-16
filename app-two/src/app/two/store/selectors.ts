import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface CounterState {
  counter: number;
}
export const selectFeature = createFeatureSelector<CounterState>('counterKey')

export const selectCounter = createSelector(selectFeature, (state: CounterState) => state.counter);
