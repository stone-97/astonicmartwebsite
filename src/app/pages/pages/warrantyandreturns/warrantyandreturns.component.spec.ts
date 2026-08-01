import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyandreturnsComponent } from './warrantyandreturns.component';

describe('WarrantyandreturnsComponent', () => {
  let component: WarrantyandreturnsComponent;
  let fixture: ComponentFixture<WarrantyandreturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarrantyandreturnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarrantyandreturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
