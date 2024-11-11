import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShedulerComponent } from './sheduler.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShedulerComponent
  },
  {
    path: 'eventlist',
    component: EventListComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShedulerRoutingModule { }
