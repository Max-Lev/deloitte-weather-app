import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit,AfterViewInit {

  citiesForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
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
