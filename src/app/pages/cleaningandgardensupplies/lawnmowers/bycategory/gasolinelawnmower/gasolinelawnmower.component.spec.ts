import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolinelawnmowerComponent } from './gasolinelawnmower.component';

describe('SelfpropelledComponent', () => {
  let component: GasolinelawnmowerComponent;
  let fixture: ComponentFixture<GasolinelawnmowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasolinelawnmowerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GasolinelawnmowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
