import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../..//shared/components/dashboard/dashboard.component';
import { rolesGuard } from './../../core/guards/has-role.guard';
import { BackOfficeLayoutComponent } from './back-office-layout/back-office-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        canActivate: [rolesGuard],
        // canDeactivate: [rolesGuard],
        // canMatch: [rolesGuard],
        data: { allowedRoles: ['Inventory', 'Manager'] }
      },
      {
        path: 'usuarios/man-city',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        canActivate: [rolesGuard],
        // canDeactivate: [rolesGuard],
        // canMatch: [rolesGuard],
        data: { allowedRoles: ['Orders', 'Manager'] }
      },
      {
        path: 'usuarios/real-madrid',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        canActivate: [rolesGuard],
        // canDeactivate: [rolesGuard],
        // canMatch: [rolesGuard],
        data: { allowedRoles: ['Accounting', 'Manager'] }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
