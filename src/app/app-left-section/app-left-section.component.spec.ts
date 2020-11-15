import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSectionComponent } from './app-left-section.component';

describe('AppLeftSectionComponent', () => {
  let component: LeftSectionComponent;
  let fixture: ComponentFixture<LeftSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
