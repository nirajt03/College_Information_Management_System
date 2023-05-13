import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaDetailsComponent } from './diploma-details.component';

describe('DiplomaDetailsComponent', () => {
  let component: DiplomaDetailsComponent;
  let fixture: ComponentFixture<DiplomaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
