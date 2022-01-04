import { Component, OnInit } from '@angular/core';
import { StoresService } from 'src/app/core/services/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.sass']
})
export class StoresComponent implements OnInit {
  list: Array<any> = []
  constructor(
    private storesService: StoresService
  ) { }

  ngOnInit() {
    this.storesService.getStores().subscribe( res => {
      this.list = res
    })
  }

}
