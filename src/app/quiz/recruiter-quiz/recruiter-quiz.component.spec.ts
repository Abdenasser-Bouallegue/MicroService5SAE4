import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterQuizComponent } from './recruiter-quiz.component';

describe('RecruiterQuizComponent', () => {
  let component: RecruiterQuizComponent;
  let fixture: ComponentFixture<RecruiterQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
