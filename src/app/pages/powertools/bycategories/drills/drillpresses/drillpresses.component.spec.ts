import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillpressesComponent } from './drillpresses.component';

describe('DrillpressesComponent', () => {
  let component: DrillpressesComponent;
  let fixture: ComponentFixture<DrillpressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrillpressesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrillpressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
