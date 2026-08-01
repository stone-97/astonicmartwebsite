import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringscalesComponent } from './measuringscales.component';

describe('MeasuringscalesComponent', () => {
  let component: MeasuringscalesComponent;
  let fixture: ComponentFixture<MeasuringscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeasuringscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeasuringscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
