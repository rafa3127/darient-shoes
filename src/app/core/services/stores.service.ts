import { Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(
    private api: ApiConfigService
  ) { }

  getStores(){
    return this.api.get("stores/list")
  }
}
