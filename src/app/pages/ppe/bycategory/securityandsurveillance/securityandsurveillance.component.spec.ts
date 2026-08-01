import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityandsurveillanceComponent } from './securityandsurveillance.component';

describe('SecurityandsurveillanceComponent', () => {
  let component: SecurityandsurveillanceComponent;
  let fixture: ComponentFixture<SecurityandsurveillanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecurityandsurveillanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityandsurveillanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
