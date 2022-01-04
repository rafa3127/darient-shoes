import { Component, OnInit } from '@angular/core';
import { SexesService } from 'src/app/core/services/sexes.service';
import { ShoesService } from 'src/app/core/services/shoes.service';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.sass']
})
export class ShoesListComponent implements OnInit {
  shoesList: Array<any> = []
  constructor(
    private shoesService: ShoesService,
    private sexesService: SexesService
  ) { }

  ngOnInit() {
    this.shoesService.getShoes().subscribe( res => {
      this.shoesList = res
    })
  }

  reloadShoesList(){
    this.shoesService.getShoes().subscribe( res => {
      this.shoesList = res
    })
  }

  search(search: string){
    this.shoesService.getShoes().subscribe( res => {
      this.shoesList = res.filter( s =>{
        return s.color.toUpperCase().includes(search.toUpperCase())||s.brand.toUpperCase().includes(search.toUpperCase())})
    })
  }

}
