import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SellersService } from 'src/app/core/services/sellers.service';
import { SexesService } from 'src/app/core/services/sexes.service';
import { ShoesService } from 'src/app/core/services/shoes.service';
import { StoresService } from 'src/app/core/services/stores.service';
import { SuppliersService } from 'src/app/core/services/suppliers.service';

@Component({
  selector: 'app-create-shoes',
  templateUrl: './create-shoes.component.html',
  styleUrls: ['./create-shoes.component.sass']
})
export class CreateShoesComponent implements OnInit {
  form: FormGroup
  loading: boolean = false
  errorMSG: string | null = null
  sexesList: Array<any> =[]
  storesList: Array<any> = []
  suppliersList: Array<any> = []
  sellersList: Array<any> = []
  constructor(
    public fb: FormBuilder,
    private shoesService: ShoesService,
    private ngZone:NgZone,
    private router: Router,
    private sexesService: SexesService,
    private storesService: StoresService,
    private suppliersService: SuppliersService,
    private sellersService: SellersService
  ) {
    this.form = fb.group({})
  }

  ngOnInit() {
    this.sexesService.getSexes().subscribe(res => {
      this.sexesList = res
    })
    this.storesService.getStores().subscribe( res => {
      this.storesList = res
    })
    this.suppliersService.getSuppliers().subscribe( res => {
      this.suppliersList = res
    })
    this.sellersService.getSellers().subscribe( res => {
      this.sellersList = res
    })
    this.form = this.createForm()
  }


  createForm():FormGroup{
    var form:any = this.fb.group({
      color: ['',Validators.compose([
        Validators.required,
      ])],
      size: [0,Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]*")
      ])],
      brand: ['',Validators.compose([
        Validators.required
      ])],
      frontImage: [''],
      sideImage: [''],
      backImage: [''],
      sexId: ['',Validators.compose([
        Validators.required
      ])],
      storeId: ['',Validators.compose([
        Validators.required
      ])],
      supplierId: ['',Validators.compose([
        Validators.required
      ])],
      sellerId: ['',Validators.compose([
        Validators.required
      ])],
      quantity: [0,Validators.compose([
        Validators.required,
        Validators.pattern("[0-9.]*")
      ])],
      price: [0,Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]*")
      ])],
      
    })
    return form
  }

  create(){
    this.loading = true
    if(this.form.valid){
      const shoes =       
      {
        "color":this.form.value.color,
        "size": parseFloat(this.form.value.size),
        "frontImage":this.form.value.frontImage,
        "sideImage": this.form.value.sideImage,
        "backImage": this.form.value.backImage,
        "sexId":  parseInt(this.form.value.sexId),
        "storeId": parseInt(this.form.value.storeId),
        "sellerId":parseInt(this.form.value.sellerId),
        "supplierId":parseInt(this.form.value.supplierId),
        "quantity": parseInt(this.form.value.quantity),
        "brand": this.form.value.brand,
        "price": parseFloat(this.form.value.price)
      }
      this.shoesService.createShoes(shoes).subscribe( res =>{
        this.loading=false
        this.router.navigate["dashboard"]
      }, err =>{
        this.loading=false
        this.errorMSG = "Hubo un error inesperado en el servidor. Intente de nuevo más tarde"
      })
    }else{
      this.loading = false
      this.errorMSG = "Ha ocurrido un error. Revise los datos e intente nuevamente."
    }
  }

}
