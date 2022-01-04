import { Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ShoesTypesService {

  constructor(
    private api: ApiConfigService
  ) { }

  getShoesTypes(){
    return this.api.get("shoestypes/list")
  }
}
