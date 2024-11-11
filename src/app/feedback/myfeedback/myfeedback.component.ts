
import { Component } from '@angular/core';
import { Feedback } from '../models/Feedback';
import { FeedbackService } from '../services/feedback.service';


@Component({
  selector: 'app-myfeedback',
  templateUrl: './myfeedback.component.html',
  styleUrls: ['./myfeedback.component.css']
})
export class MyfeedbackComponent {
  feedbacks: Feedback[] = [];


  constructor(private FeedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
}


fetchFeedbacks(): void {
  this.FeedbackService.getAllFeedbacks().subscribe(
    (feedbacks: Feedback[]) => {
      // Filter feedbacks where user_id is equal to 1
      this.feedbacks = feedbacks.filter(feedback => feedback.user_id === 1);
    },
    (error) => {
      console.error('Error fetching feedbacks:', error);
    }
  );
}
deleteFeedback(feedback: Feedback): void {
  this.FeedbackService.deleteFeedback(feedback).subscribe(
    () => {
      // Remove the deleted feedback from the local array
      this.feedbacks = this.feedbacks.filter(f => f.idFeedback !== feedback.idFeedback);
    },
    (error) => {
      console.error('Error deleting feedback:', error);
    }
  );
}


}
