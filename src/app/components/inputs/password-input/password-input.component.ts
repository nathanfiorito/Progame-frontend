import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[password-input]',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent{
  @Input() show: boolean = false;

  constructor() { }

  tooglePasswordVisibility(){
    this.show = !this.show;
  }

}
