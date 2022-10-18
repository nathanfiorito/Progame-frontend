import { Component, OnInit } from '@angular/core';
import { Module } from '../shared/entity/module.entity';
import { QuestionService } from '../shared/services/question/question.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  module!: Module

  constructor(public questionService: QuestionService) { }

  ngOnInit(): void {
    this.module = this.questionService.moduleWQuestion!.Module
    console.log(this.questionService.moduleWQuestion!.Questions)
  }

}
