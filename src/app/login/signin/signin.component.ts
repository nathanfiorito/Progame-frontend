import { SignInDTO } from './../../shared/dto/auth/signin.dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import Utils from 'src/app/shared/utils';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
      remember: ['']
  })

  errors: string[] = [];
  show: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService,
    ) { }

  ngOnInit(): void {


  }

  async efetuarLogin(){
    const {username, password} = this.formLogin.value;
    const signinDTO: SignInDTO = {username: username!, password: password!}
    
    this.errors = [];

    await this.authService.signin(signinDTO).then((success) => {
      this.cookieService.set('accessToken',success.Data)
      this.redirectToDashboard();
    }).catch((response: HttpErrorResponse) => {
      this.errors = Utils.showErrors(response);
    });
  }

  showErrors(response: HttpErrorResponse){
    if(Array.isArray(response.error.message)){
      response.error.message.forEach((errorMsg: string) => {
        this.errors.push(errorMsg);
      });
    }else{
      this.errors.push(response.error.message)
    }
  }

  tooglePasswordVisibility(){
    this.show = !this.show;
  }

  redirectToSingup(){
    this.router.navigate(['/signup'])
  }

  redirectToRecovery(){
    this.router.navigate(['/recovery'])
  }
  redirectToHome(){
    this.router.navigate(['/home'])
  }
  redirectToDashboard(){
    this.router.navigate(['/dashboard'])
  }
}
