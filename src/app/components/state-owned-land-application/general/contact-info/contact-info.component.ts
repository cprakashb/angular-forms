import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  form = this._formBuilder.group({
    givenName: ['', Validators.required],
    middleName: ['', Validators.required],
    surname: ['', Validators.required],
    inCorpName: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.required],
    country: ['', Validators.required],
    homePhone: ['', Validators.required],
    busPhone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    preferredMethodOfContact: ['', Validators.required]
  });

  constructor(
    private _formBuilder: FormBuilder,
  ) {

  }
}
