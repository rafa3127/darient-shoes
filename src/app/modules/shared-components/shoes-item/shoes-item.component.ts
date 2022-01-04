import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SellersService } from 'src/app/core/services/sellers.service';
import { SexesService } from 'src/app/core/services/sexes.service';
import { ShoesService } from 'src/app/core/services/shoes.service';
import { StoresService } from 'src/app/core/services/stores.service';
import { SuppliersService } from 'src/app/core/services/suppliers.service';

@Component({
  selector: 'app-shoes-item',
  templateUrl: './shoes-item.component.html',
  styleUrls: ['./shoes-item.component.sass']
})
export class ShoesItemComponent implements OnInit {
  @Input() shoes: any = {}
  @Output() deleteEmmiter: EventEmitter<any> = new EventEmitter<any>()
  loading: boolean = false
  sex: any = ""
  store: any = ""
  supplier: any = ""
  seller: any = ""
  sexesList: Array<any> =[]
  storesList: Array<any> = []
  suppliersList: Array<any> = []
  sellersList: Array<any> = []
  constructor(
    private shoesService: ShoesService,
    private sexesService: SexesService,
    private storesService: StoresService,
    private suppliersService: SuppliersService,
    private sellersService: SellersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sexesService.getSexes().subscribe(res => {
      this.sexesList = res
      this.getSexByID(this.shoes.sexId)
    })
    this.storesService.getStores().subscribe( res => {
      this.storesList = res
      this.getStoreByID(this.shoes.storeId)
    })
    this.suppliersService.getSuppliers().subscribe( res => {
      this.suppliersList = res
      this.getSupplierByID(this.shoes.supplierId)
    })
    this.sellersService.getSellers().subscribe( res => {
      this.sellersList = res
      this.getSellerByID(this.shoes.sellerId)
    })
  }

  getSexByID(id: number){
    this.sex = this.sexesList.filter( s => s.id == id)[0]? this.sexesList.filter( s => s.id == id)[0] : ""
  }

  getStoreByID(id: number){
    this.store = this.storesList.filter( s => s.id == id)[0]? this.storesList.filter( s => s.id == id)[0] : ""
  }

  getSupplierByID(id: number){
    this.supplier = this.suppliersList.filter( s => s.id == id)[0]? this.suppliersList.filter( s => s.id == id)[0] : ""
  }

  getSellerByID(id: number){
    this.seller = this.sellersList.filter( s => s.id == id)[0]? this.sellersList.filter( s => s.id == id)[0] : ""
  }

  delete(id:number){
    this.loading = true
    this.shoesService.deleteShoesById(id).subscribe( res => {
      this.deleteEmmiter.emit(id.toString())
    })
  }

  openUpdate(id: number){
    this.router.navigateByUrl('dashboard/shoes/update/'+id.toString())
  }
}
