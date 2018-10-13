import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component: AdminComponent,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
        { path: 'dashboard', component: DashboardComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
