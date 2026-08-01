import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolinebrushcuttersComponent } from './gasolinebrushcutters.component';

describe('GasolinebrushcuttersComponent', () => {
  let component: GasolinebrushcuttersComponent;
  let fixture: ComponentFixture<GasolinebrushcuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasolinebrushcuttersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasolinebrushcuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
