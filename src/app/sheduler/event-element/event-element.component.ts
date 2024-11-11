import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarEvent } from 'src/app/model/calendarEvent';

@Component({
  selector: 'event-element',
  templateUrl: './event-element.component.html',
  styleUrls: ['./event-element.component.css']
})
export class EventElementComponent {

  @Input() calendarEvent: CalendarEvent;
  @Output() participate = new EventEmitter<any>();

}
