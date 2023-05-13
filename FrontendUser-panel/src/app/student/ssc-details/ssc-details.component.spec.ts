import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SscDetailsComponent } from './ssc-details.component';

describe('SscDetailsComponent', () => {
  let component: SscDetailsComponent;
  let fixture: ComponentFixture<SscDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SscDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SscDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
