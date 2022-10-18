import { Component, Input, OnInit } from '@angular/core';
import { Module } from 'src/app/shared/entity/module.entity';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @Input()
  module!: Module

  constructor() { }

  ngOnInit() {
  }

}
