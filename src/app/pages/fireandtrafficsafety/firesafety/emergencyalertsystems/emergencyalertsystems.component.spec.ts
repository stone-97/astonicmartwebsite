import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyalertsystemsComponent } from './emergencyalertsystems.component';

describe('EmergencyalertsystemsComponent', () => {
  let component: EmergencyalertsystemsComponent;
  let fixture: ComponentFixture<EmergencyalertsystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmergencyalertsystemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmergencyalertsystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
