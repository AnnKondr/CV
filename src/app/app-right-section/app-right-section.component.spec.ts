import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRightSectionComponent } from './app-right-section.component';

describe('AppRightSectionComponent', () => {
  let component: AppRightSectionComponent;
  let fixture: ComponentFixture<AppRightSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRightSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
