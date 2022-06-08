import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  formPassword = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  show: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitCode(){
    this.router.navigate(['/new-password'])
  }

  tooglePasswordVisibility(){
    this.show = !this.show;
  }

  redirectToHome(){
    this.router.navigate(['/home'])
  }

}
