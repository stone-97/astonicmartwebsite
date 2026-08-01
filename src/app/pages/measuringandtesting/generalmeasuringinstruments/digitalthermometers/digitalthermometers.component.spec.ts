import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalthermometersComponent } from './digitalthermometers.component';

describe('DigitalthermometersComponent', () => {
  let component: DigitalthermometersComponent;
  let fixture: ComponentFixture<DigitalthermometersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalthermometersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalthermometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
