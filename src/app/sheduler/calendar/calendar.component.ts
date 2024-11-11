import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import { GlobalApiService } from 'src/app/services/global-api.service';


@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  events: any[] = [];

  constructor(
    private _api: GlobalApiService
  ) {}

  ngOnInit(): void {
    this._api.getAllCalendarEvents().subscribe(
      (data)=>{
        console.log(data);
        
        data.forEach(e=>{
          this.events = [...this.events, {
            title: e.label,
            start: e.beginTime,
            end: e.endTime
          }]
        })
        this.calendarOptions.events = this.events;

      }
    )
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin],
    eventClick: this.handleDateClick.bind(this),
    events: this.events
  }

  handleDateClick(args) {
    console.log(args);    
  }

  pushEvent(value: any) {
    this.events = [...this.events, value]
    this.calendarOptions.events = this.events
  }  
}
