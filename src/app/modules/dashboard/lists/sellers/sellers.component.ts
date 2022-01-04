import { Component, OnInit } from '@angular/core';
import { SellersService } from 'src/app/core/services/sellers.service';
import { SexesService } from 'src/app/core/services/sexes.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.sass']
})
export class SellersComponent implements OnInit {

  list: Array<any> = []
  constructor(
    private sellersService: SellersService,
    private sexesService: SexesService
  ) { }

  ngOnInit() {
    this.sellersService.getSellers().subscribe( res => {
      this.list = res
      this.sexesService.getSexes().subscribe( sexes => {
        this.list.map(e => {
          e.sex = sexes.filter(s => s.id == e.sexId)[0]?sexes.filter(s => s.id == e.sexId)[0].sex: ""
        })
      })
    })
  }

}
