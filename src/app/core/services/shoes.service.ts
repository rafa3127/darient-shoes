import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(
    private api: ApiConfigService
  ) { }

  getShoes(){
    return this.api.get("shoes/list")
  }

  createShoes(shoes: any){
    return this.api.post(shoes, "shoes/create")
  }
  updateShoes(shoes: any){
    return this.api.put(shoes, "shoes/update")
  }

  deleteShoesById(id: number){
    return this.api.delete('shoes/delete/'+ id.toString())
  }


}
