import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWeather from '../reducers/cities.reducer';

export const selectWeatherState = createFeatureSelector<fromWeather.CitiesState>(
  fromWeather.citiesFeatureKey
);
