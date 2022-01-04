import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfigService } from '../api-config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiConfigService,
    private router: Router
  ) { }

  login(userName:string,password:string){
    return new Promise((resolve, reject) => {
      this.api.get('users/list').subscribe( (res)=>{
        res.forEach(u => {
          if(u["user"].toLowerCase()==userName.toLowerCase() && u["password"]==password){
            localStorage.setItem('user', JSON.stringify(JSON.stringify(u)))
            resolve(u)
            return
          }
        });
        reject({errorMSG: "El usuario o la contraseñas no son correctas. Intente de nuevo"})
        return
      }, err =>{
        reject({errorMSG: "Ocurrió un error inesperado. Intente de nuevo"})
        return
      })
    }) 
  }

  logOut(){
    localStorage.removeItem("user")
    this.router.navigate(["auth"])
  }

  isLogged(){
    if(localStorage.getItem("user")){
      return true
    }else{
      return false
    }
  }
}
