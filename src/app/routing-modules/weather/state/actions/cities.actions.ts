import { createAction, props } from '@ngrx/store';
import { ICity } from '../../models/city.model';

export const citiesInitial = createAction(
  '[Cities] Add Initial'
);

export const citySelectedAction = createAction(
  '[Cities] City Selected',
  props<{ error: any }>()
);

export const addCityAction = createAction(
  '[Cities] Add City',
  props<{ data: any }>()
);


export const loadCitiesAction = createAction(
  '[CitiesList] Load Cities List'
);

export const loadCitiesActionSuccess = createAction(
  '[CitiesList] Load Cities List Success',
  props<{ payload: ICity[] }>()
);

export const loadCitiesActionError = createAction(
  '[CitiesList] Load Cities List Error',
  props<{ data: any }>()
);
