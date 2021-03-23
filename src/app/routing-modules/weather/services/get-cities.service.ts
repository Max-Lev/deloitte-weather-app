import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ICity } from '../models/city.model';
@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {

  constructor(private httpClient: HttpClient) { }

  getCities(): Observable<ICity[]> {
    return this.httpClient.get<ICity[]>(environment.citiesUrl);
  }

}
