import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent{
  constructor() { }
  
  show!: boolean;

  tooglePasswordVisibility(){
    this.show = !this.show;
  }

}
