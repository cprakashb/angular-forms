import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrl: './project-summary.component.scss'
})
export class ProjectSummaryComponent {
  form = this._formBuilder.group({
    summary: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
  ) {

  }
}
