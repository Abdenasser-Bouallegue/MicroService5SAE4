import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit, OnDestroy{
  
  constructor(
    private host: ElementRef<HTMLElement>
  ) {}
  
  ngOnInit(): void {
    this.host.nativeElement.addEventListener('click', this.ngOnDestroy.bind(this));
  }

  ngOnDestroy(): void {
    this.host.nativeElement.remove();
  }

}
