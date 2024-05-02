import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrl: './billing-info.component.scss'
})
export class BillingInfoComponent {
  form = this._formBuilder.group({
    givenName: ['', Validators.required],
    middleName: ['', Validators.required],
    surname: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.required],
    country: ['', Validators.required],
    homePhone: ['', Validators.required],
    busPhone: ['', Validators.required],
    email: ['', Validators.required],
    preferredMethodOfContact: ['', Validators.required]
  });


  constructor(
    private _formBuilder: FormBuilder,
  ) {

  }
}
