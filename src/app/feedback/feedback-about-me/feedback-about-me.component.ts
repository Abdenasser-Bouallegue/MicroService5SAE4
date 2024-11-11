
import { Component } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/Feedback';


@Component({
  selector: 'app-feedback-about-me',
  templateUrl: './feedback-about-me.component.html',
  styleUrls: ['./feedback-about-me.component.css']
})
export class FeedbackAboutMeComponent {
  feedbacks: Feedback[] = [];
  constructor(private FeedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
}


fetchFeedbacks(): void {
  this.FeedbackService.getAllFeedbacks().subscribe(
    (feedbacks: Feedback[]) => {

      this.feedbacks = feedbacks.filter(feedback => feedback.forward_to_user === 2);


      const numFeedbacks = this.feedbacks.length

      if (numFeedbacks >= 3 && numFeedbacks <= 4) {
       alert("U have many feedback about u take care");
      } else if (numFeedbacks >= 5 && numFeedbacks <= 7) {
        alert("U have many feedback about u take care 2");
      }
    },
    (error) => {
      console.error('Error fetching feedbacks:', error);
    }
  );
}

}
