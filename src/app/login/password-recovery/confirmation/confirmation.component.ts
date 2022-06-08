import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  formConfirmation = this.formBuilder.group({
    num1: ['', [Validators.required, Validators.maxLength(1)]],
    num2: ['', [Validators.required, Validators.maxLength(1)]],
    num3: ['', [Validators.required, Validators.maxLength(1)]],
    num4: ['', [Validators.required, Validators.maxLength(1)]],
    num5: ['', [Validators.required, Validators.maxLength(1)]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  move(event: any, previous: any, current: any, next: any){
    var length = current.value.length;
    var maxlength = current.getAttribute('maxlength');
    if(length == maxlength){
      if(next !=""){
        next.focus();
      }
    }
    if(event.key === "Backspace"){
      if(previous != ""){
        previous.focus();
      }
    }
  }

  submitCode(){
    this.router.navigate(['/new-password'])
  }

  redirectToHome(){
    this.router.navigate(['/home'])
  }
}
