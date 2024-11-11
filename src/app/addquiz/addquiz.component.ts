import { Component } from '@angular/core';
import { Quiz } from '../model/Quiz';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent {
  quiz: Quiz = new Quiz(0, '', '', 0); // Initialize an empty Quiz object
  loading = false;
  errorMessage: string | null = null;

  constructor(private feedbackService: QuizService, private router: Router) {}

  // Method to handle form submission
  addQuiz() {
    this.loading = true;
    this.errorMessage = null;

    this.feedbackService.add(this.quiz).subscribe(
      (response) => {
        this.loading = false;
        alert('Quiz added successfully!');
        this.router.navigate(['/allquiz']); // Redirect to quiz list or another page
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Failed to add quiz. Please try again later.';
        console.error('Error adding quiz:', error);
      }
    );
  }
}
