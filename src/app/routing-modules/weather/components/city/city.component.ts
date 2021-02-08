import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit, OnChanges {

  @Input() form?: FormGroup;

  constructor() { }

  ngOnInit(): void {

  };

  ngOnChanges(changes: SimpleChanges): void {

  };

}
