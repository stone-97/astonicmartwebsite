import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingbeltsComponent } from './liftingbelts.component';

describe('LiftingbeltsComponent', () => {
  let component: LiftingbeltsComponent;
  let fixture: ComponentFixture<LiftingbeltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiftingbeltsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiftingbeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
