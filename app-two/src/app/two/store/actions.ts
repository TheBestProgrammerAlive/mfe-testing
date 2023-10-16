import {createAction, createActionGroup, emptyProps} from '@ngrx/store';

// export const increment = createAction('[Counter] Increment');
// export const decrement = createAction('[Counter] Decrement');
// export const reset = createAction('[Counter] Reset');

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    'Increment': emptyProps(),
    'Decrement': emptyProps(),
    'Reset': emptyProps(),

  }
})
