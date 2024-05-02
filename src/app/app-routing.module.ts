import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreLoginComponent } from './components/pre-login/pre-login.component';
import { LandApplicationStepperComponent } from './components/state-owned-land-application/general/land-application-stepper/land-application-stepper.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'pre-login', component: PreLoginComponent },
  { path: 'lands-application', component: LandApplicationStepperComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
