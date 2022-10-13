import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuMaterialsComponent } from './stu-materials.component';

describe('StuMaterialsComponent', () => {
  let component: StuMaterialsComponent;
  let fixture: ComponentFixture<StuMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
