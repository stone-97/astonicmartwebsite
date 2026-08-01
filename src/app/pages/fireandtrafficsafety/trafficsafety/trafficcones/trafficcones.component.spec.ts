import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficconesComponent } from './trafficcones.component';

describe('TrafficconesComponent', () => {
  let component: TrafficconesComponent;
  let fixture: ComponentFixture<TrafficconesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrafficconesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficconesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
