import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolderingequipmentComponent } from './solderingequipment.component';

describe('SolderingequipmentComponent', () => {
  let component: SolderingequipmentComponent;
  let fixture: ComponentFixture<SolderingequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolderingequipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolderingequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
