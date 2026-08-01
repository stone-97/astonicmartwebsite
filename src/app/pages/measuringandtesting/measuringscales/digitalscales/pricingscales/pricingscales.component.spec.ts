import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingscalesComponent } from './pricingscales.component';

describe('PricingscalesComponent', () => {
  let component: PricingscalesComponent;
  let fixture: ComponentFixture<PricingscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
