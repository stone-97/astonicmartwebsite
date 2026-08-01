import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficcontrolsystemsComponent } from './trafficcontrolsystems.component';

describe('TrafficcontrolsystemsComponent', () => {
  let component: TrafficcontrolsystemsComponent;
  let fixture: ComponentFixture<TrafficcontrolsystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrafficcontrolsystemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficcontrolsystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
