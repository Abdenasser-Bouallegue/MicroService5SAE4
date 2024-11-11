import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Chapter } from '../model/chapter';
import { MediaSource } from '../model/media-source';
import { scrappingResponse } from '../model/scrappingResponse';
import { CalendarEvent } from '../model/calendarEvent';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiService {
  url = "http://localhost:8090";
  endpoints = {
    COURSES : {
      GETALL: "/courses/getall",
      GETBYID: "/courses/",
      ADD: "/courses/add"
    },
    CHAPTERS : {
      GETBYID: "/chapters/",
      ADD: "/chapters/addChapter",
      ADDRESOURCES: "/chapters/addchapterresource/"
    },
    RESOURCES: {
      GETBYCONTEXT: "/resources/get/"
    },
    SCHEDULER: {
      GETALL: "/calendar-events",
      ADD: "/calendar-events"
    },
    SCRAPPER: {
      GET: "/scraptechnologiespweasesmileyface"
    }
  }

  constructor(private http: HttpClient) { }

  getAllCourses():Observable<HttpResponse<Course[]>> {
    return this.http.get<Course[]>(
        this.url + this.endpoints.COURSES.GETALL,
        {observe: 'response'}
      );
  }

  getAllCoursesByPage(page: number):Observable<HttpResponse<Course[]>> {
    let params = new HttpParams().set("page", page);
    return this.http.get<Course[]>(
        this.url + this.endpoints.COURSES.GETALL,
        {
          observe: 'response',
          params: params
        }
      );
  }

  getAllCoursesByPageSearched(search: string):Observable<HttpResponse<Course[]>> {
    let params = new HttpParams().set("searchLabel", search);
    return this.http.get<Course[]>(
        this.url + this.endpoints.COURSES.GETALL,
        {observe: 'response', params: params}
      );
  }

  getCourseById(courseId: string): Observable<Course>{
    let req = `${this.url}${this.endpoints.COURSES.GETBYID}${courseId}`; 
    return this.http.get<Course>(req);
  }

  addCourse(course: Course): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.post<string>(this.url + this.endpoints.COURSES.ADD, course, httpOptions);
  }

  deleteCourse(courseId: string): Observable<string> {
    let req = `${this.url}${this.endpoints.COURSES.GETBYID}${courseId}`; 
    return this.http.delete<string>(req);
  }

  getChapterById(chapterId: string): Observable<Chapter>{
    let req = `${this.url}${this.endpoints.CHAPTERS.GETBYID}${chapterId}`; 
    return this.http.get<Chapter>(req);
  }

  addChapter(chapter: Chapter): Observable<string> {
    return this.http.post<string>(this.url + this.endpoints.CHAPTERS.ADD, chapter);
  }

  addResourceToChapter(
    chapterId: string, 
    mediaSource: FormData): Observable<string> {
    let req = `${this.url}${this.endpoints.CHAPTERS.ADDRESOURCES}${chapterId}`
    return this.http.post<string>(req, mediaSource);
  }

  getResource(context: string) {
    let req = `${this.url}${this.endpoints.RESOURCES.GETBYCONTEXT}${context}`
    return this.http.get(req, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  getAllCalendarEvents():Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(
        this.url + this.endpoints.SCHEDULER.GETALL
      );
  }

  addCalendarEvent(calendarEvent: CalendarEvent): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<string>(this.url + this.endpoints.SCHEDULER.ADD, calendarEvent, httpOptions);
  }

  getScrapping():Observable<scrappingResponse[]> {
    let req = `${this.url}${this.endpoints.SCRAPPER.GET}`;
    return this.http.get<scrappingResponse[]>(req);
  }
}
