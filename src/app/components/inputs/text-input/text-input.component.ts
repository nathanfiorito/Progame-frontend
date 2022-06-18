import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[text-input]',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  host:{
    '[class.password]':'type === "password"',
    '[class.icon-none]':'icon === "none"',
    '[class.icon-left]':'icon === "left"',
    '[class.icon-right]':'icon === "right"',
    '[class.icon-both]':'icon === "both"',
  }
})
export class TextInputComponent {
  @Input() type: 'number' | 'text' | 'password' | 'email' = 'text';
  @Input() icon: 'none' | 'right' | 'left' | 'both' = 'none';
  
  constructor(){
    console.log(this.type);
  }
}
