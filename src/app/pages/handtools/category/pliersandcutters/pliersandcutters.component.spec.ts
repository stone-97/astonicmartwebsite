import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PliersandcuttersComponent } from './pliersandcutters.component';

describe('PliersandcuttersComponent', () => {
  let component: PliersandcuttersComponent;
  let fixture: ComponentFixture<PliersandcuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PliersandcuttersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PliersandcuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
