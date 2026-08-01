import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FueltestingandmeasuringComponent } from './fueltestingandmeasuring.component';

describe('FueltestingandmeasuringComponent', () => {
  let component: FueltestingandmeasuringComponent;
  let fixture: ComponentFixture<FueltestingandmeasuringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FueltestingandmeasuringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FueltestingandmeasuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
