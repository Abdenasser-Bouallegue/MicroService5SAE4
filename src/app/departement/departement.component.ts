import { Component, OnInit } from '@angular/core';
import { DepartementServiceService } from '../departement-service.service';
import { Lesson } from 'src/Model/Lesson.model';
import { RoundedRect } from 'chart.js/dist/types/geometric';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
lessons: Lesson[] = [];
searchText: string;

constructor(private departementservice: DepartementServiceService, private router: Router,private toastr: ToastrService) { }
ngOnInit(): void {
  this.loadlessons();
}
loadlessons(): void{
this.departementservice.getAllLessons().subscribe(
  (data:Lesson[]) =>{
    this.lessons=data;
    console.log(this.lessons);
  },
  (error) =>
  {
    console.log(error);
  }
  
  );
}

editDepartement(idLesson: number) {
  this.router.navigate(['/modifierdepartement', idLesson]);
}


onDeleteLesson(idLesson: number): void {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette leçon ?')) {
    this.departementservice.deleteLesson(idLesson).subscribe(
      () => {
        this.lessons = this.lessons.filter(lesson => lesson.idLesson !== idLesson);
        this.toastr.success('Leçon supprimée avec succès !');
      },
      error => {
        this.toastr.error('Une erreur est survenue lors de la suppression de la leçon.');
      }
    );
  }
}
search(event) {
  this.departementservice.search(this.searchText).subscribe((data) => {
    this.lessons = data;
  });
}
}
