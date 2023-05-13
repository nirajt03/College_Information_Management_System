import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HscDetailsComponent } from './hsc-details.component';

describe('HscDetailsComponent', () => {
  let component: HscDetailsComponent;
  let fixture: ComponentFixture<HscDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HscDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HscDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
