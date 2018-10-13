import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
  
  HeaderComponent,
  
  SidebarComponent,
  
  MessagesComponent,
  
  DashboardComponent]
})
export class AdminModule { }
