import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalapplicationsandsprayerComponent } from './chemicalapplicationsandsprayer.component';

describe('ChemicalapplicationsandsprayerComponent', () => {
  let component: ChemicalapplicationsandsprayerComponent;
  let fixture: ComponentFixture<ChemicalapplicationsandsprayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChemicalapplicationsandsprayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChemicalapplicationsandsprayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
