import { Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class SexesService {

  constructor(
    private api: ApiConfigService
  ) { }

  getSexes(){
    return this.api.get("sexes/list")
  }
}
