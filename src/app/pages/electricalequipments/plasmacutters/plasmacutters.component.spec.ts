import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmacuttersComponent } from './plasmacutters.component';

describe('PlasmacuttersComponent', () => {
  let component: PlasmacuttersComponent;
  let fixture: ComponentFixture<PlasmacuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlasmacuttersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlasmacuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
