import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiConfigService,
    private http: HttpClient
  ) { }

  login(email,password){
    this.http.get("http://darient-api-shoes.somee.com/users/list").subscribe(res=>{console.log(res)})
  }

}
