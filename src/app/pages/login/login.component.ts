import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@core/data/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  user:any={};
  submited:boolean=false;
  loading:boolean=false;
  customLoadingTemplate:any;

  constructor(
    public formBuilder:FormBuilder,
    public route:Router,
    public loginService: LoginService
  ) { }

  ngOnInit() {
  }

  public login() {
    this.submited = true;
    this.loading = true;

    if(this.loginForm.invalid) {
      this.loading = false;
      return;
    };

    this.loginService.login(this.user)
      .then((result) => {
        this.loading = false;
        this.route.navigate(['/home']);
      })
      .catch((err) => {
        this.loading = false;
        console.log('err');
      })

  }

}
