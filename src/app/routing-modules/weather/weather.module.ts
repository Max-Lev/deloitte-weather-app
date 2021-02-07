import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherRoutesModule } from './weather-routes.module';



@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutesModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class WeatherModule {
  constructor() {
    console.log('WeatherModule')
  }
}
