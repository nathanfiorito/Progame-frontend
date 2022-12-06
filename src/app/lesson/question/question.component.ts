import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/shared/entity/answer.entity';
import { Question } from 'src/app/shared/entity/question.entity';
import { AnswerService } from 'src/app/shared/services/answer/answer.service';
import { CompletedModulesService } from 'src/app/shared/services/completedModules/CompletedModules.services';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input()
  questions!: Question[]

  @Output()
  statusLesson: EventEmitter<string> = new EventEmitter<string>();

  answers!: Answer[]
  answer!: Answer;
  isLastQuestion: boolean = false;
  correctAnswers: number = 0;
  questionCounter: number = 0;

  constructor(private router: Router,
    private answerService: AnswerService,
    private completedModulesService: CompletedModulesService,
    private userService: UserService,
    private ref:ChangeDetectorRef) { }

  ngOnInit() {
    this.answerService.getAnswersByModuleId(this.questions[this.questionCounter].Id).then((response) => {
      this.answers = response.Data;
    })
  }

  confirmAnswer(){
    if(this.questions[this.questionCounter].CorrectAnswerId === this.answer.Id){
      this.correctAnswers++;
    }
    this.nextQuestion();
  }

  nextQuestion(){
    this.questionCounter++;
    if(this.questionCounter <= this.questions.length - 1){
      this.answerService.getAnswersByModuleId(this.questions[this.questionCounter].Id).then((response) => {
        this.answers = response.Data
        this.ref.detectChanges();
      })
      if(this.questionCounter == this.questions.length - 1){
        this.isLastQuestion = true;
      }
    }
  }

  changeAnswer(event: any){
    this.answer = this.answers[event.target.value]
  }

  checkResult(){
    if(this.questions[this.questionCounter].CorrectAnswerId === this.answer.Id){
      this.correctAnswers++;
    }
    if(this.correctAnswers >= this.answers.length / 2){
      var exp = this.correctAnswers * 30;
      this.completedModulesService.completeModule(this.questions[0].ModuleId, exp).then((response) => {
        this.userService.getUserExp().then(response => {
          this.userService.setUserExp = response.Data
          this.answerService.setCorrectAnsers(this.correctAnswers)
          this.statusLesson.emit('success');
        })
      })
    }
    else{
      this.answerService.setCorrectAnsers(this.correctAnswers)
      this.statusLesson.emit('failure');
    }
  }
}
