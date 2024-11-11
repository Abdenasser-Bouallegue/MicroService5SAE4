import { Component,OnInit } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  quizzes!: Quiz[];

  constructor(private quizService: QuizService ,private router: Router) { }

  ngOnInit() {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getAllQuizzes().subscribe(
      quizzes => this.quizzes = quizzes,
      error => console.error('Error fetching quizzes', error)
    );
  }

  
}
