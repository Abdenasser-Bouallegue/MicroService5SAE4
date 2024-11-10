import { HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/model/course';
import { GlobalApiService } from 'src/app/services/global-api.service';
import { SeachService } from 'src/app/services/seach.service';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, AfterViewInit, OnDestroy{

  courses: Course[] = [];
  errorMessage: string;
  serverError : boolean = false;
  
  totalPageNumber: number = 1;
  pageIndex: number = 1;
  courseSerchValue: string = "";
  subscription: Subscription;

  constructor(
    private _api: GlobalApiService,
    private searchService: SeachService
  ) {
    this.subscription = this.searchService.data$.subscribe(
      (data) => {
        this.courseSerchValue = data;
        this.loadSearchCourses(this.courseSerchValue);
      }
    );
  }

    pageNumberCounter() {
      return new Array(this.totalPageNumber);
    }

    nextPage() {
      if(this.pageIndex != this.totalPageNumber -1){
        this.pageIndex++;
        this.loadPageCourses(this.pageIndex);
      }
    }

    previousPage() {
      if(this.pageIndex != 0){
        this.pageIndex--;
        this.loadPageCourses(this.pageIndex);
      }
    }

  ngOnInit(): void {
    /*this._api.getAllCourses().subscribe(
      (data)=>{
        this.courses = data;
      },(error) =>{
        console.log(error);
        this.courses = []
      }
    );*/
    
  }

  loadPageCourses(i: number){
    this._api.getAllCoursesByPage(i)
      .subscribe((response) => {
        console.log(response);
        const headers: HttpHeaders = response.headers;
        const totalPageNumber = headers.get('totalPageNumber');
        this.totalPageNumber = +totalPageNumber;
        
        this.courses = response.body;
      },
      (error) => {
        console.log(error);
        this.errorMessage = "there has been an error";
        this.serverError = true;
      });
  }

  loadSearchCourses(s: string){
    this._api.getAllCoursesByPageSearched(s)
      .subscribe((response) => {
        console.log(response);
        const headers: HttpHeaders = response.headers;
        const totalPageNumber = headers.get('totalPageNumber');
        this.totalPageNumber = +totalPageNumber;
        
        this.courses = response.body;
      },
      (error) => {
        console.log(error);
        this.errorMessage = "there has been an error";
        this.serverError = true;
      });
  }
  
  ngAfterViewInit(): void {
    this._api.getAllCourses()
      .subscribe((response) => {
        console.log(response);
        const headers: HttpHeaders = response.headers;
        const totalPageNumber = headers.get('totalPageNumber');
        this.totalPageNumber = +totalPageNumber;
        
        this.courses = response.body;
      },
      (error) => {
        console.log(error);
        this.errorMessage = "there has been an error";
        this.serverError = true;
      });
  }

  /*.subscribe({
    next: (value) => {
      console.log(value);        
      this.courses = value;
    },
    error: (error) => {
      console.log(error);
      this.errorMessage = "there has been an error";
      this.serverError = true;
    },
    complete: () => {
      console.info("completed")
    }
  })*/

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
