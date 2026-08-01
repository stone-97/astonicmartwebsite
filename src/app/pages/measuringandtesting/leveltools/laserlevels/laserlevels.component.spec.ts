import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserlevelsComponent } from './laserlevels.component';

describe('LaserlevelsComponent', () => {
  let component: LaserlevelsComponent;
  let fixture: ComponentFixture<LaserlevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaserlevelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaserlevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
