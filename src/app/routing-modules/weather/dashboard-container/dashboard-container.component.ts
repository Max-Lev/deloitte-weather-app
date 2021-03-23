import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { loadCitiesAction } from '../state/actions/cities.actions';
import { CitiesState } from '../state/reducers/cities.reducer';

@Component({
  selector: 'app-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, AfterViewInit {

  citiesForm: FormGroup;

  // constructor(private formBuilder: FormBuilder, private citiesState: Store<CitiesState>) {
  constructor(private formBuilder: FormBuilder, private citiesState: Store<AppState>) {
    this.initForm();

    this.citiesState.pipe(select(state => state.citiesOptionsState)).subscribe((optionsState) => {
      console.log(optionsState)
    })

    this.citiesState.subscribe((state) => {
      console.log('state: ', state);
    });


  }

  ngOnInit(): void {
    this.citiesState.dispatch(loadCitiesAction());
  }

  ngAfterViewInit(): void {

    this.citiesForm.valueChanges.subscribe((value: any) => {

    });

  };

  initForm() {
    this.citiesForm = this.formBuilder.group({
      citiesFormArray: this.formBuilder.array([this.createFormGroup()])
    });
    console.log(this.citiesForm);
  };

  createFormGroup(): FormGroup {

    return new FormGroup({
      cityCntrl: new FormControl('', [Validators.required])
    });

  };

  public addCityFormGroup() {
    const cities: FormArray = this.citiesForm.get('citiesFormArray') as FormArray;
    cities.push(this.createFormGroup());
  }

}
