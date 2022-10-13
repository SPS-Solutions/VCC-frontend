import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuLeaveappComponent } from './stu-leaveapp.component';

describe('StuLeaveappComponent', () => {
  let component: StuLeaveappComponent;
  let fixture: ComponentFixture<StuLeaveappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuLeaveappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuLeaveappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
