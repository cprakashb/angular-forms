import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-location',
  templateUrl: './project-location.component.html',
  styleUrl: './project-location.component.scss'
})
export class ProjectLocationComponent {
  form = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
  ) {

  }
}
