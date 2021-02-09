import { Action, createReducer, on } from '@ngrx/store';
import * as WeatherActions from '../actions/cities.actions';

export const citiesFeatureKey = 'citiesState';

export interface CitiesState {
  cityName: string;
  temp: string;
  tempType?: string;
};

export const initialState: CitiesState = {
  cityName: null,
  temp: null
};

export const addState: CitiesState = {
  cityName: null,
  temp: null
};




export const citiesReducer = createReducer(
  initialState,

  on(WeatherActions.citiesInitial, state => state),
  on(WeatherActions.citySelected, (state, action) => state),
  on(WeatherActions.citiesAdd, (state, action) => state),

);

