import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
   quizForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private quizService: QuizService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.quizForm = this.fb.group({
      title: '',
      description: '',
      duration: 0,
      questions: this.fb.array([
        this.fb.group({
          questionText: '',
          options: this.fb.array([
            this.fb.group({
              optionText: '',
              isCorrectOption: false,
            }),
          ]),
        }),
      ]),
    });

  }

  addQuestion() {
    const question = this.fb.group({
      title: '',
      description: '',
      options: this.fb.array([]),
    });
  
    // Add the question to the form array
    (this.quizForm.get('questions') as FormArray).push(question);
  }
  
  // Add an option to a specific question
  addOption(questionIndex: number) {
    const option = this.fb.group({
      optionText: '',
      isCorrectOption: false, // Assuming isCorrect is a boolean
    });
  
    // Add the option to the specific question's form array
    const optionsArray = (this.quizForm.get(`questions.${questionIndex}.options`) as FormArray);
    optionsArray.push(option);
  }
  get questionsFormArray(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  removeQuestion(questionIndex: number): void {
    this.questionsFormArray.removeAt(questionIndex);
  }

  removeOption(questionIndex: number, optionIndex: number): void {
    const optionsFormArray = this.questionsFormArray.at(questionIndex).get('options') as FormArray;
    optionsFormArray.removeAt(optionIndex);
  }

  submitQuiz() {
    if (this.quizForm.valid) {
      const quizData = { ...this.quizForm.value }; // Copy the form value
      console.log('Complete Quiz Data:', quizData);
  
      this.quizService.createQuiz(quizData).subscribe(
        (createdQuiz) => {
          console.log('Quiz created successfully:', createdQuiz);
          this.router.navigate(['/recruiterQuiz']);
        },
        error => console.error('Error creating quiz', error)
      );
    }
  }}
