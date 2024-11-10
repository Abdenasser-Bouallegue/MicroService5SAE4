import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'src/app/model/calendarEvent';
import { GlobalApiService } from 'src/app/services/global-api.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit{

  calendarEvents: CalendarEvent[] = [];

  constructor(
    private _api: GlobalApiService
  ){}

  ngOnInit(): void {
    this._api.getAllCalendarEvents().subscribe(
      (data)=>{
        this.calendarEvents = data;
        console.log(data);
      },(error) =>{
        console.log(error);
        this.calendarEvents = []
      }
    )
  }

}
