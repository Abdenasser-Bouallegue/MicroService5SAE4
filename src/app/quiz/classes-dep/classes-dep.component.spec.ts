import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesDepComponent } from './classes-dep.component';

describe('ClassesDepComponent', () => {
  let component: ClassesDepComponent;
  let fixture: ComponentFixture<ClassesDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
