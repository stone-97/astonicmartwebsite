import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrometersComponent } from './hydrometers.component';

describe('HydrometersComponent', () => {
  let component: HydrometersComponent;
  let fixture: ComponentFixture<HydrometersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HydrometersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HydrometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
