import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@core/data/login.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  user:User;
  submited:boolean=false;
  loading:boolean=false;
  customLoadingTemplate:any;

  constructor(
    public formBuilder:FormBuilder,
    public route:Router,
    public loginService: LoginService
  ) 
  { 
    this.loginForm = this.formBuilder.group({
      email:['',],
      password:['',]
    })
  }

  ngOnInit() {
  }

  public onSubmit() {

    this.submited = true;
    this.loading = true;

    if(this.loginForm.invalid) {
      this.loading = false;
      return;
    } else {
      
      this.user = new User(this.loginForm);

      this.loginService.login(this.user)
        .then(() => {
          this.loading = false;
          this.route.navigate(['/home']);
        })
        .catch((err) => {
          this.loading = false;
          console.log('err',err);
        })
    }



  }

}
