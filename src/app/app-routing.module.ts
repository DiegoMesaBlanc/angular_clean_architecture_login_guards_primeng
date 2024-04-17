import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from './core/guards/is-logged-in.guard';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'autenticacion',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/back-office/back-office.module').then(m => m.BackOfficeModule),
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
