import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  @Output() isEmailSentEvent = new EventEmitter<boolean>();

  formRecovery = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  redirectToHome(){
    this.router.navigate(['/home'])
  }

  passwordReset(){
    this.isEmailSentEvent.emit(true);
  }
}
