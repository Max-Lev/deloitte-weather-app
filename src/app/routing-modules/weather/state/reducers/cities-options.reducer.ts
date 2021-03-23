import { Action, createReducer, on } from '@ngrx/store';
import { ICity } from '../../models/city.model';
import * as loadCitiesActions from '../actions/cities.actions';

export const citiesOptionsFeatureKey = 'citiesOptions';

export interface CitiesOptionsState {
  listOfCities: ICity[];
};
export const initialState: CitiesOptionsState = {
  listOfCities: []
};
export const optionsLoaded: CitiesOptionsState = {
  listOfCities: []
};

export const cityOptionsReducer = createReducer(
  initialState,
  on(loadCitiesActions.loadCitiesActionSuccess, (state, action) => {
    console.log('success: ', state, action)
    return {
      ...state,
      listOfCities: action.payload
    }
  }),
  on(loadCitiesActions.loadCitiesActionError, (state) => {
    return {
      ...state,
      listOfCities: []
    }
  })
);

