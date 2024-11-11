
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { Feedback } from '../models/Feedback';
import { FeedbackService } from '../services/feedback.service';


@Component({
  selector: 'app-feedback-admin',
  templateUrl: './feedback-admin.component.html',
  styleUrls: ['./feedback-admin.component.css']
})
export class FeedbackAdminComponent implements OnInit {
  feedbacks: Feedback[] = [];
  categories: string[] = Object.values(Category);
  selectedCategory: string = 'All';
  filteredFeedbacks: Feedback[] = [];
  pagedFeedbacks: Feedback[] = [];
  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 0;
  pages: number[] = [];


  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
  }


  fetchFeedbacks(): void {
    this.feedbackService.getAllFeedbacks().subscribe(
      (feedbacks: Feedback[]) => {
        this.feedbacks = feedbacks.filter(feedback => !feedback.archived);
        this.filteredFeedbacks = this.feedbacks; // Initialize filteredFeedbacks as all feedbacks
        this.totalPages = Math.ceil(this.feedbacks.length / this.pageSize);
        this.setPage(1);
      },
      (error) => {
        console.error('Error fetching feedbacks:', error);
      }
    );
  }

  archiveFeedback(feedback: Feedback): void {
    feedback.archived = true;
    this.feedbackService.archiveFeedback(feedback).subscribe(
      () => {
        this.fetchFeedbacks();
      },
      (error) => {
        console.error('Error archiving feedback:', error);
      }
    );
  }

  setPage(page: number) {
    this.currentPage = page;
    this.pagedFeedbacks = this.filteredFeedbacks.slice((page - 1) * this.pageSize, page * this.pageSize);
    this.generatePageNumbers();
  }

  generatePageNumbers() {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  changePage(page: number) {
    this.setPage(page);
    window.scrollTo(0, 0);
  }

  showData(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
    if (selectedCategory === 'All') {
      this.filteredFeedbacks = this.feedbacks;
    } else {
      this.filteredFeedbacks = this.feedbacks.filter(feedback => feedback.reclamationCategory === selectedCategory);
    }
    this.totalPages = Math.ceil(this.filteredFeedbacks.length / this.pageSize);
    this.setPage(1);
  }
  forwardFeedback(feedback: Feedback): void {
    feedback.forward_to_user = 2;

    this.feedbackService.forwardFeedback(feedback).subscribe(
      () => {
        this.archiveFeedback(feedback);
        this.fetchFeedbacks();
      },
      (error) => {
        console.error('Error forward feedback:', error);
      }
    );
  }

}
