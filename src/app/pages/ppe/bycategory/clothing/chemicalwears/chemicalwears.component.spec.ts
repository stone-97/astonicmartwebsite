import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalwearsComponent } from './chemicalwears.component';

describe('ChemicalwearsComponent', () => {
  let component: ChemicalwearsComponent;
  let fixture: ComponentFixture<ChemicalwearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChemicalwearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChemicalwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
