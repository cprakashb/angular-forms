import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-location',
  templateUrl: './project-location.component.html',
  styleUrl: './project-location.component.scss'
})
export class ProjectLocationComponent {
  form = this._formBuilder.group({
    sizeOfArea: ['', Validators.required],
    unit: ['', Validators.required],
    physicalAddress: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    subDivision: ['', Validators.required],
    section: ['', Validators.required],
    township: ['', Validators.required],
    range: ['', Validators.required]
  });


  units = [{
    key: 'Square Feet',
    value: 'sq.ft'
  }, {
    key: 'Square Meters',
    value: 'sq.mtrs'
  },
  {
    key: 'Acres',
    value: 'acres'
  },
  {
    key: 'hectares',
    value: 'hectares'
  }]

  constructor(
    private _formBuilder: FormBuilder,
  ) {

  }
}
