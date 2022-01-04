import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  loading: boolean = false
  errorMSG: string | null = null
  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private ngZone:NgZone,
    private router: Router,
  ) {
    this.form = fb.group({})
  }

  ngOnInit(): void {
    this.form = this.createForm()
  }

  createForm():FormGroup{
    var form:any = this.fb.group({
      userName: ['',Validators.compose([
        Validators.required,
      ])],
      password: ['',Validators.compose([
        Validators.required
      ])],
    })
    return form
  }

  login(){
    this.loading = true
    const {userName,password} = this.form.value
    this.authService.login(userName,password).then( (res) => {
      this.ngZone.run(() => {
        this.router.navigate(['home']);
        this.loading = false
      });
    }).catch( err => {
      this.errorMSG = err.errorMSG
      this.loading= false
    })
    
  }

}
