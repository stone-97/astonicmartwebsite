import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumcleanersComponent } from './vacuumcleaners.component';

describe('VacuumcleanersComponent', () => {
  let component: VacuumcleanersComponent;
  let fixture: ComponentFixture<VacuumcleanersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacuumcleanersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacuumcleanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
