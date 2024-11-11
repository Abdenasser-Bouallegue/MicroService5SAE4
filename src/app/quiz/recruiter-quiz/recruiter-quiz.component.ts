import { Component } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { QuizService } from '../quiz.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recruiter-quiz',
  templateUrl: './recruiter-quiz.component.html',
  styleUrls: ['./recruiter-quiz.component.css']
})
export class RecruiterQuizComponent {

  quizzes!: Quiz[];

  constructor(private quizService: QuizService ) { }

  ngOnInit() {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getAllQuizzes().subscribe(
      quizzes => this.quizzes = quizzes,
      error => {
        console.error('Error fetching quizzes:', error);
  
        // Log the specific error message if available
        if (error instanceof HttpErrorResponse && error.error instanceof ErrorEvent) {
          console.error('Client-side error occurred:', error.error.message);
        } else if (error instanceof HttpErrorResponse && typeof error.error === 'string') {
          console.error('Server-side error occurred:', error.error);
        }
  
        // Optionally, handle the error or show a user-friendly message
      }
    );
  }
  editQuiz(quiz: Quiz) {
    // Implement logic to navigate to the quiz edit page or show a modal
    console.log('Editing quiz:', quiz);
  }


    deleteQuiz(quizId: number) {
      if (confirm('Are you sure you want to delete this quiz?')) {
        this.quizService.deleteQuiz(quizId).subscribe(
          () => {
            console.log('Quiz deleted successfully.');
            // Optionally, you can reload the quizzes after deletion
            this.loadQuizzes();
          },
          error => console.error('Error deleting quiz', error)
        );
      }
    console.log('Deleting quiz with ID:', quizId);
  }
 
}
