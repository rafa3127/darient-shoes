import { Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(
    private api: ApiConfigService
  ) { }

  getSuppliers(){
     return this.api.get("suppliers/list")
  }
}
