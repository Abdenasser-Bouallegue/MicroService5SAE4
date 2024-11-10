import { Component, OnInit } from '@angular/core';
import { Lesson, Room, Timeslot } from 'src/Model/Lesson.model';
import { DepartementServiceService } from '../departement-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-departement',
  templateUrl: './ajouter-departement.component.html',
  styleUrls: ['./ajouter-departement.component.css']
})
export class AjouterDepartementComponent implements OnInit{
  lesson: Lesson = {
    idLesson: 0,
    subject: '',
    teacher: '',
    studentGroup: '',
    timeslot: { idTimeslot: 0, dayOfWeek: '', startTime: '', endTime: '' },
    room: { idRoom: 0, name: '' }
  };

  successMessage: string = '';

  constructor(
    private departementlesson: DepartementServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.departementlesson.createLesson(this.lesson).subscribe(
      (response: Lesson) => {
        this.successMessage = 'Leçon ajoutée avec succès!';
        setTimeout(() => {
          this.router.navigate(['/departement']);
        }, 1000);
      },
      (error) => {
        this.successMessage = 'Erreur lors de l\'ajout de la leçon. Veuillez réessayer.';
      }
    );
  }
}
