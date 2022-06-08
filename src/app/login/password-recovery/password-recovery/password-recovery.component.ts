import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  isEmailSent: boolean = false;
  isCodeValidate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleEmailSent(isEmailSentAux: boolean){
    this.isEmailSent = isEmailSentAux;
  }

}
