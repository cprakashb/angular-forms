import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.scss'
})
export class ApplicationDetailsComponent {
  form = this._formBuilder.group({
    category: ['', Validators.required],
    typeOfApplication: ['', Validators.required],
    applicationNumber: [''],
    submissionDate: [''],
    proposedStartDate: [''],
    proposedCompletionDate: [''],
  });

  applicationTypes = [{
    key: 'Permit',
    value: 'permit'
  }, {
    key: 'Lease',
    value: 'lease'
  },
  {
    key: 'Easement',
    value: 'easement'
  },
  {
    key: 'Property of Purchase',
    value: 'property_of_purchase'
  },
  {
    key: 'License',
    value: 'license'
  }]

  constructor(
    private _formBuilder: FormBuilder,
  ) {

  }
}
