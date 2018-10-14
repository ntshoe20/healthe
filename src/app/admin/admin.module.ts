import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

import { EnumPipe } from './shared/pipes/enum.pipe';
import { PatientComponent } from './patient/patient/patient.component';
import { RequesterComponent } from './requester/requester/requester.component';
import { PatientDataRequestComponent } from './patientDataRequest/patient-data-request/patient-data-request.component';
import { EmergencyContactComponent } from './emergencyContact/emergency-contact/emergency-contact.component';
import { AllergyTypeComponent } from './allergyType/allergy-type/allergy-type.component';
import { MessageComponent } from './components/messages/message/message.component';
import { PatientNewComponent } from './patient/patient-new/patient-new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    MessageComponent, 
    DashboardComponent, 
    SidebarComponent, 
    HeaderComponent, 
    EnumPipe,
    PatientComponent,
    RequesterComponent,
    PatientDataRequestComponent,
    EmergencyContactComponent,
    AllergyTypeComponent,
    PatientNewComponent,
    
  ]
})
export class AdminModule { }
