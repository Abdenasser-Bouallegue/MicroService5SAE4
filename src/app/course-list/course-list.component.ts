import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = []; // Liste des cours à afficher
  newCourse: Course = { id: undefined, label: '', description: '' }; // Nouveau cours à ajouter avec id undefined pour génération automatique
  editCourse: Course | null = null; // Cours à éditer

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses(); // Charger la liste des cours au démarrage du composant
  }

  getCourses(): void {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courses = data; // Récupérer et assigner les données
    });
  }

  startEdit(course: Course): void {
    this.editCourse = { ...course }; // Cloner le cours pour l'édition
  }

  // Annuler l'édition d'un cours
  cancelEdit(): void {
    this.editCourse = null;
  }

  // Méthode pour mettre à jour un cours
  updateCourse(): void {
    if (this.editCourse) {
      this.courseService.updateCourse(this.editCourse).subscribe(
        () => {
          // Mettre à jour la liste des cours avec la version mise à jour
          this.getCourses();
          this.editCourse = null; // Réinitialiser le cours en édition
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du cours:', error);
        }
      );
    }
  }

  // Méthode pour supprimer un cours
  deleteCourse(courseId: string | undefined): void {
    if (!courseId) {
      console.error('Course ID is undefined.');
      return;
    }
    this.courseService.deleteCourse(courseId).subscribe(() => {
      this.getCourses();
    });
  }
}
