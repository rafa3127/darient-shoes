import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { CreateShoesComponent } from './create-shoes/create-shoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateShoesComponent } from './update-shoes/update-shoes.component';
import { SearchComponent } from './search/search.component';
import { StoresComponent } from './lists/stores/stores.component';
import { SellersComponent } from './lists/sellers/sellers.component';
import { SuppliersComponent } from './lists/suppliers/suppliers.component';


@NgModule({
  declarations: [DashboardComponent, SideBarComponent, ShoesListComponent, CreateShoesComponent, UpdateShoesComponent, SearchComponent, StoresComponent, SellersComponent, SuppliersComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
