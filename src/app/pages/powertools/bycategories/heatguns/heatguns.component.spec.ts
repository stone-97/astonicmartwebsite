import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatgunsComponent } from './heatguns.component';

describe('HeatgunsComponent', () => {
  let component: HeatgunsComponent;
  let fixture: ComponentFixture<HeatgunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeatgunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeatgunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
