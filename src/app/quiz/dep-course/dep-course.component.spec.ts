import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepCourseComponent } from './dep-course.component';

describe('DepCourseComponent', () => {
  let component: DepCourseComponent;
  let fixture: ComponentFixture<DepCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
