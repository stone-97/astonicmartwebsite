import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashlightsComponent } from './flashlights.component';

describe('FlashlightsComponent', () => {
  let component: FlashlightsComponent;
  let fixture: ComponentFixture<FlashlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
