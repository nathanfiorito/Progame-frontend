import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, Form, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-validator',
  templateUrl: './input-validator.component.html',
  styleUrls: ['./input-validator.component.scss']
})
export class InputValidatorComponent implements OnInit {
  @Input() class: string = "";
  @Input() type: string = "";
  @Input() placeholder: string = "";
  @Input() isValid: string = "";
  @Input() errorMessage: string = "";

  form!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
    console.log(this.form)
  }

}
