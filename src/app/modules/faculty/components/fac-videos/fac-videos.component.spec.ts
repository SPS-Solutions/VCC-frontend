import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacVideosComponent } from './fac-videos.component';

describe('FacVideosComponent', () => {
  let component: FacVideosComponent;
  let fixture: ComponentFixture<FacVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
