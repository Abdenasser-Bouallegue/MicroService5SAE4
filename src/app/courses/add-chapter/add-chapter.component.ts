import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { GlobalApiService } from 'src/app/services/global-api.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit{
  
  course: Course;
  chapterForm: FormGroup;
  
  constructor (
    private _api: GlobalApiService,
    private shareService: ShareDataService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.shareService.currentData.subscribe(data => {
      this.course = data;
    });
    this.formInit();
  }

  formInit(){
    this.chapterForm = this._fb.group({
      chapters: this._fb.array([
        this._fb.group({
          title: new FormControl('', Validators.required),
          description: '' 
        }),
        this._fb.group({
          title: new FormControl('', Validators.required),
          description: '' 
        }),
        this._fb.group({
          title: new FormControl('', Validators.required),
          description: '' 
        })
      ])
    })
  }

  addChapter() {
    const chapter = this._fb.group({
      title: new FormControl('', Validators.required),
      description: '' 
    });
    (this.chapterForm.get('chapters') as FormArray).push(chapter);
  }

  get chaptersFormArray(): FormArray {
    return this.chapterForm.get('chapters') as FormArray;
  }

  removeChapter(chapterIndex: number): void {
    if(this.chaptersFormArray.length > 3){
      this.chaptersFormArray.removeAt(chapterIndex);
    }
  }

  submit(){
    this.course.chapters = {...this.chapterForm.value};
    console.log(this.course);
    
    this._api.addCourse(this.course).subscribe(
      data => console.log(data)
    );
  }

}
