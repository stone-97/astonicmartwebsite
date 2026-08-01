import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringcansComponent } from './measuringcans.component';

describe('MeasuringcansComponent', () => {
  let component: MeasuringcansComponent;
  let fixture: ComponentFixture<MeasuringcansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeasuringcansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeasuringcansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
