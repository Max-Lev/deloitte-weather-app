import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { citiesReducer, CitiesState } from '../routing-modules/weather/state/reducers/cities.reducer';


export interface AppState {
  citiesState: CitiesState
}

export const reducers: ActionReducerMap<AppState> = {
  citiesState: citiesReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
