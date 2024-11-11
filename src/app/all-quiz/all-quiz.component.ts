import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model/Quiz'; // Quiz model
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-all-quiz',
  templateUrl: './all-quiz.component.html',
  styleUrls: ['./all-quiz.component.css']
})
export class AllQuizComponent implements OnInit {
  quizzes: Quiz[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(private feedbackService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.getAllQuizzes(); // Load quizzes when the component initializes
  }

  // Method to fetch all quizzes
  getAllQuizzes() {
    this.loading = true;
    this.errorMessage = null;

    this.feedbackService.getAll().subscribe(
      (data) => {
        this.quizzes = data;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Failed to load quizzes. Please try again later.';
        console.error('Error loading quizzes:', error);
      }
    );
  }

  // Method to delete a quiz
  deleteQuiz(quiz: Quiz) {
    if (confirm('Are you sure you want to delete this quiz?')) {
      this.loading = true;
      this.feedbackService.delete(quiz).subscribe(
        () => {
          this.loading = false;
          this.quizzes = this.quizzes.filter(q => q.id !== quiz.id); // Remove the deleted quiz from the list
          alert('Quiz deleted successfully!');
        },
        (error) => {
          this.loading = false;
          alert('Failed to delete quiz.');
          console.error('Error deleting quiz:', error);
        }
      );
    }
  }

  // Method to edit a quiz (navigate to the update page with quiz data)
}
