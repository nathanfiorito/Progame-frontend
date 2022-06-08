import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  show: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {


  }

  tooglePasswordVisibility(){
    this.show = !this.show;
  }


  efetuarCadastro(){
    const {email, password} = this.formLogin.value;
  }

  redirecionaPaginaCadastro(){
    this.router.navigate(['/signup'])
  }
  redirectToHome(){
    this.router.navigate(['/home'])
  }
}
