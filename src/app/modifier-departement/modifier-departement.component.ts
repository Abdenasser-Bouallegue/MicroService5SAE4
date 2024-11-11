import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/Model/Lesson.model';
import { DepartementServiceService } from '../services/departement-service.service';


@Component({
  selector: 'app-modifier-departement',
  templateUrl: './modifier-departement.component.html',
  styleUrls: ['./modifier-departement.component.css']
})
export class ModifierDepartementComponent implements OnInit {
  lessonForm: FormGroup;
  idLesson!: number;
  lesson!: Lesson;
  successMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private departementservice: DepartementServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.lessonForm = this.fb.group({
      subject: [''],
      teacher: [''],
      studentGroup: [''],
      room: this.fb.group({
        idRoom: [''],
        name: ['']
      }),
      timeslot: this.fb.group({
        idTimeslot: [''],
        dayOfWeek: [''],
        startTime: [''],
        endTime: ['']
      })
    });
  }

  ngOnInit(): void {
    const idLesson = this.route.snapshot.paramMap.get('idLesson');
    if (idLesson) {
      this.idLesson = +idLesson;
      this.departementservice.getLesson(this.idLesson).subscribe({
        next: (data) => {
          this.lesson = data;
          this.lessonForm.patchValue(this.lesson);
        },
        error: (error) => {
          console.error('Erreur lors de la récupération de la leçon :', error);
          this.router.navigate(['/erreur']);
        }
      });
    } else {
      console.error('ID de leçon invalide.');
      this.router.navigate(['/erreur']);
    }
  }
  

  onSubmit(): void {
    const updatedLesson: Lesson = {
      ...this.lesson,
      ...this.lessonForm.value
    };

    this.departementservice.updateLesson(this.idLesson, updatedLesson).subscribe({
      next: () => {
        this.successMessage = "Leçon modifiée avec succès!";
        setTimeout(() => {
          this.successMessage = null;
          this.router.navigate(['/departement']);
        }, 2000);
      },
      error: (err) => {
        console.error("Erreur lors de la modification :", err);
      }
    });
  }
}
