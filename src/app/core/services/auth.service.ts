import { Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiConfigService
  ) { }

  login(email,password){
    this.api.get('users/list').subscribe( (res)=>{
      console.log(res)
    }, err =>{
      console.log(err)
    })
  }
}
