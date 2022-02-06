import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public name: string="";
  public QuestionList : any = [];
  public currentQuestion:number=0;
  public points:number=0;
  counter=60;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  progress:string="0";
  isQuizCompleted: boolean = false;
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.stratcounter();
  }
  getAllQuestions(){
   this.questionService.getQuestionJson()
   .subscribe(res => {
     this.QuestionList = res.questiontwo;
   })
  }
  nextQuestion(){
  this.currentQuestion ++;
  }
  previousQuestion(){
  this.currentQuestion --;
  }
  answer(currentQno:number,option:any){
    if(currentQno === this.QuestionList.length)
    {
      this.isQuizCompleted = true;
      this.stopcounter();
    }
    if(option.correct){
      setTimeout(() => {
        this.correctAnswer ++;
        this.currentQuestion++;
        this.resetcounter();
        this.getProgressPercent();
      },1000);
      this.points+=10;
    }else{
      setTimeout(() => {
        this.incorrectAnswer++;
      this.currentQuestion++;
      this.resetcounter();
      this.getProgressPercent();
      },1000);
      this.points-=10;
    }
  }
  stratcounter(){
   this.interval$ = interval(1000)
   .subscribe(val =>{
     this.counter--;
     if(this.counter===0){
       this.currentQuestion++;
       this.counter=60;
       this.points-=10;
     }
   });
   setTimeout(() => {
     this.interval$.unsubscribe();
   },600000);
  }
  stopcounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetcounter(){
   this.stopcounter();
   this.counter=60;
   this.stratcounter();
  }
  resetQuiz(){
    this.resetcounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress="0";
  }
  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.QuestionList.length)*100).toString();
    return this.progress;
  }
}
