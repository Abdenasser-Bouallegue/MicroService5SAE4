import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAboutMeComponent } from './feedback-about-me.component';

describe('FeedbackAboutMeComponent', () => {
  let component: FeedbackAboutMeComponent;
  let fixture: ComponentFixture<FeedbackAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
