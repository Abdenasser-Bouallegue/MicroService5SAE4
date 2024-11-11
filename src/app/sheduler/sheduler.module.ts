import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShedulerRoutingModule } from './sheduler-routing.module';
import { ShedulerComponent } from './sheduler.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AddEventComponent } from './add-event/add-event.component';
import { ScrapingDuckComponent } from './scraping-duck/scraping-duck.component';
import { EventListComponent } from './event-list/event-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventElementComponent } from './event-element/event-element.component';


@NgModule({
  declarations: [
    ShedulerComponent,
    CalendarComponent,
    AddEventComponent,
    ScrapingDuckComponent,
    EventListComponent,
    EventElementComponent
  ],
  imports: [
    CommonModule,
    ShedulerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    NgbModule
  ]
})
export class ShedulerModule { }
