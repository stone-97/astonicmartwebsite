import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathingapparatusComponent } from './breathingapparatus.component';

describe('BreathingapparatusComponent', () => {
  let component: BreathingapparatusComponent;
  let fixture: ComponentFixture<BreathingapparatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreathingapparatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreathingapparatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
