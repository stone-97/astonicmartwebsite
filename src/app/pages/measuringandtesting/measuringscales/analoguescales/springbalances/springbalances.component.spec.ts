import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringbalancesComponent } from './springbalances.component';

describe('SpringbalancesComponent', () => {
  let component: SpringbalancesComponent;
  let fixture: ComponentFixture<SpringbalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpringbalancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringbalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
