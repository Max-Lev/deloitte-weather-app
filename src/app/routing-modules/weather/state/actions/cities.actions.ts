import { createAction, props } from '@ngrx/store';

export const citiesInitial = createAction(
  '[Cities] Add City'
);

export const citiesAdd = createAction(
  '[Cities] Add City',
  props<{ data: any }>()
);

export const citySelected = createAction(
  '[Cities] City Selected',
  props<{ error: any }>()
);
