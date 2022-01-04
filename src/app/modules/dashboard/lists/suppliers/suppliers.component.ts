import { Component, OnInit } from '@angular/core';
import { ShoesTypesService } from 'src/app/core/services/shoes-types.service';
import { SuppliersService } from 'src/app/core/services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.sass']
})
export class SuppliersComponent implements OnInit {

  list: Array<any> = []
  constructor(
    private suppliersService: SuppliersService,
    private shoesTypeService: ShoesTypesService
  ) { }

  ngOnInit() {
    this.suppliersService.getSuppliers().subscribe( res => {
      this.list = res
      this.shoesTypeService.getShoesTypes().subscribe( st => {
        this.list.map(e => {
          e.shoesType = st.filter(s => s.id == e.shoesTypeId)[0]?st.filter(s => s.id == e.shoesTypeId)[0].type: ""
        })
      })
    })}

}
