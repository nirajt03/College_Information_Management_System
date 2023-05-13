import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeacherComponent } from './my-teacher.component';

describe('MyTeacherComponent', () => {
  let component: MyTeacherComponent;
  let fixture: ComponentFixture<MyTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
