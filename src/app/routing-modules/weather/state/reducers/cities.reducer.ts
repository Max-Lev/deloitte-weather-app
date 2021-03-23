import { Action, createReducer, on } from '@ngrx/store';
import * as citiesActions from '../actions/cities.actions';

export const citiesFeatureKey = 'citiesState';

export interface CitiesState {
  cityName: string;
  temp: string;
  tempType?: string;
};

export const initialState: CitiesState = {
  cityName: null,
  temp: null,
  tempType: null
};

export const addState: CitiesState = {
  cityName: null,
  temp: null,
  tempType: null
};

export const citiesReducer = createReducer(
  initialState,

  // on(citiesActions.loadCitiesAction, (state) => {
  //   // console.log(`${citiesActions.loadCitiesAction}`, state);
  //   return state;
  // }),
  // on(citiesActions.loadCitiesActionSuccess, (state, action) => {
  //   console.log(citiesActions.loadCitiesActionSuccess, state, action);

  //   return {
  //     // ...state
  //   };
  // }),
  on(citiesActions.addCityAction, (state, action) => state),

);

