import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalbalancesComponent } from './analyticalbalances.component';

describe('AnalyticalbalancesComponent', () => {
  let component: AnalyticalbalancesComponent;
  let fixture: ComponentFixture<AnalyticalbalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticalbalancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticalbalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
