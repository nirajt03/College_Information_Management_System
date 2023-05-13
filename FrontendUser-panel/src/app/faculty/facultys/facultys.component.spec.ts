import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultysComponent } from './facultys.component';

describe('FacultysComponent', () => {
  let component: FacultysComponent;
  let fixture: ComponentFixture<FacultysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
