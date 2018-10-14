import { AuthGuard } from './../shared/guard/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient/patient.component';
import { RequesterComponent } from './requester/requester/requester.component';
import { EmergencyContactComponent } from './emergencyContact/emergency-contact/emergency-contact.component';
import { AllergyTypeComponent } from './allergyType/allergy-type/allergy-type.component';
import { PatientNewComponent } from './patient/patient-new/patient-new.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patient', component: PatientComponent },
      { path: 'patient/new', component: PatientNewComponent },
      { path: 'requester', component: RequesterComponent },
      { path: 'emergencyContact', component: EmergencyContactComponent },
      { path: 'allergyType', component: AllergyTypeComponent }
      // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      // { path: 'forms', loadChildren: './form/form.module#FormModule' },
      // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
      // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
      // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
      // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
