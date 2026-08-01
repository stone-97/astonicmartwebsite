import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringandtestingComponent } from './measuringandtesting.component';

describe('MeasuringandtestingComponent', () => {
  let component: MeasuringandtestingComponent;
  let fixture: ComponentFixture<MeasuringandtestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeasuringandtestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeasuringandtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
