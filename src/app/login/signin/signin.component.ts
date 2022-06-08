import { SignInDTO } from './../../shared/dto/auth/signin.dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: ['']
  })

  show: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {


  }

  async efetuarLogin(){
    const {username, password} = this.formLogin.value;
    const signinDTO: SignInDTO = {username: username, password: password}
    let response = await this.authService.signin(signinDTO);

    if(response !== undefined){
      // this.router.navigate(['/dashboard']);
      console.log('dash')
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
}
