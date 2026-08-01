import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressurewashersComponent } from './pressurewashers.component';

describe('PressurewashersComponent', () => {
  let component: PressurewashersComponent;
  let fixture: ComponentFixture<PressurewashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PressurewashersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressurewashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
