import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackArchivedComponent } from './feedback-archived.component';

describe('FeedbackArchivedComponent', () => {
  let component: FeedbackArchivedComponent;
  let fixture: ComponentFixture<FeedbackArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackArchivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
