import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AnswerService } from "src/app/shared/services/answer/answer.service";

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.scss']
})
export class FailureComponent implements OnInit {
  correctAnswer!: number;
  @Input() questionsCount!: number;

    constructor(private answerService: AnswerService,
      private router: Router){
        
    }

    ngOnInit(): void {
      this.correctAnswer = this.answerService.correctAnswers;
      console.log(this.correctAnswer)
    }

    exit(){
      this.router.navigate(['dashboard'])
    }
}