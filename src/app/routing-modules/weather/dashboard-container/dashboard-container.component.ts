import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CitiesState } from '../state/reducers/cities.reducer';

@Component({
  selector: 'app-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, AfterViewInit {

  citiesForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private citiesState: Store<CitiesState>) {
    this.initForm();
    console.log(this.citiesState);

    // this.citiesState.pipe(select(state=>state.))

    this.citiesState.subscribe((state) => {
      console.log(state);
    })

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.citiesForm.valueChanges.subscribe((value: any) => {
      console.log(value);
      console.log(this.citiesForm);
    })
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
    const cities = this.citiesForm.get('citiesFormArray') as FormArray
    cities.push(this.createFormGroup());
  }

}
