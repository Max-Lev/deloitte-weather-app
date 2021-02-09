import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import * as WeatherActions from '../actions/cities.actions';


@Injectable()
export class WeatherEffects {

  // loadWeathers$ = createEffect(() => {
  //   return this.actions$.pipe( 

  //     ofType(WeatherActions.addCity),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(data => WeatherActions.citySelected({ data })),
  //         catchError(error => of(WeatherActions.citySelected({ error }))))
  //     )
  //   );
  // });



  constructor(private actions$: Actions) {}

}
