import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedulerComponent } from './sheduler.component';

describe('ShedulerComponent', () => {
  let component: ShedulerComponent;
  let fixture: ComponentFixture<ShedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShedulerComponent]
    });
    fixture = TestBed.createComponent(ShedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
