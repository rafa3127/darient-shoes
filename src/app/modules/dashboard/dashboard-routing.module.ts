import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateShoesComponent } from './create-shoes/create-shoes.component';
import { DashboardComponent } from './dashboard.component';
import { SellersComponent } from './lists/sellers/sellers.component';
import { StoresComponent } from './lists/stores/stores.component';
import { SuppliersComponent } from './lists/suppliers/suppliers.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { UpdateShoesComponent } from './update-shoes/update-shoes.component';


const routes: Routes = [
  { path: 'shoes', component: DashboardComponent, children:[
    { path: 'shoes-list', component: ShoesListComponent },
    { path: 'create', component: CreateShoesComponent},
    { path: 'update/:id', component: UpdateShoesComponent },
    { path: '**', redirectTo: 'shoes-list',  pathMatch: 'full'},
    { path: '', redirectTo: 'shoes-list',  pathMatch: 'full'},
  ] },
  { path: 'stores', component: DashboardComponent, children:[
    { path: 'list', component: StoresComponent },
    { path: '**', redirectTo: 'list',  pathMatch: 'full'},
    { path: '', redirectTo: 'list',  pathMatch: 'full'},
  ] },
  { path: 'sellers', component: DashboardComponent, children:[
    { path: 'list', component: SellersComponent },
    { path: '**', redirectTo: 'list',  pathMatch: 'full'},
    { path: '', redirectTo: 'list',  pathMatch: 'full'},
  ] },
  { path: '', redirectTo: 'shoes', pathMatch: 'full'},
  { path: 'suppliers', component: DashboardComponent, children:[
    { path: 'list', component: SuppliersComponent },
    { path: '**', redirectTo: 'list',  pathMatch: 'full'},
    { path: '', redirectTo: 'list',  pathMatch: 'full'},
  ] },
  { path: '', redirectTo: 'shoes', pathMatch: 'full'},
  { path: '**', redirectTo: 'shoes',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
