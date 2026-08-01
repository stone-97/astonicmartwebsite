import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillbitsComponent } from './drillbits.component';

describe('DrillbitsComponent', () => {
  let component: DrillbitsComponent;
  let fixture: ComponentFixture<DrillbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrillbitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrillbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
