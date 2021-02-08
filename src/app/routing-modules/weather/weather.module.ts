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
    MatIconModule
  ]
})
export class WeatherModule {

}
