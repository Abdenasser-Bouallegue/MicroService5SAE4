
import { Component } from '@angular/core';
import { Feedback } from '../models/Feedback';
import { Category } from '../models/Category';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback-archived',
  templateUrl: './feedback-archived.component.html',
  styleUrls: ['./feedback-archived.component.css']
})
export class FeedbackArchivedComponent {
  feedbacks: Feedback[] = [];
  categories: string[] = Object.values(Category);
  selectedCategory: string ='' ;
  filteredFeedbacks: Feedback[];


  constructor(private FeedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
}


fetchFeedbacks(): void {
  this.FeedbackService.getAllFeedbacks().subscribe(
    (feedbacks: Feedback[]) => {
      this.filteredFeedbacks = feedbacks.filter(feedback => feedback.archived === true);
    },
    (error) => {
      console.error('Error fetching feedbacks:', error);
    }
  );
}

UnarchiveFeedback(feedback: Feedback): void {
  feedback.archived = false;
  this.FeedbackService.unarchivedFeedback(feedback).subscribe(
    () => {
      this.filteredFeedbacks.push(feedback);
      window.location.reload();
    },
    (error) => {
      console.error('Error unarchiving feedback:', error);
    }
  );
}



}
