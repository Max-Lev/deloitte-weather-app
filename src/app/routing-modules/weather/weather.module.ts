import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherRoutesModule } from './weather-routes.module';
import { CityComponent } from './components/city/city.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './state/effects/weather.effects';
import { StoreModule } from '@ngrx/store';
import { citiesFeatureKey, citiesReducer } from './state/reducers/cities.reducer';


@NgModule({
  declarations: [
    DashboardContainerComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutesModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    // EffectsModule.forFeature([WeatherEffects]),
    StoreModule.forFeature(citiesFeatureKey, { citiesReducer: citiesReducer })
  ]
})
export class WeatherModule {

}
