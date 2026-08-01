import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringtapesComponent } from './measuringtapes.component';

describe('MeasuringtapesComponent', () => {
  let component: MeasuringtapesComponent;
  let fixture: ComponentFixture<MeasuringtapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeasuringtapesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeasuringtapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
