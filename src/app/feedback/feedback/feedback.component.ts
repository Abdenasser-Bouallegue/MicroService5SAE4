import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/Feedback';
import { Category } from '../models/Category';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  newFeedback: Feedback={
    title: "",
    body: "",
    reclamationCategory: Category.Application


  };
  categories: string[] = Object.values(Category);
  feedbackForm: FormGroup;

  badWords: string[] =["hate", "bloody", "kill", "nigga","destroy"];
  inputMessage: string = '';
  errbadwords:boolean = false;

  recognition = new (window["SpeechRecognition"] || window["webkitSpeechRecognition"])();
  startButton: any;
  outputDiv: any;

    constructor(private FeedbackService:FeedbackService,private router: Router,
      private fb: FormBuilder) {
        this.feedbackForm = this.fb.group({
          title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]], // Add validators for min and max length
          reclamationCategory: ['', Validators.required],
          body: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]] // Add validators for min and max length
        });
       }
    ngOnInit(): void {
      this.feedbackForm = this.fb.group({
        title: ['', Validators.required],
        reclamationCategory: ['', Validators.required],
        body: ['', Validators.required]
      })
      ;
      //
      this.startButton = document.getElementById('startButton');
      this.outputDiv = document.getElementById('output');

      this.recognition.onstart = () => {
        this.startButton.textContent = 'Listening...';
    };

    this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.feedbackForm.get('body').setValue(transcript);
    };

    this.recognition.onend = () => {
        this.startButton.textContent = 'Start Voice';
    };

    }
    startRecognition(): void {
      this.recognition.start();
    }
    containsBadWords(input: string): boolean {
      // Regular expression to match bad words
      const regex = new RegExp(this.badWords.join('|'), 'gi');
      // Check if input message contains bad words
      return regex.test(input);
    }
    addFeedback(): void {
      if (this.containsBadWords(this.inputMessage)) {

        console.log("Message contains bad words. Submission prevented.");
         this.errbadwords = true; // Set errbadwords flag to true
        return;
      }
      if (this.feedbackForm.valid) { // Check if the form is valid
        const newFeedback: Feedback = this.feedbackForm.value; // Get form values
        this.FeedbackService.addFeedback(newFeedback).subscribe(
          (createdFeedback: Feedback) => {
            console.log('Feedback added successfully:', createdFeedback);
            alert('Feedback sent successfully! Thank you for your valuable feedback. Your insights are greatly appreciated.');
            this.router.navigate(['/home']);
          },
          (error) => {
            console.error('Error adding feedback:', error);
          }
        );
      } else {
        console.log('Form is invalid');
      }
    }

  }
