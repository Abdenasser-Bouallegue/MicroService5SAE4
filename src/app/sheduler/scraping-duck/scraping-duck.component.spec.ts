import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapingDuckComponent } from './scraping-duck.component';

describe('ScrapingDuckComponent', () => {
  let component: ScrapingDuckComponent;
  let fixture: ComponentFixture<ScrapingDuckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrapingDuckComponent]
    });
    fixture = TestBed.createComponent(ScrapingDuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
