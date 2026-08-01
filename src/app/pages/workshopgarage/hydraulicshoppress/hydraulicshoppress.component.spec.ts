import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydraulicshoppressComponent } from './hydraulicshoppress.component';

describe('HydraulicshoppressComponent', () => {
  let component: HydraulicshoppressComponent;
  let fixture: ComponentFixture<HydraulicshoppressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HydraulicshoppressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HydraulicshoppressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
