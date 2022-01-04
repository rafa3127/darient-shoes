import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesItemComponent } from './shoes-item/shoes-item.component';
import { GridShoesItemComponent } from './grid-shoes-item/grid-shoes-item.component';



@NgModule({
  declarations: [
    ShoesItemComponent, 
    GridShoesItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoesItemComponent, 
    GridShoesItemComponent
  ]
})
export class SharedComponentsModule { }
