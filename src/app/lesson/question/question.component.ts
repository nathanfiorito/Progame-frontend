import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/entity/question.entity';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input()
  questions!: Question[]
  
  constructor() { }

  ngOnInit() {
    console.log(this.questions)
  }

}
