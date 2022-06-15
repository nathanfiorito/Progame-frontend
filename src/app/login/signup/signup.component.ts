import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { SignUpDTO } from 'src/app/shared/dto/auth/signup.dto';
import Utils from 'src/app/shared/utils';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formRegister = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
})

  errors: string[] = [];
  show: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void { }

  tooglePasswordVisibility(){
    this.show = !this.show;
  }


  async register(){
    const {email, username, password, passwordConfirm} = this.formRegister.value;
    const signUpDTO: SignUpDTO = {email: email!,username: username!, password: password!, passwordConfirm: passwordConfirm!}

    this.errors = [];

    await this.authService.signup(signUpDTO).then((success) => {
      this.redirectToSignin();
    }).catch((response: HttpErrorResponse) => {
      this.errors = Utils.showErrors(response);
    });
  }

  redirectToSignin(){
    this.router.navigate(['/signin'])
  }

  redirectToHome(){
    this.router.navigate(['/home'])
  }
}
