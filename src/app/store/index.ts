import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CitiesOptionsState, cityOptionsReducer } from '../routing-modules/weather/state/reducers/cities-options.reducer';
import { citiesReducer, CitiesState } from '../routing-modules/weather/state/reducers/cities.reducer';


export interface AppState {
  citiesState: CitiesState,
  citiesOptionsState: CitiesOptionsState
}

export const reducers: ActionReducerMap<AppState> = {
  citiesState: citiesReducer,
  citiesOptionsState: cityOptionsReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
