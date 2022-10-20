import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AnswerService } from "src/app/shared/services/answer/answer.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

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