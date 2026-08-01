import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeambalancesComponent } from './beambalances.component';

describe('BeambalancesComponent', () => {
  let component: BeambalancesComponent;
  let fixture: ComponentFixture<BeambalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeambalancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeambalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
