import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpingmachinesComponent } from './pumpingmachines.component';

describe('PumpingmachinesComponent', () => {
  let component: PumpingmachinesComponent;
  let fixture: ComponentFixture<PumpingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PumpingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PumpingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
