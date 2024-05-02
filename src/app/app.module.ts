import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreLoginComponent } from './components/pre-login/pre-login.component';
import { LandApplicationStepperComponent } from './components/state-owned-land-application/general/land-application-stepper/land-application-stepper.component';
import { ApplicationDetailsComponent } from './components/state-owned-land-application/general/application-details/application-details.component';
import { ContactInfoComponent } from './components/state-owned-land-application/general/contact-info/contact-info.component';
import { BillingInfoComponent } from './components/state-owned-land-application/general/billing-info/billing-info.component';
import { ProjectLocationComponent } from './components/state-owned-land-application/general/project-location/project-location.component';
import { ProjectSummaryComponent } from './components/state-owned-land-application/general/project-summary/project-summary.component';
import { QuestionsListComponent } from './components/state-owned-land-application/general/questions-list/questions-list.component';
import { ApplicationFeeComponent } from './components/state-owned-land-application/general/application-fee/application-fee.component';
import { ChecklistComponent } from './components/state-owned-land-application/checklist/checklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PreLoginComponent,
    ApplicationDetailsComponent,
    ContactInfoComponent,
    BillingInfoComponent,
    ProjectLocationComponent,
    ProjectSummaryComponent,
    QuestionsListComponent,
    ApplicationFeeComponent,
    ChecklistComponent,
    LandApplicationStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
