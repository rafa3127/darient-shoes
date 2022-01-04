import { Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(
    private api: ApiConfigService
  ) { }

  getSellers(){
    return this.api.get("sellers/list")
  }
}
