import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficandsolarlightsComponent } from './trafficandsolarlights.component';

describe('TrafficandsolarlightsComponent', () => {
  let component: TrafficandsolarlightsComponent;
  let fixture: ComponentFixture<TrafficandsolarlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrafficandsolarlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficandsolarlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
