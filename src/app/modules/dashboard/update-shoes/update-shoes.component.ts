import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SellersService } from 'src/app/core/services/sellers.service';
import { SexesService } from 'src/app/core/services/sexes.service';
import { ShoesService } from 'src/app/core/services/shoes.service';
import { StoresService } from 'src/app/core/services/stores.service';
import { SuppliersService } from 'src/app/core/services/suppliers.service';

@Component({
  selector: 'app-update-shoes',
  templateUrl: './update-shoes.component.html',
  styleUrls: ['./update-shoes.component.sass']
})
export class UpdateShoesComponent implements OnInit {
  shoesId: string = ""
  shoes: any = {
    "color":"",
    "size":0,
    "frontImage":"",
    "sideImage":"",
    "backImage":"",
    "sexId":0,
    "storeId":0,
    "sellerId":0,
    "supplierId":0,
    "quantity":0,
    "brand":"",
    "price": 0
  }
  form: FormGroup
  loading: boolean = false
  errorMSG: string | null = null
  sexesList: Array<any> =[]
  storesList: Array<any> = []
  suppliersList: Array<any> = []
  sellersList: Array<any> = []
  constructor(
    private activePath: ActivatedRoute,
    public fb: FormBuilder,
    private shoesService: ShoesService,
    private ngZone:NgZone,
    private router: Router,
    private sexesService: SexesService,
    private storesService: StoresService,
    private suppliersService: SuppliersService,
    private sellersService: SellersService
  ) { }

  ngOnInit() {
    this.form = this.createForm()
    this.shoesId = this.activePath.snapshot.params.id
    this.shoesService.getShoes().subscribe( res =>{
      this.shoes = res.filter(s => s.id == this.shoesId)[0]
      this.form = this.createForm()
    })
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
    
  }

  createForm():FormGroup{
    var form:any = this.fb.group({
      color: [this.shoes.color,Validators.compose([
        Validators.required,
      ])],
      size: [this.shoes.size,Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]*")
      ])],
      brand: [this.shoes.brand,Validators.compose([
        Validators.required
      ])],
      frontImage: [this.shoes.frontImage],
      sideImage: [this.shoes.sideImage],
      backImage: [this.shoes.backImage],
      sexId: [this.shoes.sexId,Validators.compose([
        Validators.required
      ])],
      storeId: [this.shoes.storeId,Validators.compose([
        Validators.required
      ])],
      supplierId: [this.shoes.supplierId,Validators.compose([
        Validators.required
      ])],
      sellerId: [this.shoes.sellerId,Validators.compose([
        Validators.required
      ])],
      quantity: [this.shoes.quantity,Validators.compose([
        Validators.required,
        Validators.pattern("[0-9.]*")
      ])],
      price: [this.shoes.price,Validators.compose([
        Validators.required,
        Validators.pattern("[0-9.]*")
      ])],
      
    })
    return form
  }

  update(){
    this.loading = true
    if(this.form.valid){
      const shoes =       
      {
        "id": this.shoesId,
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
      this.shoesService.updateShoes(shoes).subscribe( res =>{
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
