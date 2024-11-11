import { Injectable,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TimerServiceService {
  constructor() { }
  countdown: number = 0;
  countdownEmitter: EventEmitter<number> = new EventEmitter<number>();

  startCountdown(duration: number): void {
    this.countdown = duration;
    const interval = setInterval(() => {
      this.countdownEmitter.emit(this.countdown);
      if (this.countdown === 0) {
        clearInterval(interval);
        // Additional logic when countdown reaches 0
        console.log('Countdown reached 0');
      } else {
        this.countdown--;
      }
    }, 1000);
  }}
