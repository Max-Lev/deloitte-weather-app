import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import * as loadCitiesActions from '../actions/cities.actions';
import { GetCitiesService } from '../../services/get-cities.service';


@Injectable()
export class CitiesEffects {

  constructor(private actions$: Actions, private getCitiesService: GetCitiesService) {

  }

  loadWeathers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(loadCitiesActions.loadCitiesAction),

      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getCitiesService.getCities()
          .pipe(

            map(data => {
              console.log(data)
              return loadCitiesActions.loadCitiesActionSuccess({ payload: data })
            }),

            catchError(error => of(loadCitiesActions.loadCitiesActionError({ data: {} })))

          )
      )
    );
  });





}
