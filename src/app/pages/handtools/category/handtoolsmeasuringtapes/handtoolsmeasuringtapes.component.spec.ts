import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandtoolsMeasuringtapesComponent } from './handtoolsmeasuringtapes.component';

describe('MeasuringtapesComponent', () => {
  let component: HandtoolsMeasuringtapesComponent;
  let fixture: ComponentFixture<HandtoolsMeasuringtapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandtoolsMeasuringtapesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandtoolsMeasuringtapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
