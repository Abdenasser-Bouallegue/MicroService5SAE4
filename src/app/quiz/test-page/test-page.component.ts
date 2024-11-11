import { Component ,OnInit} from '@angular/core';
import { Quiz , Question} from '../models/quiz.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { TimerServiceService } from '../timer-service.service';
import { interval } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { QuizScoreComponent } from '../quiz-score/quiz-score.component';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  quiz!: Quiz;
  quizId!: number;
  quizData!: Quiz;
  selectedOptions: number[] = [];
  userResponses: number[] = []; // Initialize as an empty array or with default values
  remainingTime: number = 30;
  count! : number;
  progress: string = "0";
  counter = 60;
   i : number = 0  ;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  public points: number = 0;
  public currentQuestion: number = 0;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private dialog: MatDialog,
    private router: Router
  
  ) { const timer = interval(1000);
    timer.subscribe((res) => {
  
      if (this.remainingTime != 0) {
        this.remainingTime--;
      }
      else {
       
        this.router.navigate(['/Quiz']);
      }
     

    });}

  ngOnInit() {
   console.log(this.quiz); // Check if the quiz data is present
  console.log(this.userResponses); // C
    this.route.params.subscribe((params) => {
      this.quizId = +params['id'];
      this.loadQuizData();
    });
    document.addEventListener('visibilitychange', () => {
      let count =0
      if (document.visibilityState === 'visible') {
        console.log('tab is active');
      } else {
        console.log('tab is inactive');
      //alert('not allow to change screen');
        console.log('tab is inactive', this.count++);
      }
    });


    
    this.quizService.getQuizById(this.quizId).subscribe(
      (quiz) => {
        this.quiz = quiz;
        this.userResponses = new Array(quiz.questions.length);
      },
      (error) => {
        console.error('Error fetching quiz', error);
      }
    );
   
    
  }

  loadQuizData() {
    this.quizService.getQuizById(this.quizId).subscribe((data) => {
      this.quizData = data;
    });
  }
  

  submitQuiz() {
    const dialogRef = this.dialog.open(QuizScoreComponent, {
      data: { score: this.calculateScore() },
    });
  }

  calculateScore(): number {
    let score = 0;
  
    // Iterate through questions and check user responses
    this.quiz.questions.forEach((question, i) => {
      const userResponseIndex = this.userResponses[i];
  
      if (userResponseIndex !== undefined && userResponseIndex >= 0 && userResponseIndex < question.options.length) {
        const selectedOption = question.options[userResponseIndex];
  
        // Check if the selected option is correct
        if (selectedOption.isCorrectOption) {
          score++;
        }
      }
    });
  
    return score;
  }
  
}



