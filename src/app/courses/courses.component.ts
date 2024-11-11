import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = []; // Liste des cours
  newCourse: Course = { id: undefined, label: '', description: '' }; // Nouveau cours à ajouter avec id undefined pour génération automatique
  editCourse: Course | null = null; // Cours à éditer

  constructor(
    private courseService: CourseService,
    private router: Router // Injectez Router ici
  ) {}

  ngOnInit(): void {

  }

  // Ajouter un nouveau cours
  addCourse(): void {
    if (this.newCourse.label && this.newCourse.description) {
      this.courseService.addCourse(this.newCourse).subscribe(course => {
        this.courses.push(course);  // Ajout du nouveau cours à la liste
        this.newCourse = { id: undefined, label: '', description: '' }; // Réinitialiser le formulaire
        this.router.navigate(['/coursesss']);  // Redirection vers la page de liste des cours après l'ajout
      }, error => {
        console.error('Error adding course:', error);  // En cas d'erreur
        alert('An error occurred while adding the course');
      });
    }
  }

  // Mettre à jour un cours
}
