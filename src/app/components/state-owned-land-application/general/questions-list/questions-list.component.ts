import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.scss'
})
export class QuestionsListComponent {
  form = this._formBuilder.group({
    authCompleted: ['', Validators.required],
    authCompletedComments: [''],

    copyOfAuthorizations: ['', Validators.required],
    copyOfAuthorizationsComments: [''],

    deniedApproval: ['', Validators.required],
    deniedApprovalComments: [''],

    recreationalPurpose: ['', Validators.required],
    recreationalPurposeComments: [''],
  });
  authOptions: string[] = ['Yes', 'No', 'Unknown'];
  options: string[] = ['Yes', 'No'];

  constructor(
    private _formBuilder: FormBuilder,
  ) {

  }


}
