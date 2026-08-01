import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveytripodsComponent } from './surveytripods.component';

describe('SurveytripodsComponent', () => {
  let component: SurveytripodsComponent;
  let fixture: ComponentFixture<SurveytripodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveytripodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurveytripodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
