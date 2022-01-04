import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './modules/auth/login/login.component';


const routes: Routes = [
  { path: 'auth', component: LoginComponent},
  { path: 'dashboard', 
  loadChildren: () => import("./modules/dashboard/dashboard.module")
  .then(m => m.DashboardModule),
  canActivateChild : [AuthGuard],
},
  { path: '**', redirectTo: 'dashboard',  pathMatch: 'full'},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
