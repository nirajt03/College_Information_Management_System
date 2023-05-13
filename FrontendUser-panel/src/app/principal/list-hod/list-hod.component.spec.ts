import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHodComponent } from './list-hod.component';

describe('ListHodComponent', () => {
  let component: ListHodComponent;
  let fixture: ComponentFixture<ListHodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
