import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';


const routes: Routes = [
  { path: 'auth', component: LoginComponent},
  // { path: 'auth', loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)},
  { path: '**', redirectTo: 'auth',  pathMatch: 'full'},
  { path: '', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
