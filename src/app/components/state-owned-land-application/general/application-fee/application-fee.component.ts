import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-fee',
  templateUrl: './application-fee.component.html',
  styleUrl: './application-fee.component.scss'
})
export class ApplicationFeeComponent {
  form = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
  ) {

  }
}
