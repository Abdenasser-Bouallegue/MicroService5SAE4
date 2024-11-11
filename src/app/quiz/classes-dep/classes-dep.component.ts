import { Component, OnInit } from '@angular/core';
import { Lesson } from '../models/dep.model';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-classes-dep',
  templateUrl: './classes-dep.component.html',
  styleUrls: ['./classes-dep.component.css']
})
export class ClassesDepComponent implements OnInit{

  lessons: Lesson[] = [];

  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
    this.loadLessons();
  }

  loadLessons(): void {
    this.lessonService.getAllLessons().subscribe(
      lessons => {
        this.lessons = lessons;
      },
      error => {
        console.error('Error fetching lessons:', error);
      }
    );
  }




}
