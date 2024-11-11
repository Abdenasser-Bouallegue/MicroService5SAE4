import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-quiz-score',
  template: `
  <div class="dialog-content">
    <h1>Your Quiz Score</h1>
    <p>{{ data.score }}</p>
  </div>
`,
styles: [
  `
    .dialog-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 400px; /* Set your custom width */
      height: 300px; /* Set your custom height */
      margin: auto;
      padding: 20px; /* Add padding for spacing */
      border: 2px solid #ccc; /* Add border */
      border-radius: 10px; /* Optional: Add border-radius for rounded corners */
    }

    h3 {
      color: rgb(154, 29, 185); ;
    }

    p {
      font-size: 1.5em;
      color: #4caf50;
      margin-top: 10px;
    }
  `,
],
})

export class QuizScoreComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { score: number }) {}
}
