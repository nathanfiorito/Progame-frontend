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

  statusLesson: 'success' | 'failure' | 'none' = 'none';

  constructor(public questionService: QuestionService) { }

  ngOnInit(): void {
    this.module = this.questionService.moduleWQuestion!.Module
  }

  getStatus(event: any){
    this.statusLesson = event
  }
}
