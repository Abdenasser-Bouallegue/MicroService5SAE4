import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventElementComponent } from './event-element.component';

describe('EventElementComponent', () => {
  let component: EventElementComponent;
  let fixture: ComponentFixture<EventElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventElementComponent]
    });
    fixture = TestBed.createComponent(EventElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
