import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyeyewashComponent } from './emergencyeyewash.component';

describe('EmergencyeyewashComponent', () => {
  let component: EmergencyeyewashComponent;
  let fixture: ComponentFixture<EmergencyeyewashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmergencyeyewashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmergencyeyewashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
