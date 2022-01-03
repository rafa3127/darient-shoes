import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private authService: AuthService
  ) {
    this.form = fb.group({})
  }

  ngOnInit(): void {
    this.form = this.createForm()
  }

  createForm():FormGroup{
    var form:any = this.fb.group({
      email: ['',Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['',Validators.compose([
        Validators.required
      ])],
    })
    return form
  }

  login(){
    this.loading = true
    
    const {email,password} = this.form.value
    this.authService.login(email,password)
    
  }

}
