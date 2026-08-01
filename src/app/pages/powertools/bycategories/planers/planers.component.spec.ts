import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanersComponent } from './planers.component';

describe('PlanersComponent', () => {
  let component: PlanersComponent;
  let fixture: ComponentFixture<PlanersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
