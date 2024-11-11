import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalendarEvent } from 'src/app/model/calendarEvent';
import { GlobalApiService } from 'src/app/services/global-api.service';

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{
  //consts
  HOURS = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
  MINUTES = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
  
  addEventDialogOpen = false;
  isPrivateEvent = true;
  showDuck = true;

  //form variables
  beginTimeHour: string = "00";
  beginTimeMinutes: string = "00";
  endTimeHour: string = "00";
  endTimeMinutes: string = "00";
  date: string = "";
  beginTime=`${this.date}T${this.beginTimeHour}:${this.beginTimeMinutes}:00`;
  endTime=`${this.date}T${this.endTimeHour}:${this.endTimeMinutes}:00`;

  newEvent: CalendarEvent = {};
  @Output() calEvent = new EventEmitter<any>();
  @Input() localEvents:any;
  constructor(
    private _api: GlobalApiService
  ){}

  beginTimeHourChanged() {  
    this.beginTime=`${this.date}T${this.beginTimeHour}:${this.beginTimeMinutes}:00`;
    this.endTime=`${this.date}T${this.endTimeHour}:${this.endTimeMinutes}:00`;
  }
  
  beginTimeMinutesChanged() {
    this.beginTime=`${this.date}T${this.beginTimeHour}:${this.beginTimeMinutes}:00`;
  this.endTime=`${this.date}T${this.endTimeHour}:${this.endTimeMinutes}:00`;
  }
  
  endTimeHourChanged() {
    this.beginTime=`${this.date}T${this.beginTimeHour}:${this.beginTimeMinutes}:00`;
  this.endTime=`${this.date}T${this.endTimeHour}:${this.endTimeMinutes}:00`;
  }
  
  endTimeMinutesChanged() {
    this.beginTime=`${this.date}T${this.beginTimeHour}:${this.beginTimeMinutes}:00`;
  this.endTime=`${this.date}T${this.endTimeHour}:${this.endTimeMinutes}:00`;
  }

  eventForm = new FormGroup({
    label: new FormControl(''),
    description: new FormControl('')
  });


  ngOnInit(): void {
    this.addEventDialogOpen = false;
    this.isPrivateEvent = true;
    this.showDuck = true;
  }

  addEventDialogOpenHandler(){
    this.addEventDialogOpen =!this.addEventDialogOpen;
  }

  publicEventHandler(){
    this.isPrivateEvent = false;
  }

  privateEventHandler(){
    this.isPrivateEvent = true;
  }

  closeDuck(value: boolean){
    this.showDuck = false;
  }

  handleDatePicker(){
    console.log(this.date);
  }

  areEventsOverlaping() {
    let overlap = false;
    this.localEvents.array.forEach(element => {
      if (
        element.start < this.newEvent.beginTime && element.end > this.newEvent.beginTime ||
        element.start < this.newEvent.endTime && element.end > this.newEvent.endTime ||
        element.start < this.newEvent.beginTime && element.end > this.newEvent.endTime ||
        element.start > this.newEvent.beginTime && element.end < this.newEvent.endTime 
      ) {
        overlap = true
      }
    });
    return overlap;
  }

  isFormAttributesValid(): boolean{
    if(this.beginTimeHour > this.endTimeHour){
      return false;
    }

    if(this.beginTimeHour == this.endTimeHour && this.beginTimeMinutes >= this.endTimeMinutes){
      return false;
    }

    if(this.eventForm.get('label').value == "") {
      return false;
    }

    if(this.areEventsOverlaping()){
      return false
    }

    return true;
  }
  onSubmit(){
    if(this.isFormAttributesValid()) {
      //posti lel back
      this.newEvent = {
        label: this.eventForm.get('label').value,
        description: this.eventForm.get('description').value,
        beginTime: this.beginTime,
        endTime: this.endTime, 
        isPrivate: this.isPrivateEvent
      }
      console.log(this.newEvent);
      this._api.addCalendarEvent(this.newEvent).subscribe(
        (data)=>{
          console.log(data);
          this.calEvent.emit({
            title: this.newEvent.label,
            start: this.newEvent.beginTime,
            end: this.newEvent.endTime
          })
        }
      );
    }
  }
}
