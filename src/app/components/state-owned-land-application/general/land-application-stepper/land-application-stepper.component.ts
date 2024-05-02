import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicationDetailsComponent } from '../application-details/application-details.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { BillingInfoComponent } from '../billing-info/billing-info.component';


@Component({
  selector: 'app-land-application-stepper',
  templateUrl: './land-application-stepper.component.html',
  styleUrl: './land-application-stepper.component.scss'
})
export class LandApplicationStepperComponent {

  @ViewChild(ApplicationDetailsComponent, { static: true }) applicationDetails?: ApplicationDetailsComponent;

  @ViewChild(ContactInfoComponent, { static: true }) contactInfo?: ContactInfoComponent;

  @ViewChild(BillingInfoComponent, { static: true }) billingInfo?: BillingInfoComponent;



  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  get applicationDetailsForm(): FormGroup {
    if (!this.applicationDetails) {
      throw new Error('StepOneComponent is not initialized');
    }
    return this.applicationDetails.form;
  }

  get contactInfoForm(): FormGroup {
    if (!this.contactInfo) {
      throw new Error('StepOneComponent is not initialized');
    }
    return this.contactInfo.form;
  }


  submit(){
    console.log(this.applicationDetails?.form.value);
    console.log(this.contactInfo?.form.value);


  }


}
