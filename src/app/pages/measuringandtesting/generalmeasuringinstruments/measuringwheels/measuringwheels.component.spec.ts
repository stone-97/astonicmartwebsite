import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringwheelsComponent } from './measuringwheels.component';

describe('MeasuringwheelsComponent', () => {
  let component: MeasuringwheelsComponent;
  let fixture: ComponentFixture<MeasuringwheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeasuringwheelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeasuringwheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
